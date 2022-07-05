/*
 *
 * FETCHING THE DATA OF ONE USER
 *
 */

// DEPENDENCIES
const Key = require("../../models/devtoKey");

module.exports = {
  getOne: (req, res, userid) => {
    let result = {};
    let status = 200;
    Key.find({ user: userid }, (err, key) => {
      if (!err) {
        result.status = status;
        result.error = err;
        result.result = key;
      } else {
        status = 500;
        result.status = status;
        result.error = err;
      }
      res.status(status).send(result);
    });
  },
};
