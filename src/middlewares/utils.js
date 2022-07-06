/*
 *
 * UTILITIES FOR TOKEN VALIDATION
 *
 */

// DEPENDENCIES
const jwt = require("jsonwebtoken");

// MODULE TO BE EXPORTED
module.exports = {
  validateToken: (req, res, next) => {
    const authorizationHeaader = req.headers.authorization;
    let result;
    if (authorizationHeaader) {
      // GET THE TOKEN FROM THE HEADERS
      const token = req.headers.authorization.split(" ")[1];

      // SET THE PARAMETERS TO BE PASSED IN THE TOKEN
      const options = {
        expiresIn: "2d",
        issuer: "secretjsonissuer",
      };
      try {
        result = jwt.verify(token, process.env.JWT_SECRET, options);
        req.decoded = result;
        next();
      } catch (err) {
        throw new Error(err);
      }
    } else {
      result = {
        error: `Authentication error. Token required.`,
        status: 401,
      };
      res.status(401).send(result);
    }
  },
};
