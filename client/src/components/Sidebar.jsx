import React from 'react';
import { Link2 } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import LineSidebar from './LineSidebar';

const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const menuItems = [
        { label: 'Dashboard', path: '/shorten' },
        { label: 'Links', path: '/links' },
        { label: 'Analytics', path: '/analytics' },
        { label: 'Settings', path: '/settings' }
    ];

    // Find active index based on current path
    const activeIndex = menuItems.findIndex(item => location.pathname.startsWith(item.path));
    const defaultActive = activeIndex !== -1 ? activeIndex : 0;

    const handleItemClick = (index) => {
        const item = menuItems[index];
        if (item) {
            navigate(item.path);
        }
    };

    return (
        <aside className="w-64 bg-background/50 border-r border-card flex flex-col h-screen">
            {/* Logo Section */}
            <div className="h-20 flex items-center px-6 shrink-0">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                        <Link2 size={18} strokeWidth={3} />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-text-dark tracking-tight">Shawrtsy</h1>
                        <p className="text-[10px] text-primary font-medium -mt-1 tracking-wider uppercase">short. smart. simple.</p>
                    </div>
                </div>
            </div>

            {/* Navigation Sections */}
            <div className="flex-1 overflow-y-auto px-2 py-8 overflow-hidden">
                <LineSidebar
                  items={menuItems.map(item => item.label)}
                  accentColor="#FF6B8B"
                  textColor="#F8FAFC"
                  markerColor="#233554"
                  showIndex={false}
                  showMarker
                  proximityRadius={100}
                  maxShift={30}
                  falloff="smooth"
                  markerLength={60}
                  markerGap={0}
                  tickScale={0.5}
                  scaleTick
                  itemGap={20}
                  fontSize={1.1}
                  smoothing={100}
                  defaultActive={defaultActive}
                  onItemClick={handleItemClick}
                />
            </div>
        </aside>
    );
};

export default Sidebar;
