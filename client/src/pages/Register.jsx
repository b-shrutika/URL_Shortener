import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../api/auth';
import Home from './Home';

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (formData.password !== formData.confirmPassword) {
            return setError("Passwords do not match");
        }

        setLoading(true);
        try {
            await registerUser({
                name: formData.name,
                email: formData.email,
                password: formData.password
            });
            navigate("/login");
        } catch (err) {
            setError(err.response?.data?.error || err.response?.data?.message || "Registration Failed");
        } finally {
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
                <section className="uiverse-register-container my-auto">
                    <header className="font-script">Create Account</header>
                    <form className="uiverse-register-form" onSubmit={handleSubmit}>
                        
                        {error && (
                            <div className='rounded-lg bg-red-500/20 border border-red-500/40 p-3 mb-4 text-red-300 text-sm text-center font-medium'>
                                {error}
                            </div>
                        )}

                        <div className="input-box">
                            <label>Full Name</label>
                            <input 
                                type="text" 
                                name="name"
                                placeholder="Enter full name" 
                                value={formData.name}
                                onChange={handleChange}
                                required 
                            />
                        </div>

                        <div className="input-box">
                            <label>Email Address</label>
                            <input 
                                type="email" 
                                name="email"
                                placeholder="Enter email address" 
                                value={formData.email}
                                onChange={handleChange}
                                required 
                            />
                        </div>

                        <div className="input-box">
                            <label>Password</label>
                            <input 
                                type="password" 
                                name="password"
                                placeholder="Enter password" 
                                value={formData.password}
                                onChange={handleChange}
                                required 
                            />
                        </div>

                        <div className="input-box">
                            <label>Confirm Password</label>
                            <input 
                                type="password" 
                                name="confirmPassword"
                                placeholder="Confirm password" 
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required 
                            />
                        </div>

                        <button type="submit" disabled={loading}>
                            {loading ? "Registering..." : "Register"}
                        </button>
                        
                        <p className="mt-6 text-center text-text-gray">
                            Already have an account?
                            <Link to="/login" className="ml-2 text-primary hover:underline">
                                Login
                            </Link>
                        </p>
                    </form>
                </section>
            </div>
        </div>
    );
}

export default Register
