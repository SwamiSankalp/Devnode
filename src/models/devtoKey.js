/*
 *
 * DEVTO API KEY DATABASE SCHEMA
 *
 */

// DEPENDENCIES
const mongoose = require("mongoose");

// schema maps to a collection
const Schema = mongoose.Schema;

const devtoKeySchema = new Schema({
  apiKey: {
    type: String,
    required: true,
    trim: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

// EXPORT THE MODULE
module.exports = mongoose.model("Key", devtoKeySchema);
