import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../api/auth';

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
        <div className="flex min-h-screen items-center justify-center bg-transparent px-4 py-12">
            <section className="uiverse-register-container">
                <header className="font-script">Create Account</header>
                <form className="uiverse-register-form" onSubmit={handleSubmit}>
                    
                    {error && (
                        <div className='rounded bg-red-100 p-3 mb-4 text-red-700 text-sm text-center'>
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
    );
}

export default Register
