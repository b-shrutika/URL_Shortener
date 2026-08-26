import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from "../api/auth";
import { useAuth } from '../context/AuthContext';
import Home from './Home';

const Login = () => {
    const navigate = useNavigate();
    const { setUser } = useAuth();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
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
        try {
           const response = await loginUser(formData);
           setUser(response.user);
           localStorage.setItem("token", response.token);
           navigate("/shorten");
        } catch (error) {
            setError(
                error.response?.data?.message || "Login Failed"
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
                    <h1 className="header-text font-script">Login</h1>
                    
                    {error && (
                        <div className='rounded-lg bg-red-500/20 border border-red-500/40 p-3 text-red-300 text-sm text-center font-medium'>
                            {error}
                        </div>
                    )}
                    
                    <span className="input-span">
                        <label htmlFor="email" className="label">Email</label>
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
                        <label htmlFor="password" className="label">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </span>
                    
                    <span className="span forgot-password">
                        <Link to="#">Forgot password?</Link>
                    </span>
                    
                    <input 
                        className="submit" 
                        type="submit" 
                        value={loading ? "Logging in..." : "Log in"} 
                        disabled={loading}
                    />
                    
                    <span className="span signup-text">
                        Don't have an account? <Link to="/register">Sign up</Link>
                    </span>
                </form>
            </div>
        </div>
    )
}

export default Login