/*
 *
 *
 * ADDING USER TO THE DATABASE CONTROLLER
 *
 *
 */

// DEPENDENCIES
const Article = require("../../models/article");
const devnode = require("../scheduler");
const { getOne } = require("../devtoControllers/getOne");

module.exports = {
  add: async (req, res) => {
    try {
      let result = {};
      let status = 201;
      const payload = req.decoded;
      if (payload) {
        let title = req.body.title;
        let body = req.body.body;
        let tags = req.body.tags;
        let safeData = { user: payload.user._id, secret: req.body.secret };
        let userapikey = await getOne(safeData);
        let time = {
          minutes: req.body.minutes,
          hours: req.body.hours,
          date: req.body.date,
          month: req.body.month,
        };
        let bodyData = {
          title: title,
          body_markdown: body,
          api_key: userapikey,
        };
        const article = new Article({
          title: title,
          body: body,
          tags: tags,
          author: safeData.user,
        });
        article.save((err, article) => {
          if (!err) {
            result.status = status;
            result.result = article;
            devnode.scheduler(time, bodyData);
          } else {
            status = 500;
            result.status = status;
            result.error = err;
          }
          res.status(status).send(result);
        });
      } else {
        status = 401;
        result.status = status;
        result.error = `Authentication error`;
        res.status(status).send(result);
      }
    } catch (err) {
      console.log(err);
    }
  },
};
