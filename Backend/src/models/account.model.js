const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const accountSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required for creating an account"]
    },
    email:{
        type:String,
        required:[true,"Email is required for creating an user"],
        unique:[true,"Email already exists"]
    },
    password:{
        type:String,
        required:[true,"Password is required for creating an account"]
    }

},{timestamps:true})

accountSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        return next();
    }
    this.password = await bcrypt.hash(this.password,10);
    next();
})
const accountModel = mongoose.model("account", accountSchema);

module.exports = accountModel;