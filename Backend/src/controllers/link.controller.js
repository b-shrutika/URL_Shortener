const LinkModel = require("../models/link.model");
const { nanoid } = require("nanoid");

async function createLink(req, res){
    const {originalUrl} = req.body;
    if(!originalUrl){
        return res.status(400).json({
            message:"Original URL is required",
            status:"failed"
        })
    }
    const shortCodeExists = await LinkModel.findOne({originalUrl});
    if(shortCodeExists){
        return res.status(422).json({
            message:"Short code already exists for this URL.",
            status:"failed"
        })
    }

    const shortCode = nanoid(6); 
    const newLink = await LinkModel.create({
        originalUrl: originalUrl,
        shortCode: shortCode
    })
    res.status(201).json({
        message:"Short code created successfully",
        status:"success",
        shortCode: newLink.shortCode
    })
}

module.exports = {
    createLink
}