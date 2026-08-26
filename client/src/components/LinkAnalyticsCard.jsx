import React, { useEffect, useState } from 'react';
import { getUserUrls } from '../api/link';
import { Link2, ExternalLink, Copy, Check, BarChart2, MousePointer, RefreshCw } from 'lucide-react';
import EmptyState from './EmptyState';

const LinkAnalyticsCard = ({ refreshKey }) => {
    const [links, setLinks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [copiedId, setCopiedId] = useState(null);

    const fetchLinks = async () => {
        setLoading(true);
        try {
            const data = await getUserUrls();
            if (data && data.links) {
                setLinks(data.links);
            }
        } catch (error) {
            console.error("Failed to fetch user links:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchLinks();
    }, [refreshKey]);

    const handleCopy = (shortLink, id) => {
        navigator.clipboard.writeText(shortLink);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    const totalClicks = links.reduce((sum, link) => sum + (link.clicks || 0), 0);
    const baseUrl = window.location.origin;

    return (
        <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-text-dark tracking-tight flex items-center gap-3">
                        <BarChart2 className="text-primary" size={28} />
                        My Links & Analytics
                    </h2>
                    <p className="text-text-gray text-sm mt-1">
                        Track performance and manage your active short links.
                    </p>
                </div>
                <button
                    onClick={fetchLinks}
                    disabled={loading}
                    className="p-2 rounded-xl border border-border text-text-gray hover:text-primary hover:border-primary transition-all duration-300"
                    title="Refresh Analytics"
                >
                    <RefreshCw size={18} className={loading ? "animate-spin" : ""} />
                </button>
            </div>

            {/* Analytics Overview Stats Bar */}
            <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-background/40 border border-border/60 rounded-2xl p-4 flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 text-primary">
                        <Link2 size={20} />
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-text-dark">{links.length}</div>
                        <div className="text-xs text-text-gray font-medium">Total Links</div>
                    </div>
                </div>

                <div className="bg-background/40 border border-border/60 rounded-2xl p-4 flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-secondary/10 border border-secondary/20 text-secondary">
                        <MousePointer size={20} />
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-text-dark">{totalClicks}</div>
                        <div className="text-xs text-text-gray font-medium">Total Clicks</div>
                    </div>
                </div>
            </div>

            {/* Links List / Empty State */}
            <div className="flex-1 overflow-y-auto max-h-[380px] pr-2 space-y-4">
                {loading ? (
                    <div className="flex flex-col items-center justify-center py-12 text-text-gray">
                        <RefreshCw size={24} className="animate-spin mb-2 text-primary" />
                        <span className="text-sm">Loading analytics...</span>
                    </div>
                ) : links.length === 0 ? (
                    <EmptyState />
                ) : (
                    links.map((link) => {
                        const fullShortUrl = `${baseUrl}/${link.shortCode}`;
                        return (
                            <div
                                key={link._id || link.shortCode}
                                className="bg-background/40 border border-border/60 hover:border-primary/50 rounded-2xl p-4 transition-all duration-300 flex flex-col gap-3 group"
                            >
                                <div className="flex items-start justify-between gap-3">
                                    <div className="min-w-0 flex-1">
                                        <p className="text-xs text-text-gray truncate font-mono mb-1">
                                            {link.originalUrl}
                                        </p>
                                        <a
                                            href={fullShortUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-base font-bold text-primary hover:underline flex items-center gap-1.5 truncate"
                                        >
                                            {fullShortUrl}
                                            <ExternalLink size={14} className="shrink-0" />
                                        </a>
                                    </div>

                                    {/* Clicks Badge */}
                                    <div className="shrink-0 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold flex items-center gap-1.5">
                                        <MousePointer size={12} />
                                        {link.clicks || 0} clicks
                                    </div>
                                </div>

                                <div className="flex items-center justify-between pt-2 border-t border-border/40 text-xs text-text-gray">
                                    <span>
                                        Created {new Date(link.createdAt).toLocaleDateString()}
                                    </span>

                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => handleCopy(fullShortUrl, link._id || link.shortCode)}
                                            className="flex items-center gap-1 px-3 py-1 rounded-lg border border-border bg-card/60 hover:border-primary hover:text-primary transition-all duration-300 font-medium"
                                        >
                                            {copiedId === (link._id || link.shortCode) ? (
                                                <>
                                                    <Check size={12} className="text-green-400" />
                                                    <span className="text-green-400">Copied</span>
                                                </>
                                            ) : (
                                                <>
                                                    <Copy size={12} />
                                                    <span>Copy</span>
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
};

export default LinkAnalyticsCard;
