const { DataSource } = require("typeorm");
require("dotenv").config();

const Task = require("./entity/Task");

const dbUrl = new URL(process.env.DB_URL);

module.exports = new DataSource({
  type: "postgres",
  host: dbUrl.hostname,
  port: parseInt(dbUrl.port),
  username: dbUrl.username,
  password: dbUrl.password,
  database: dbUrl.pathname.slice(1),
  synchronize: true,
  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: false
    }
  },
  entities: [Task],
});
