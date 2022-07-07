/*
 *
 *  UPDATE THE USER DATA
 *
 */

// DEPENDENCIES
const Article = require("../../models/article");

module.exports = {
  update: (req, res, _id) => {
    console.log(_id);
    let result = {};
    let status = 200;
    Article.findByIdAndUpdate({ _id }, { isLive: true }, (err, article) => {
      if (!err && article) {
        status = 200;
        result.status = status;
        result.result = article;
        res.status(status).send(result);
      } else {
        status = 404;
        result.status = status;
        result.error = err;
        res.status(status).send(result);
      }
    });
  },
};
