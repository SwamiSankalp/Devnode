/*
 *
 * ALL THE ROUTES FOR API KEY
 *
 */

// DECLARE ALL THE ROUTES
const addcontroller = require("../controllers/devtoControllers/add");
const getOneController = require("../controllers/devtoControllers/getOne");
const { validateToken } = require("../middlewares/utils");

module.exports = (router) => {
  router.route("/apikey").post(validateToken, addcontroller.add);
  //.get(validateToken, getOneController.getOne);
};
