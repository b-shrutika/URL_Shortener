const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

async function register(req, res) {
    const { name, email, password } = req.body;
    
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: "Please provide a valid email address" });
    }

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
    
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: "Please provide a valid email address" });
    }

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

async function resetPassword(req, res) {
    const { email, newPassword } = req.body;

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: "Please provide a valid email address" });
    }

    if (!newPassword || newPassword.length < 6) {
        return res.status(400).json({ error: "Password must be at least 6 characters long" });
    }

    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        user.password = newPassword;
        await user.save(); // pre-save hook will hash it

        return res.status(200).json({ message: "Password reset successfully" });
    } catch (error) {
        console.error("Error resetting password:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = { login, register, logout, getCurrentUser, resetPassword }