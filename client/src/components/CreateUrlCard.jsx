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
            <h2 className="text-3xl font-bold text-text-dark mb-4 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                Create Short URL
            </h2>
            <p className="text-text-gray text-base leading-relaxed mb-10 pr-4 font-medium">
                Paste your long URL below to instantly generate a clean, trackable short link. No complex analytics, no bloat—just paste and share.
            </p>

            <div className="space-y-4">
                <input
                    type="url"
                    placeholder="https://example.com/very/long/path/to/share"
                    value={originalUrl}
                    onChange={(e) => setOriginalUrl(e.target.value)}
                    className="w-full bg-transparent border-b-2 border-border px-0 py-4 text-text-dark placeholder-text-gray/50 outline-none focus:border-primary transition-colors text-lg font-medium"
                />

                <div className="pt-8">
                    <button 
                        type="submit"
                        className="w-full rounded-xl bg-primary py-4 text-background font-bold hover:bg-accent transition-all duration-300 text-base tracking-wide shadow-md"
                    >
                        Generate Short URL
                    </button>
                </div>
            </div>
        </form>
    );
}

export default CreateUrlCard;
