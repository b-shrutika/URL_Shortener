import React from 'react';
import { Link } from 'react-router-dom';

const DashboardLayout = ({ children }) => {
    return (
        <div className="min-h-screen bg-transparent flex flex-col">
            <header className="px-8 py-6 flex items-center justify-between z-10">
                <Link to="/" className="text-2xl font-bold text-[#FF60AF] tracking-tight drop-shadow-[0_0_10px_rgba(255,96,175,0.4)]">
                    Shawrtsy
                </Link>
            </header>
            <main className="flex-1 w-full">
                {children}
            </main>
        </div>
    );
};

export default DashboardLayout;
