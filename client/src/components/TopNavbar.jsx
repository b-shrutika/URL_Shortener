import React from 'react';
import { Mail, Bell, ChevronDown } from 'lucide-react';

const TopNavbar = () => {
    return (
        <header className="h-20 bg-[#07192F]/60 backdrop-blur-md flex items-center justify-end px-6 z-10 border-b border-[#FF60AF]/25 transition-all">

            {/* Right Side Icons & Profile */}
            <div className="flex items-center gap-6">
                <button className="text-text-gray hover:text-[#FF60AF] transition-colors relative">
                    <Mail size={20} />
                </button>
                <button className="text-text-gray hover:text-[#FF60AF] transition-colors relative">
                    <Bell size={20} />
                    <span className="absolute top-0 right-0 w-2 h-2 bg-[#FF60AF] rounded-full shadow-[0_0_8px_#FF60AF]"></span>
                </button>

                <div className="flex items-center gap-3 cursor-pointer group">
                    <div className="w-9 h-9 rounded-full bg-[#112240] border border-[#FF60AF]/40 flex items-center justify-center text-[#FF60AF] font-bold text-sm shadow-sm group-hover:bg-[#FF60AF]/20 group-hover:border-[#FF60AF] transition-all duration-300">
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
