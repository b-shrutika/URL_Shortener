import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
const DashboardNavbar = () => {
    const {user} = useAuth();
    console.log(user)
  return (
    <nav className="flex items-center justify-between border-b border-[#FF60AF]/25 bg-[#07192F]/60 backdrop-blur-md px-8 py-5 text-text-dark">
            <h2 className="font-medium text-text-gray">Welcome, <span className="text-[#FF60AF] font-bold">{user?.name}</span></h2>
            <Link
                to="/"
                className="text-2xl font-bold text-[#FF60AF] drop-shadow-[0_0_10px_rgba(255,96,175,0.4)]"
            >
                Shawrtsy
            </Link>

            <div className="flex items-center gap-8">

                <span className="font-medium text-text-dark">
                    Dashboard
                </span>

                <button
                    className="rounded-lg bg-[#FF60AF] px-4 py-2 text-[#07192F] font-bold hover:bg-[#FF8E53] transition-colors shadow-md"
                >
                    Logout
                </button>

            </div>

        </nav>
  )
}

export default DashboardNavbar
