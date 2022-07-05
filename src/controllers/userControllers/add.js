/*
 *
 *
 * ADDING USER TO THE DATABASE CONTROLLER
 *
 *
 */

// DEPENDENCIES
const User = require("../../models/user");

module.exports = {
  add: (req, res) => {
    let result = {};
    let status = 201;
    // REQUIRED FIELDS
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    //CREATING A NEW USER OBJECT
    const user = new User({
      username: username,
      password: password,
      email: email,
    });
    user.save((err, user) => {
      if (!err) {
        result.status = status;
        result.result = user;
      } else {
        status = 500;
        result.status = status;
        result.error = err;
      }
      res.status(status).send(result);
    });
  },
};
