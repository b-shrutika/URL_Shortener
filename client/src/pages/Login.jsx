import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { loginUser } from "../api/auth";
import { useAuth } from '../context/AuthContext';

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
        <div className='flex min-h-screen items-center justify-center bg-transparent px-4 py-12'>
            <form className="uiverse-login-form" onSubmit={handleSubmit}>
                <h1 className="header-text font-script">Login</h1>
                
                {error && (
                    <div className='rounded bg-red-100 p-3 text-red-700 text-sm text-center'>{error}</div>
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
    )
}

export default Login