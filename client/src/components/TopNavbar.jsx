import React from 'react';
import { Mail, Bell, ChevronDown } from 'lucide-react';

const TopNavbar = () => {
    return (
        <header className="h-20 bg-transparent flex items-center justify-end px-6 z-10 border-b border-card">

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
