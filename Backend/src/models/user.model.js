const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
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

userSchema.pre("save", async function(){
    if(!this.isModified("password")){
        return ;
    }
    this.password = await bcrypt.hash(this.password,10);
})
const userModel = mongoose.model("user", userSchema);

module.exports = userModel;