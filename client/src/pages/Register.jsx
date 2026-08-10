import React from 'react'
import { Link } from 'react-router-dom';

const Register = () => {
  return (
        <div className="flex min-h-screen items-center justify-center bg-transparent px-4 py-12">

            <section className="uiverse-register-container">
                <header className="font-script">Create Account</header>
                <form className="uiverse-register-form">
                    
                    <div className="input-box">
                        <label>Full Name</label>
                        <input type="text" placeholder="Enter full name" required />
                    </div>

                    <div className="input-box">
                        <label>Email Address</label>
                        <input type="email" placeholder="Enter email address" required />
                    </div>

                    <div className="input-box">
                        <label>Password</label>
                        <input type="password" placeholder="Enter password" required />
                    </div>

                    <div className="input-box">
                        <label>Confirm Password</label>
                        <input type="password" placeholder="Confirm password" required />
                    </div>

                    <button type="submit">Register</button>
                    
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
