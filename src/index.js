const express = require("express");
const next = require("next");
const cors = require('cors');
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const bodyParser = require("body-parser");

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(bodyParser.json());
    server.use(cors());
    server.get("*", (req, res) => {
      console.log("servidor rodando - get", req.body);
      return handle(req, res);
    });

    server.post("*", (req, res) => {
      console.log("server req", req.body);
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
