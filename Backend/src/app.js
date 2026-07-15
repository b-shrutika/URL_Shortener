const express = require("express");
const linkRouter = require("./routes/link.routes");
const authRouter = require("./routes/auth.routes")

const app = express();
app.use(express.json());
app.use("/api/links", linkRouter);
app.use("/api/auth", authRouter)

module.exports = app;