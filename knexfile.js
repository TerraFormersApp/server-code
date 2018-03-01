require("dotenv").config();

module.exports = {

  development: {
    client: "pg",
    connection: "postgres://localhost/terraformer"
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL
  }

};
