import React from 'react';
import Sidebar from './Sidebar';
import TopNavbar from './TopNavbar';

const DashboardLayout = ({ children }) => {
    return (
        <div className="flex min-h-screen bg-transparent">
            <Sidebar />
            <main className="flex-1 flex flex-col h-screen overflow-hidden">
                <TopNavbar />
                <div className="flex-1 overflow-y-auto px-6 pb-6">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default DashboardLayout;
