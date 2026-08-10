import React, { useState } from 'react';
import { createShortUrl } from '../api/link';

const CreateUrlCard = ({ onGenerate }) => {
    const [originalUrl, setOriginalUrl] = useState("");
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!originalUrl.trim()) return;
        try {
            const response = await createShortUrl({ originalUrl });
            onGenerate(response.shortLink);
            setOriginalUrl("");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col">
            <h2 className="text-3xl font-bold text-[#450F15] mb-4 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                Create Short URL
            </h2>
            <p className="text-[#450F15]/80 text-base leading-relaxed mb-10 pr-4 font-medium">
                Paste your long URL below to instantly generate a clean, trackable short link. No complex analytics, no bloat—just paste and share.
            </p>

            <div className="space-y-4">
                <input
                    type="url"
                    placeholder="https://example.com/very/long/path/to/share"
                    value={originalUrl}
                    onChange={(e) => setOriginalUrl(e.target.value)}
                    className="w-full bg-transparent border-b-2 border-[#450F15]/30 px-0 py-4 text-[#450F15] placeholder-[#450F15]/50 outline-none focus:border-[#450F15] transition-colors text-lg font-medium"
                />

                <div className="pt-8">
                    <button 
                        type="submit"
                        className="w-full rounded-xl bg-[#450F15] py-4 text-[#CBA36A] font-bold hover:bg-[#350B10] transition-all duration-300 text-base tracking-wide shadow-md"
                    >
                        Generate Short URL
                    </button>
                </div>
            </div>
        </form>
    );
}

export default CreateUrlCard;
