"use strict";
require("dotenv").config();
const express = require("express"),
  cors = require("cors"),
  errorHandler = require("errorhandler"),
  morgan = require("morgan"),
  bodyParser = require("body-parser");

const app = express();
app.set("port", process.env.PORT || 3001);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DEV middlewares
if (process.env.NODE_ENV == "development") {
  app.use(
    errorHandler({
      dumpExceptions: true,
      showStack: true,
    }),
  );
  app.use(errorHandler());
  app.use(
    morgan(
      "[:date[web]] :method :url :status :response-time ms - :res[content-length]",
    ),
  );
}

app.get("/", (req, res) => {
  res.json({ "response": "ok" });
});

app.listen(app.get("port"), () => {
  console.log("Server started on http://localhost:" + app.get("port"));
});
