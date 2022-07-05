/*
 *
 * ALL THE ROUTES FOR MODEL USER
 *
 */

// DECLARE ALL THE ROUTES
const addcontroller = require("../controllers/userControllers/add");
const logcontroller = require("../controllers/userControllers/login");

module.exports = (router) => {
  router.route("/users").post(addcontroller.add);
  router.route("/login").post(logcontroller.login);
};
