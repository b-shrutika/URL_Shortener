const mongoose = require("mongoose");

const linkSchema = new mongoose.Schema({
    originalUrl: {
        type: String,
        required: true
    },
    shortCode: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

const LinkModel =  mongoose.model("Link", linkSchema);

module.exports = LinkModel;