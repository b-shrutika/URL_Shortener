import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 backdrop-blur-md bg-[#07192F]/60 border-b border-[#FF60AF]/25 transition-all">
            <h1 className="text-2xl font-bold text-[#FF60AF] tracking-tight drop-shadow-[0_0_10px_rgba(255,96,175,0.4)]">
                Shawrtsy
            </h1>

            <div className="flex items-center space-x-6">
                <div className="hidden md:flex space-x-6 mr-4">
                    <a href="#features"
                        className="hover:text-[#FF60AF] transition-colors cursor-pointer text-text-gray font-medium"
                    >
                        Features
                    </a>

                    <a href="#about"
                        className="hover:text-[#FF60AF] transition-colors cursor-pointer text-text-gray font-medium"
                    >
                        About
                    </a>

                    <a href="#contact"
                        className="hover:text-[#FF60AF] transition-colors cursor-pointer text-text-gray font-medium"
                    >
                        Contact
                    </a>
                </div>
                <div className="space-x-4 flex items-center">
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
            </div>
        </nav>
    )
}

export default Navbar
