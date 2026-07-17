const LinkModel = require("../models/link.model");
const { nanoid } = require("nanoid");
const clickModel = require("../models/click.model");
const UAparser = require("ua-parser-js");
const redisClient = require("../config/redis");

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
        shortCode: shortCode,
         userId:req.userId
    })
    const shortLink = `${process.env.BASE_URL}/${newLink.shortCode}`;
    res.status(201).json({
        message:"Short code created successfully",
        status:"success",
        shortCode: newLink.shortCode,
        shortLink: shortLink,
       
    })
}


async function redirectToOriginalUrl(req, res){
    const {shortCode} = req.params;

    const cacheUrl = await redisClient.redisClient.get(shortCode);
    if(cacheUrl){
        logClick(req,shortCode);
        return res.redirect(cacheUrl)
    }

    const link = await LinkModel.findOne({shortCode});
    if(!link){
        return res.status(404).json({
            message:"URL not found"
        })
    }

    await redisClient.redisClient.set(shortCode, link.originalUrl, {EX:3600});

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
async function getUserUrls(req, res) {
    const links = await LinkModel.find({ userId: req.userId }).sort({ createdAt: -1 });

    res.status(200).json({
        message: "Links fetched successfully",
        links
    });
}
module.exports = {
    createLink,
    redirectToOriginalUrl, 
    getUserUrls
}