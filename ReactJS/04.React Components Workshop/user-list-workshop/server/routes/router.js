const userRouter = require("./user.js");
const cors = require("cors");

module.exports = (app) => {
  app.use("/api/users", userRouter);
};
