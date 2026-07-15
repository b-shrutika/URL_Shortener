const LinkModel = require("../models/link.model");
const { nanoid } = require("nanoid");
const clickModel = require("../models/click.model");
const UAparser = require("ua-parser-js");

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
    const shortLink = `${process.env.BASE_URL}/${newLink.shortCode}`;
    res.status(201).json({
        message:"Short code created successfully",
        status:"success",
        shortCode: newLink.shortCode,
        shortLink: shortLink
    })
}


async function redirectToOriginalUrl(req, res){
    const {shortCode} = req.params;
    const link = await LinkModel.findOne({shortCode});
    if(!link){
        return res.status(404).json({
            message:"URL not found"
        })
    }
    logClick(req, shortCode);
    return res.redirect(link.originalUrl);
}

function logClick(req,shortCode){
    const parser = new UAparser(req.headers['user-agent']);
    const device = parser.getDevice().type || "Desktop";

    clickModel.create({
        shortCode:shortCode,
        ipAddress:req.ip,
        userAgent:req.headers['user-agent'],
        referrer:req.headers['referer'],
        device:device
}).catch(err => console.error("Error logging click:", err));

}
module.exports = {
    createLink,
    redirectToOriginalUrl
}