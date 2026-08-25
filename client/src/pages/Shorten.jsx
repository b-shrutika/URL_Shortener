import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import CreateUrlCard from '../components/CreateUrlCard';
import GeneratedUrlCard from '../components/GeneratedUrlCard';
import { useAuth } from '../context/AuthContext';

const Shorten = () => {
    const { user } = useAuth();
    const [generatedUrl, setGeneratedUrl] = useState(null);

    return (
        <DashboardLayout>
            <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] w-full py-12">
                
                {/* Minimalist Hero Headline matching reference image */}
                <div className="text-center mb-12 max-w-3xl px-4">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.2]" style={{ fontFamily: 'var(--font-heading)' }}>
                        If you love sharing links — <br className="hidden md:block" />
                        <span className="text-primary italic font-normal" style={{ fontFamily: 'var(--font-serif)' }}>start here.</span>
                    </h1>
                </div>

                {/* Main Shortener Card */}
                <div className="w-full max-w-2xl px-4 relative z-10">
                    <div className="bg-card border border-border rounded-3xl p-8 shadow-2xl relative overflow-hidden transition-all duration-300">
                        
                        {/* Decorative Top Left Number */}
                        <div className="absolute top-8 left-8 flex items-center gap-2">
                            <span className="text-text-gray text-xs font-mono tracking-widest">0 1</span>
                        </div>

                        <div className="mt-8">
                            <CreateUrlCard onGenerate={setGeneratedUrl} />
                            
                            {generatedUrl && (
                                <div className="mt-8">
                                    <GeneratedUrlCard url={generatedUrl} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Very faint scattered background stars effect to match image */}
                <div className="fixed inset-0 pointer-events-none opacity-20">
                    <div className="absolute top-[20%] left-[15%] w-1 h-1 bg-white rounded-full shadow-[0_0_8px_fff]"></div>
                    <div className="absolute top-[60%] left-[10%] w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_fff]"></div>
                    <div className="absolute top-[30%] right-[20%] w-1 h-1 bg-white rounded-full shadow-[0_0_8px_fff]"></div>
                    <div className="absolute top-[75%] right-[15%] w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_fff]"></div>
                </div>

            </div>
        </DashboardLayout>
    );
}

export default Shorten;
