const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

async function register(req, res) {
    const { name, email, password } = req.body;
    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
        return res.status(409).json({ error: "Email already exists" });
    }

    const user = await userModel.create({ name, email, password });
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
    const user = await userModel.findOne({ email });

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

async function logout(req, res) {
    res.status(200).json({
        message: "Logged out successfully"
    });
}
async function getCurrentUser(req, res) {
    const user = await UserModel.findById(req.userId).select("-password");

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
        message: "User fetched successfully",
        user
    });
}

module.exports = {login, register, logout, getCurrentUser}