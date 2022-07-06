/*
 *
 *
 * ADDING API KEY TO THE DATABASE CONTROLLER
 *
 *
 */

// DEPENDENCIES
const Key = require("../../models/devtoKey");

module.exports = {
  add: (req, res) => {
    let result = {};
    let status = 201;

    // REQUIRED FIELDS
    const apikey = req.body.apikey;
    const secret = req.body.secret;
    const user = req.decoded.user._id;
    //CREATING A NEW API KEY OBJECT
    const key = new Key({
      apikey: apikey,
      user: user,
      secret: secret,
    });
    key.save((err, key) => {
      if (!err) {
        result.status = status;
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
