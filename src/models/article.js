/*
 *
 * USER DATABASE SCHEMA
 *
 */

// DEPENDENCIES
const mongoose = require("mongoose");

// schema maps to a collection
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  body: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  tags: {
    type: [String],
  },
});

// EXPORT THE MODULE
module.exports = mongoose.model("Article", articleSchema);
