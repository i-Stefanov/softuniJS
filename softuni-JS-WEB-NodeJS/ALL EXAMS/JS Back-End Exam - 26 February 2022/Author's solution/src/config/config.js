module.exports = {
  development: {
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || "27017",
    appPort: process.env.APP_PORT || "3000", // todo add your own info here!!
    table: process.env.DB_TABLE || "JobAds", // todo add your own info here!!
    dBaseUrl: `mongodb://${process.env.DB_HOST || "localhost"}:${process.env.DB_PORT || "27017"}/${
      process.env.DB_TABLE || "JobAds" // todo add your own info here!!
    }`,
    saltRounds: 5,
    cookie_name: "JobAds", // todo add your own info here!!
    secret: "pesho believes that gosho is something else entirely",
    tokenExpDate: "1h",
  },
  production: {},
};
