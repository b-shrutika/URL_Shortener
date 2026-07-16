import React from 'react'
import { Link } from 'react-router-dom'

const DashboardNavbar = () => {
  return (
    <nav className="flex items-center justify-between border-b bg-white px-8 py-5">

            <Link
                to="/"
                className="text-2xl font-bold text-blue-600"
            >
                URL Shortener
            </Link>

            <div className="flex items-center gap-8">

                <span className="font-medium">
                    Dashboard
                </span>

                <button
                    className="rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
                >
                    Logout
                </button>

            </div>

        </nav>
  )
}

export default DashboardNavbar
