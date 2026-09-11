const express = require("express");
const linkRouter = require("./routes/link.routes");
const authRouter = require("./routes/auth.routes")
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(
    cors({
        origin: ["http://localhost:5173", "https://urlshortener1-git-main-bshrutika2004-6361s-projects.vercel.app"],
        credentials: true,
    })
);
const linkController = require("./controllers/link.controller");

app.use("/api/links", linkRouter);
app.use("/api/auth", authRouter);

app.get("/:shortCode", linkController.redirectToOriginalUrl);

module.exports = app;