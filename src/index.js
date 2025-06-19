require("reflect-metadata");
const express = require("express");
const bodyParser = require("body-parser");
const dataSource = require("./data-source");
const routes = require("./routes");
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
const PORT = process.env.PORT || 3001

dataSource.initialize().then(() => {
  const taskRepo = dataSource.getRepository("Task");
  app.use("/", routes(taskRepo));

  app.listen(PORT, () => console.log(`Server on http://localhost:${PORT}`));
});
