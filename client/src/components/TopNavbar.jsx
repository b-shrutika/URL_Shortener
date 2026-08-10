import React from 'react';
import { Search, Mail, Bell, ChevronDown } from 'lucide-react';

const TopNavbar = () => {
    return (
        <header className="h-20 bg-transparent flex items-center justify-between px-6 z-10 border-b border-card">
            
            {/* Search Bar */}
            <div className="relative w-full max-w-md">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search size={18} className="text-text-gray" />
                </div>
                <input
                    type="text"
                    placeholder="Search your links..."
                    className="w-full bg-[#1C0809] border border-[#2D1214] text-text-dark text-sm rounded-full pl-12 pr-16 py-3 focus:outline-none focus:border-primary-light transition-colors placeholder-text-gray/50 shadow-inner"
                />
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                    <div className="flex items-center gap-1 bg-[#2D1214] border border-[#3A181A] rounded px-2 py-0.5">
                        <span className="text-[10px] text-text-gray font-medium">⌘ K</span>
                    </div>
                </div>
            </div>

            {/* Right Side Icons & Profile */}
            <div className="flex items-center gap-6">
                <button className="text-text-gray hover:text-white transition-colors relative">
                    <Mail size={20} />
                </button>
                <button className="text-text-gray hover:text-white transition-colors relative">
                    <Bell size={20} />
                    <span className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full border border-background"></span>
                </button>

                <div className="flex items-center gap-3 cursor-pointer group">
                    <div className="w-9 h-9 rounded-full bg-[#752608] flex items-center justify-center text-primary-light font-bold text-sm shadow-sm group-hover:bg-[#8A2B09] transition-colors">
                        SB
                    </div>
                    <div className="flex items-center gap-1 text-sm font-medium text-text-gray group-hover:text-white transition-colors">
                        <span>Shrutika</span>
                        <ChevronDown size={14} className="opacity-70" />
                    </div>
                </div>
            </div>
            
        </header>
    );
};

export default TopNavbar;
