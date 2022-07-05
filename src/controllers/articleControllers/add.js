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
const apiKey = require("../devtoControllers/getOne");

module.exports = {
  add: (req, res) => {
    let result = {};
    let status = 201;
    const payload = req.decoded;
    if (payload) {
      // REQUIRED FIELDS
      const title = req.body.title;
      const body = req.body.body;
      const tags = req.body.tags;
      const user = payload.user._id;
      let key = apiKey.getOne(user);
      let time = {
        minutes: req.body.minutes || 39,
        hours: req.body.hours || 19,
        date: req.body.date || 4,
        month: req.body.month || "jul",
      };
      let bodyData = {
        title: title || "Scheduled Article",
        body_markdown: body || `# Heluu`,
        api_key: key.apiKey,
      };
      //CREATING A NEW ARTICLE OBJECT
      const article = new Article({
        title: title,
        body: body,
        tags: tags,
        author: user,
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
  },
};
