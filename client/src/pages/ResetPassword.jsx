import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { resetPassword } from "../api/auth";
import Home from './Home';

const ResetPassword = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        newPassword: "",
    });
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        });
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        setLoading(true);
        setError("");
        setMessage("");
        
        try {
           const response = await resetPassword(formData);
           setMessage(response.message || "Password reset successfully!");
           setTimeout(() => navigate("/login"), 2000);
        } catch (error) {
            setError(
                error.response?.data?.error || error.response?.data?.message || "Password reset failed"
            )
        } finally{
            setLoading(false);
        }
    }

    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Top Left Website Name / Logo */}
            <Link to="/" className="fixed top-6 left-8 z-50 flex items-center gap-2 group cursor-pointer">
                <span className="text-2xl font-bold text-[#FF60AF] tracking-tight drop-shadow-[0_0_10px_rgba(255,96,175,0.4)] group-hover:scale-105 transition-transform duration-300">
                    Shawrtsy
                </span>
            </Link>

            {/* Blurred Home Page Background */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none filter blur-md opacity-45 scale-105 transform-gpu">
                <Home />
            </div>

            {/* Dark Glass Overlay & Floating 3D Card */}
            <div className="fixed inset-0 z-20 bg-[#0a0e27]/60 backdrop-blur-xl flex items-center justify-center p-4 overflow-y-auto">
                <form className="uiverse-login-form my-auto" onSubmit={handleSubmit}>
                    <h1 className="header-text font-script" style={{ fontSize: '1.8rem' }}>Reset Password</h1>
                    
                    {error && (
                        <div className='rounded-lg bg-red-500/20 border border-red-500/40 p-3 text-red-300 text-sm text-center font-medium'>
                            {error}
                        </div>
                    )}
                    {message && (
                        <div className='rounded-lg bg-emerald-500/20 border border-emerald-500/40 p-3 text-emerald-300 text-sm text-center font-medium'>
                            {message} Redirecting...
                        </div>
                    )}
                    
                    <span className="input-span">
                        <label htmlFor="email" className="label">Registered Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </span>
                    
                    <span className="input-span">
                        <label htmlFor="newPassword" className="label">New Password</label>
                        <input 
                            type="password" 
                            name="newPassword" 
                            id="newPassword" 
                            value={formData.newPassword}
                            onChange={handleChange}
                            required
                            minLength={6}
                        />
                    </span>
                    
                    <input 
                        className="submit" 
                        type="submit" 
                        value={loading ? "Resetting..." : "Reset Password"} 
                        disabled={loading}
                        style={{ marginTop: '20px' }}
                    />
                    
                    <span className="span signup-text">
                        Remembered it? <Link to="/login">Log in</Link>
                    </span>
                </form>
            </div>
        </div>
    )
}

export default  ResetPassword
