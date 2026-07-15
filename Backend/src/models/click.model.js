const mongoose = require("mongoose");

const clickSchema = new mongoose.Schema({
    shortCode:{
        type:String,
        required:[true,"Short code is required for creating a click"]
    },
    timestamp:{
        type:Date,
        default:Date.now
    },
    ipAddress:{
        type:String,
        required:[true,"IP address is required for creating a click"]
    },
    userAgent:{
        type:String,
        required:[true,"User agent is required for creating a click"]
    },
    referrer:{
        type:String,
        default:"Direct"
    },
    device:{
        type:String,
        required:[true,"Device is required for creating a click"]
    }
})

const clickModel = mongoose.model("click", clickSchema);

module.exports = clickModel;