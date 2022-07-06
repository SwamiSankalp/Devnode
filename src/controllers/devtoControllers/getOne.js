/*
 *
 * FETCHING THE DATA OF ONE USER
 *
 */

// DEPENDENCIES
const Key = require("../../models/devtoKey");
const CryptoJS = require("crypto-js");

module.exports = {
  getOne: async (safeData) => {
    const user = safeData.user;
    try {
      const userApiKeys = await Key.find({ "user._id": user._id });
      if (!userApiKeys) {
        return `error`;
      }
      let latestApiKey = userApiKeys[userApiKeys.length - 1].apikey;
      let secretsafe = CryptoJS.AES.decrypt(
        latestApiKey,
        safeData.secret
      ).toString(CryptoJS.enc.Utf8);
      if (!secretsafe) {
        console.log(`error decrypting`);
      } else {
        return secretsafe;
      }
    } catch (error) {
      return `error`;
    }
  },
};
