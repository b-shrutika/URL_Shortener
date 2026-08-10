import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Link2, BarChart2, Settings, Crown } from 'lucide-react';

const Sidebar = () => {
    return (
        <aside className="w-64 bg-background/50 border-r border-card flex flex-col h-screen">
            {/* Logo Section */}
            <div className="h-20 flex items-center px-6">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                        <Link2 size={18} strokeWidth={3} />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-white tracking-tight">Shawrtsy</h1>
                        <p className="text-[10px] text-primary-light font-medium -mt-1 tracking-wider uppercase">short. smart. simple.</p>
                    </div>
                </div>
            </div>

            {/* Navigation Sections */}
            <div className="flex-1 overflow-y-auto px-4 py-6 space-y-8">
                
                {/* OVERVIEW Section */}
                <div>
                    <h2 className="px-4 text-[10px] font-bold text-text-gray/70 uppercase tracking-widest mb-4">Overview</h2>
                    <nav className="space-y-1">
                        <NavLink
                            to="/shorten"
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-200 font-medium ${
                                    isActive
                                        ? 'bg-[#4A1E20] text-primary shadow-sm'
                                        : 'text-text-gray hover:text-white hover:bg-card/50'
                                }`
                            }
                        >
                            <LayoutDashboard size={18} />
                            <span>Dashboard</span>
                        </NavLink>
                        
                        <NavLink
                            to="/links"
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-200 font-medium ${
                                    isActive
                                        ? 'bg-[#4A1E20] text-primary shadow-sm'
                                        : 'text-text-gray hover:text-white hover:bg-card/50'
                                }`
                            }
                        >
                            <Link2 size={18} />
                            <span>Links</span>
                        </NavLink>
                        
                        <NavLink
                            to="/analytics"
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-200 font-medium ${
                                    isActive
                                        ? 'bg-[#4A1E20] text-primary shadow-sm'
                                        : 'text-text-gray hover:text-white hover:bg-card/50'
                                }`
                            }
                        >
                            <BarChart2 size={18} />
                            <span>Analytics</span>
                        </NavLink>
                    </nav>
                </div>

                {/* SETTINGS Section */}
                <div>
                    <h2 className="px-4 text-[10px] font-bold text-text-gray/70 uppercase tracking-widest mb-4">Settings</h2>
                    <nav className="space-y-1">
                        <NavLink
                            to="/settings"
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-200 font-medium ${
                                    isActive
                                        ? 'bg-[#4A1E20] text-primary shadow-sm'
                                        : 'text-text-gray hover:text-white hover:bg-card/50'
                                }`
                            }
                        >
                            <Settings size={18} />
                            <span>Settings</span>
                        </NavLink>
                    </nav>
                </div>
            </div>

        </aside>
    );
};

export default Sidebar;
