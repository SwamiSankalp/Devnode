/*
 *
 * DECLARING ALL ROUTES
 *
 */

const users = require("./user");
const articles = require("./article");
const apikey = require("./apikey");

module.exports = (router) => {
  users(router);
  articles(router);
  apikey(router);
  return router;
};
