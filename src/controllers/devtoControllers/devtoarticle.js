/*
 *
 * Pushing articles to DEVTO
 *
 */

// DEPENDENCIES
const axios = require("axios");
const baseURL = `https://dev.to/api/articles`;

let push = async (bodyData) => {
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
    return article.data;
  } catch (error) {
    return error;
  }
};

module.exports = {
  push,
};
