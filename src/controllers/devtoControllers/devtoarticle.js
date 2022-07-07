/*
 *
 * Pushing articles to DEVTO
 *
 */

// DEPENDENCIES
const axios = require("axios");
const baseURL = `https://dev.to/api/articles`;
const { update } = require("../articleControllers/updateStatus");

let push = async (bodyData, _id) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      api_key: bodyData.api_key,
    },
  };
  const data = {
    article: {
      title: bodyData.title,
      published: true,
      body_markdown: bodyData.body_markdown,
    },
  };
  try {
    const article = await axios.post(baseURL, data, config);
    const updateStatus = await update(_id);
    let response = {
      article: article.data,
      status: updateStatus.data,
    };
    return response;
  } catch (error) {
    return error;
  }
};

module.exports = {
  push,
};
