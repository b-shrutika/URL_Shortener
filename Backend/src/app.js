const express = require("express");
const linkRouter = require("./routes/link.routes");
const authRouter = require("./routes/auth.routes")
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);
app.use("/api/links", linkRouter);
app.use("/api/auth", authRouter)

module.exports = app;