/*
 *
 * FETCHING THE DATA OF ONE USER
 *
 */

// DEPENDENCIES
const Key = require("../../models/devtoKey");

module.exports = {
  getOne: async (user) => {
    const _id = user._id;
    try {
      const apikey = await Key.find({ "user._id": _id });
      if (!apikey) {
        return res.status(404).json();
      }
      return apikey;
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
