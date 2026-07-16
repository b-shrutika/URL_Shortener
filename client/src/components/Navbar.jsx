import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='flex items-center justify-between px-8 py-5 shadow-sm'>
            <h1 className='text-2xl font-bold text-blue-600'>URL Shortener</h1>
            <div>
                <a
                    href="#about"
                    className="hover:text-blue-600"
                >
                    About
                </a>

                <a
                    href="#contact"
                    className="hover:text-blue-600"
                >
                    Contact
                </a>
                <Link to="/login" className='font-medium hover:text-blue-600'> Login
                </Link>
                <Link to="/register" className='rounded-lg bg-blue-600 px-4 py-2 text-white hover:text-blue-700'>Register</Link>
            </div>
        </nav>
    )
}

export default Navbar
