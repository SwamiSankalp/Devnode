/*
 *
 * Scheduling Mechanism
 *
 */

// DEPENDENCIES
const { CronJob } = require("cron");
const devtoarticle = require("./devtoarticle");

let scheduler = (time, bodyData) => {
  let job = new CronJob(
    `${time.minutes} ${time.hours} ${time.date} ${time.month} *`,
    async function () {
      await devtoarticle.push(bodyData);
      null, true, "Asia/Kolkata";
    }
  );

  job.start();
};

module.exports = {
  scheduler,
};
