const accountModel = require("../models/account.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

async function register(req, res) {
    const { name, email, password } = req.body;
    const existingUser = await accountModel.findOne({ email });

    if (existingUser) {
        return res.status(409).json({ error: "Email already exists" });
    }

    const user = await accountModel.create({ name, email, password });
    res.status(201).json({
        message: "User registered successfully",
        user: {
            id: user._id,
            name: user.name,
            email: user.email
        }
    });

}

async function login(req, res) {
    const { email, password } = req.body;
    const user = await accountModel.findOne({ email });

    if (!user) {
        return res.status(401).json({ error: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(401).json({ error: "Invalid email or password" });
    }
    const token = jwt.sign(
        { userId: user._id },
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
    );
    return res.status(200).json({
        message:"User Logged in successfully",
        userId:user._id,
        token:token
    })
}


module.exports = {login, register}