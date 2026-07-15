const rateLimiter = require("express-rate-limit");

const createLinkLimiter = rateLimiter({
    windowMs: 60 * 60 * 1000,
    max: 5, 
    message:{
        status:"failed",
        message:"Too many requests from this IP, please try again after an hour"
    }
})

module.exports = createLinkLimiter;