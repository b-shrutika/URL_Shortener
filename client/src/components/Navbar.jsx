import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='flex items-center justify-between px-6 py-4 shadow-sm'>
            <h1 className='text-2xl font-bold text-primary'>URL Shortener</h1>

            <div className='hidden space-x-6 md:flex'>
                <a href="#features"
                    className="hover:text-primary transition-colors cursor-pointer text-text-gray"
                >
                    Features
                </a>

                <a href="#about"
                    className="hover:text-primary transition-colors cursor-pointer text-text-gray"
                >
                    About
                </a>
            </div>
            <div className='space-x-4 flex items-center'>
                <Link to="/login" className="user-profile">
                    <div className="user-profile-inner">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                        Login
                    </div>
                </Link>
                <Link to="/register" className="rainbow-hover">
                    <span className="sp">Register</span>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
