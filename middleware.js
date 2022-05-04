const express = require("express");
const reqFilter = require("./middlewareExport")

const app = express();
const route = express.Router()

// app.use(reqFilter);

route.use(reqFilter)

app.get("/", (req, res) => {
  res.send("Home page");
});

app.get("/users", (req, res) => {
  res.send("Users page");
});

route.get("/help", (req, res) => {
  res.send("Helpers page");
});

app.use('/', route)

app.listen(4000);
