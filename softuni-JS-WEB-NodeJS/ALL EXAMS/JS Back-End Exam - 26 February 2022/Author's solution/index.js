const config = require("./src/config/config.js")[process.env.APP_ENV || "development"];
module.exports = config;

const mongoose = require("mongoose");
const app = require("express")();

async function initApp() {
  require("./src/config/express")(app);
  await mongoose.connect(config.dBaseUrl);
  console.log(`DB is connected at ${config.dBaseUrl}. Awaiting requests...`);
  app.listen(
    config.appPort,
    console.log(`Listening on port ${config.appPort}! Now its up to you...`)
  );
}
initApp();
