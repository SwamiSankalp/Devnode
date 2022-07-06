/*
 *
 * DEVTO API KEY DATABASE SCHEMA
 *
 */

// DEPENDENCIES
const mongoose = require("mongoose");
const CryptoJS = require("crypto-js");

// schema maps to a collection
const Schema = mongoose.Schema;

const devtoKeySchema = new Schema({
  apikey: {
    type: String,
    required: true,
    trim: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  secret: {
    type: String,
    required: true,
    trim: true,
  },
});

// encrypt password before save
devtoKeySchema.pre("save", function (next) {
  const key = this;
  if (!key.isModified || !key.isNew) {
    next();
  } else {
    let safe = CryptoJS.AES.encrypt(key.apikey, key.secret).toString();
    key.apikey = safe;
    key.secret = "default";
    let secretsafe = CryptoJS.AES.decrypt(key.apikey, `003059`).toString(
      CryptoJS.enc.Utf8
    );
    console.log(secretsafe);
    next();
  }
});

// EXPORT THE MODULE
module.exports = mongoose.model("Key", devtoKeySchema);
