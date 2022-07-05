/*
 *
 *  FETCHING THE LIST OF ARTICLES
 *
 */

// DEPENDENCIES
const Article = require("../../models/article");

module.exports = {
  getAll: (req, res) => {
    let result = {};
    let status = 200;
    Article.find({}, (err, articles) => {
      if (!err) {
        result.status = status;
        result.error = err;
        result.result = articles;
      } else {
        status = 500;
        result.status = status;
        result.error = err;
      }
      res.status(status).send(result);
    });
  },
};
