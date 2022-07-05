/*
 *
 * ALL THE ROUTES FOR MODEL USER
 *
 */

// DECLARE ALL THE ROUTES
const addcontroller = require("../controllers/articleControllers/add");
const getcontroller = require("../controllers/articleControllers/getAll");
const getonecontroller = require("../controllers/articleControllers/getOne");
const { validateToken } = require("../middlewares/utils");

module.exports = (router) => {
  router
    .route("/articles")
    .post(validateToken, addcontroller.add)
    .get(getcontroller.getAll);
  router.route("/articles/:articleid").get(getonecontroller.getOne);
};
