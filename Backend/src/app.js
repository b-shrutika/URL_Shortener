const express = require("express");
const linkRouter = require("./routes/link.routes");

const app = express();
app.use(express.json());
app.use("/api/links", linkRouter);

module.exports = app;