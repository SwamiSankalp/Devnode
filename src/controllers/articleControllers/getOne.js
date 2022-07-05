/*
 *
 * FETCHING THE DATA OF ONE USER
 *
 */

// DEPENDENCIES
const Article = require("../../models/article");

module.exports = {
  getOne: (req, res) => {
    let result = {};
    let status = 200;
    Article.findById({ _id: req.params.articleid }, (err, article) => {
      if (!err) {
        result.status = status;
        result.error = err;
        result.result = article;
      } else {
        status = 500;
        result.status = status;
        result.error = err;
      }
      res.status(status).send(result);
    });
  },
};
