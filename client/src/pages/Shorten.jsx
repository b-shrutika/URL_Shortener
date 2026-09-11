import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { createShortUrl, getUserUrls, getLinkAnalytics, deleteShortUrl } from '../api/link';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import Home from './Home';
import { 
    Sparkles, 
    BarChart2, 
    Plus, 
    Settings, 
    HelpCircle, 
    Link2, 
    ExternalLink, 
    Copy, 
    Check, 
    MousePointer, 
    RefreshCw, 
    ArrowRight, 
    ArrowLeft,
    User,
    ListFilter,
    Calendar,
    Activity,
    Clock,
    Trash2,
    LogOut
} from 'lucide-react';
import EmptyState from '../components/EmptyState';

const Shorten = () => {
    const { user, setUser } = useAuth();
    const navigate = useNavigate();
    
    // View Scaffolding: 'dashboard' (Preview mode) vs 'all-links' (Full analytics view)
    const [viewMode, setViewMode] = useState('dashboard');
    const [isTransitioning, setIsTransitioning] = useState(false);

    const [originalUrl, setOriginalUrl] = useState("");
    const [generatedUrl, setGeneratedUrl] = useState(null);
    const [generating, setGenerating] = useState(false);
    const [links, setLinks] = useState([]);
    const [loadingLinks, setLoadingLinks] = useState(false);
    const [copiedId, setCopiedId] = useState(null);
    const [selectedLink, setSelectedLink] = useState(null);
    const [linkStats, setLinkStats] = useState(null);
    const [loadingStats, setLoadingStats] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    // Fetch user links for preview & full list
    const fetchLinks = async () => {
        setLoadingLinks(true);
        try {
            const data = await getUserUrls();
            if (data && data.links) {
                setLinks(data.links);
            }
        } catch (error) {
            console.error("Failed to fetch user links:", error);
        } finally {
            setLoadingLinks(false);
        }
    };

    useEffect(() => {
        fetchLinks();
    }, []);

    // Smooth transition between Dashboard (Preview) and All Links (Full View)
    const handleSwitchView = (newMode) => {
        if (newMode === viewMode) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setViewMode(newMode);
            setIsTransitioning(false);
        }, 150);
    };

    const handleViewLinkStats = async (link) => {
        setSelectedLink(link);
        setLinkStats(null);
        handleSwitchView('link-details');
        
        setLoadingStats(true);
        try {
            const data = await getLinkAnalytics(link.shortCode);
            if (data && data.status === 'success') {
                setLinkStats(data);
            }
        } catch (error) {
            console.error("Failed to fetch link stats:", error);
        } finally {
            setLoadingStats(false);
        }
    };

    const handleCreateLink = async (e) => {
        e.preventDefault();
        if (!originalUrl.trim()) return;
        setGenerating(true);
        setErrorMsg("");
        setGeneratedUrl(null);
        try {
            const response = await createShortUrl({ originalUrl });
            setGeneratedUrl(response.shortLink);
            setOriginalUrl("");
            fetchLinks(); // refresh links preview
        } catch (error) {
            console.error(error);
            if (error.response && error.response.data && error.response.data.message) {
                setErrorMsg(error.response.data.message);
            } else {
                setErrorMsg("An error occurred while shortening the URL.");
            }
        } finally {
            setGenerating(false);
        }
    };

    const handleCopy = (shortLink, id) => {
        navigator.clipboard.writeText(shortLink);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    const handleDeleteLink = async (shortCode, e) => {
        e.stopPropagation();
        if (!window.confirm("Are you sure you want to delete this link?")) return;
        try {
            await deleteShortUrl(shortCode);
            if (selectedLink && selectedLink.shortCode === shortCode) {
                handleSwitchView('dashboard');
                setSelectedLink(null);
            }
            fetchLinks();
        } catch (error) {
            console.error("Failed to delete link:", error);
            alert("Failed to delete the link. Please try again.");
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        setUser(null);
        navigate('/');
    };

    const totalClicks = links.reduce((sum, link) => sum + (link.clicks || 0), 0);
    const baseUrl = window.location.origin;

    // Preview list: first 4 links
    const previewLinks = links.slice(0, 4);

    // Accent colors matching reference image table cards
    const accentColors = ['#10B981', '#3B82F6', '#F59E0B', '#FF2D75', '#8B5CF6'];

    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-[#0a0e27]">
            
            {/* 1. Dynamic Animated Background (Identical to Home page but blurred) */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none filter blur-md opacity-85 scale-105 transform-gpu">
                <Home />
            </div>

            {/* 2. Soft Blurred Glass Backdrop Wrapper */}
            <div className="fixed inset-0 z-20 bg-[#0a0e27]/35 backdrop-blur-md flex items-center justify-center overflow-y-auto">
                
                {/* 3. Compact Floating White Panel Container (Decreased Padding) */}
                <div className="w-[95%] h-[95vh] bg-[#FAFBFD] rounded-[24px] md:rounded-[28px] border border-white/80 shadow-[0_20px_50px_rgba(0,0,0,0.4),0_0_40px_rgba(255,96,175,0.25)] flex flex-col md:flex-row overflow-hidden relative my-auto">
                    
                    {/* LEFT SIDEBAR inside Compact White Card (Decreased Padding p-4) */}
                    <div className="w-full md:w-52 bg-white border-r border-slate-100 p-4 flex flex-col justify-between shrink-0 z-10">
                        <div>
                            {/* Logo */}
                            <div className="flex items-center gap-2 mb-5">
                                <span className="text-xl font-bold text-[#FF60AF] tracking-tight font-script">
                                    Shawrtsy
                                </span>
                            </div>

                            {/* Sidebar Nav Items */}
                            <nav className="space-y-1.5">
                                <button
                                    onClick={() => handleSwitchView('dashboard')}
                                    className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all duration-200 ${
                                        viewMode === 'dashboard'
                                            ? "bg-slate-100 text-[#0f172a]"
                                            : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                                    }`}
                                >
                                    <Sparkles size={16} className={viewMode === 'dashboard' ? "text-[#FF2D75]" : "text-slate-400"} />
                                    <span>Dashboard</span>
                                </button>

                                <button
                                    onClick={() => handleSwitchView('all-links')}
                                    className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all duration-200 ${
                                        viewMode === 'all-links'
                                            ? "bg-slate-100 text-[#0f172a]"
                                            : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                                    }`}
                                >
                                    <BarChart2 size={16} className={viewMode === 'all-links' ? "text-[#FF2D75]" : "text-slate-400"} />
                                    <span className="flex-1 text-left">My Links</span>
                                    {links.length > 0 && (
                                        <span className="px-2 py-0.5 rounded-full bg-[#FF2D75] text-white text-[10px] font-bold">
                                            {links.length}
                                        </span>
                                    )}
                                </button>
                            </nav>

                            {/* Hot Pink Action Button */}
                            <button
                                onClick={() => handleSwitchView('dashboard')}
                                className="mt-5 w-full py-2.5 px-3 rounded-xl bg-[#FF2D75] text-white font-bold flex items-center justify-center gap-1.5 shadow-md shadow-[#FF2D75]/25 hover:bg-[#ff1493] transition-all duration-200 text-xs"
                            >
                                <Plus size={16} />
                                <span>New Short Link</span>
                            </button>
                        </div>

                        {/* Bottom Sidebar Nav */}
                        <div className="space-y-1 pt-4 border-t border-slate-100">
                            <button className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors">
                                <Settings size={15} />
                                <span>Settings</span>
                            </button>
                            <button className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors">
                                <HelpCircle size={15} />
                                <span>Help & Support</span>
                            </button>
                            <button 
                                onClick={handleLogout}
                                className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-bold text-slate-500 hover:text-red-500 transition-colors mt-2"
                            >
                                <LogOut size={15} />
                                <span>Log Out</span>
                            </button>
                        </div>
                    </div>

                    {/* RIGHT MAIN CONTENT AREA inside Compact White Card (Decreased Padding p-4 md:p-6) */}
                    <div className="flex-1 bg-[#F8FAFC] p-4 md:p-6 flex flex-col justify-between overflow-y-auto relative">
                        
                        {/* Top Header Bar (Decreased Bottom Margin pb-3 mb-4) */}
                        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200/60 shrink-0">
                            <div>
                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                                    {viewMode === 'dashboard' ? 'Overview' : 'All Links & Analytics'}
                                </div>
                                <h1 className="text-xl md:text-2xl font-extrabold text-[#0f172a] tracking-tight">
                                    {viewMode === 'dashboard' ? 'Dashboard' : 'My Links & Performance'}
                                </h1>
                            </div>

                            {/* Top Right User Profile Badge */}
                            <div className="flex items-center gap-2.5 bg-white border border-slate-200/80 px-3 py-1.5 rounded-xl shadow-xs">
                                <div className="w-7 h-7 rounded-full bg-[#FF2D75]/10 text-[#FF2D75] flex items-center justify-center font-bold text-xs">
                                    {user?.name ? user.name.charAt(0).toUpperCase() : <User size={14} />}
                                </div>
                                <div className="text-left hidden sm:block">
                                    <div className="text-xs font-bold text-[#0f172a] line-clamp-1">{user?.name || "User"}</div>
                                    <div className="text-[9px] text-slate-400 font-medium">Free Plan</div>
                                </div>
                            </div>
                        </div>

                        {/* DYNAMIC VIEW CONTENT with Smooth ~280ms Transition */}
                        <div className={`flex-1 flex flex-col transition-all duration-300 ease-in-out ${
                            isTransitioning ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
                        }`}>
                            
                            {/* VIEW MODE 1: DASHBOARD PREVIEW MODE */}
                            {viewMode === 'dashboard' && (
                                <div className="space-y-4 flex-1 flex flex-col justify-between">
                                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                                        
                                        {/* Left: Shorten Generator Form Card (Decreased Padding p-4 md:p-5) */}
                                        <div className="lg:col-span-7 bg-white rounded-2xl p-4 md:p-5 border border-slate-200/80 shadow-xs flex flex-col justify-between">
                                        <form onSubmit={handleCreateLink} className="flex flex-col gap-5">
                                            <div>
                                                <h2 className="text-xl font-bold text-[#0f172a] mb-1">
                                                    Shorten a Long Link
                                                </h2>
                                                <p className="text-xs text-slate-500">
                                                    Paste your long URL to generate a trackable short link.
                                                </p>
                                            </div>

                                            <div className="space-y-4">
                                                <input
                                                    type="url"
                                                    placeholder="https://example.com/very/long/url/path"
                                                    value={originalUrl}
                                                    onChange={(e) => setOriginalUrl(e.target.value)}
                                                    required
                                                    className="w-full bg-[#F8FAFC] border border-slate-300 rounded-2xl px-5 py-3.5 text-slate-900 placeholder-slate-400 outline-none focus:border-[#FF2D75] focus:bg-white transition-all text-sm font-medium shadow-inner"
                                                />

                                                <button
                                                    type="submit"
                                                    disabled={generating}
                                                    className="w-full rounded-2xl bg-[#0f172a] text-white py-3.5 font-bold hover:bg-[#FF2D75] transition-all duration-300 text-sm shadow-md flex items-center justify-center gap-2"
                                                >
                                                    {generating ? (
                                                        <span>Generating...</span>
                                                    ) : (
                                                        <>
                                                            <Sparkles size={16} className="text-[#FF60AF]" />
                                                            <span>Generate Short URL</span>
                                                        </>
                                                    )}
                                                </button>
                                            </div>
                                        </form>

                                        {/* Error Message Display */}
                                        {errorMsg && (
                                            <div className="mt-4 p-3 bg-red-50 text-red-500 text-xs font-bold rounded-xl border border-red-100 flex items-center gap-2 shadow-sm animate-in fade-in slide-in-from-top-2 duration-300">
                                                <HelpCircle size={14} className="shrink-0" />
                                                <span>{errorMsg}</span>
                                            </div>
                                        )}

                                        {/* Generated Result Display */}
                                        {generatedUrl && (
                                            <div className="mt-6 bg-[#FAFBFD] border border-slate-200 rounded-2xl p-4 shadow-sm flex items-center justify-between gap-3">
                                                <div className="min-w-0 flex-1">
                                                    <div className="text-[10px] font-bold text-slate-400 mb-0.5">GENERATED SHORT LINK</div>
                                                    <a
                                                        href={generatedUrl}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="text-base font-bold text-[#FF2D75] hover:underline truncate block"
                                                    >
                                                        {generatedUrl}
                                                    </a>
                                                </div>

                                                <button
                                                    onClick={() => handleCopy(generatedUrl, 'new')}
                                                    className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-900 font-bold text-xs hover:border-[#FF2D75] hover:text-[#FF2D75] transition-all shadow-sm flex items-center gap-1 shrink-0"
                                                >
                                                    {copiedId === 'new' ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                                                    <span>{copiedId === 'new' ? 'Copied' : 'Copy'}</span>
                                                </button>
                                            </div>
                                        )}
                                    </div>

                                    {/* Right: Preview List (First 4 Links) with "Show all" Button */}
                                    <div className="lg:col-span-5 bg-white rounded-3xl p-6 border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col justify-between">
                                        <div>
                                            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                                                <div>
                                                    <h3 className="text-base font-bold text-[#0f172a]">My Links</h3>
                                                    <p className="text-[11px] text-slate-400 font-medium">Recent short links preview</p>
                                                </div>
                                                
                                                {/* "Show all" Button Scaffolding */}
                                                <button
                                                    onClick={() => handleSwitchView('all-links')}
                                                    className="text-xs font-bold text-[#FF2D75] hover:underline flex items-center gap-1"
                                                >
                                                    <span>Show all ({links.length})</span>
                                                    <ArrowRight size={13} />
                                                </button>
                                            </div>

                                            {/* Preview List (First 4 Links) */}
                                            <div className="space-y-2.5">
                                                {loadingLinks ? (
                                                    <div className="text-center py-6 text-slate-400 text-xs">
                                                        <RefreshCw size={16} className="animate-spin mx-auto mb-1 text-[#FF2D75]" />
                                                        Loading links...
                                                    </div>
                                                ) : links.length === 0 ? (
                                                    <EmptyState />
                                                ) : (
                                                    previewLinks.map((link, idx) => {
                                                        const fullShortUrl = `${baseUrl}/${link.shortCode}`;
                                                        const colorAccent = accentColors[idx % accentColors.length];
                                                        return (
                                                            <div
                                                                key={link._id || link.shortCode}
                                                                onClick={() => handleViewLinkStats(link)}
                                                                className="bg-[#FAFBFD] border border-slate-200/70 hover:border-[#FF2D75]/30 rounded-xl p-3 flex items-center justify-between gap-3 relative overflow-hidden transition-all duration-200 shadow-2xs cursor-pointer hover:shadow-sm"
                                                            >
                                                                <div 
                                                                    className="absolute left-0 top-0 bottom-0 w-1"
                                                                    style={{ backgroundColor: colorAccent }}
                                                                />

                                                                <div className="min-w-0 flex-1 pl-2">
                                                                    <p className="text-[10px] text-slate-400 truncate font-mono">
                                                                        {link.originalUrl}
                                                                    </p>
                                                                    <a
                                                                        href={fullShortUrl}
                                                                        target="_blank"
                                                                        rel="noreferrer"
                                                                        className="text-xs font-bold text-[#0f172a] hover:text-[#FF2D75] truncate block"
                                                                        onClick={(e) => e.stopPropagation()}
                                                                    >
                                                                        {fullShortUrl}
                                                                    </a>
                                                                </div>

                                                                <div className="flex items-center gap-2 shrink-0">
                                                                    <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[10px] font-extrabold flex items-center gap-0.5">
                                                                        <MousePointer size={10} className="text-[#FF2D75]" />
                                                                        {link.clicks || 0}
                                                                    </span>

                                                                    <button
                                                                        onClick={(e) => {
                                                                            e.stopPropagation();
                                                                            handleCopy(fullShortUrl, link._id || link.shortCode);
                                                                        }}
                                                                        className="p-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#FF2D75] text-slate-600 transition-colors"
                                                                        title="Copy"
                                                                    >
                                                                        {copiedId === (link._id || link.shortCode) ? (
                                                                            <Check size={12} className="text-emerald-500" />
                                                                        ) : (
                                                                            <Copy size={12} />
                                                                        )}
                                                                    </button>

                                                                    <button
                                                                        onClick={(e) => handleDeleteLink(link.shortCode, e)}
                                                                        className="p-1.5 rounded-lg bg-white border border-slate-200 hover:border-red-500 hover:text-red-500 text-slate-600 transition-colors"
                                                                        title="Delete"
                                                                    >
                                                                        <Trash2 size={12} />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        );
                                                    })
                                                )}
                                            </div>
                                        </div>

                                        {/* Bottom Action Prompt */}
                                        {links.length > 4 && (
                                            <div className="pt-3 border-t border-slate-100 text-center">
                                                <button
                                                    onClick={() => handleSwitchView('all-links')}
                                                    className="w-full py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 hover:text-[#FF2D75] hover:border-[#FF2D75] text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                                                >
                                                    <span>View Full Analytics & All {links.length} Links</span>
                                                    <ArrowRight size={13} />
                                                </button>
                                            </div>
                                        )}
                                    </div>

                                </div>
                            </div>
                        )}

                        {/* VIEW MODE 2: ALL LINKS & FULL ANALYTICS VIEW */}
                        {viewMode === 'all-links' && (
                            <div className="space-y-6 flex-1 flex flex-col justify-between">
                                <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex-1 flex flex-col justify-between">
                                    <div>
                                        {/* Overview Stat Badges */}
                                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                                            <div className="bg-[#FAFBFD] border border-slate-200/80 rounded-2xl p-4 flex items-center gap-3">
                                                <div className="p-3 rounded-xl bg-[#FF2D75]/10 text-[#FF2D75]">
                                                    <Link2 size={20} />
                                                </div>
                                                <div>
                                                    <div className="text-2xl font-black text-[#0f172a]">{links.length}</div>
                                                    <div className="text-xs text-slate-400 font-bold">Total Links</div>
                                                </div>
                                            </div>

                                            <div className="bg-[#FAFBFD] border border-slate-200/80 rounded-2xl p-4 flex items-center gap-3">
                                                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500">
                                                    <MousePointer size={20} />
                                                </div>
                                                <div>
                                                    <div className="text-2xl font-black text-[#0f172a]">{totalClicks}</div>
                                                    <div className="text-xs text-slate-400 font-bold">Total Clicks</div>
                                                </div>
                                            </div>

                                            <div className="bg-[#FAFBFD] border border-slate-200/80 rounded-2xl p-4 flex items-center gap-3 col-span-2 sm:col-span-1">
                                                <div className="p-3 rounded-xl bg-amber-500/10 text-amber-500">
                                                    <ListFilter size={20} />
                                                </div>
                                                <div>
                                                    <div className="text-2xl font-black text-[#0f172a]">
                                                        {links.length > 0 ? Math.max(...links.map(l => l.clicks || 0)) : 0}
                                                    </div>
                                                    <div className="text-xs text-slate-400 font-bold">Max Clicks</div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Full Links List */}
                                        <div className="space-y-3 max-h-[360px] overflow-y-auto pr-1">
                                            {loadingLinks ? (
                                                <div className="text-center py-8 text-slate-400 text-sm">
                                                    <RefreshCw size={20} className="animate-spin mx-auto mb-2 text-[#FF2D75]" />
                                                    Loading all links...
                                                </div>
                                            ) : links.length === 0 ? (
                                                <EmptyState />
                                            ) : (
                                                links.map((link, idx) => {
                                                    const fullShortUrl = `${baseUrl}/${link.shortCode}`;
                                                    const colorAccent = accentColors[idx % accentColors.length];
                                                    return (
                                                        <div
                                                            key={link._id || link.shortCode}
                                                            onClick={() => handleViewLinkStats(link)}
                                                            className="bg-white border border-slate-200/80 hover:border-[#FF2D75]/40 rounded-2xl p-4 transition-all duration-200 flex items-center justify-between gap-4 shadow-2xs hover:shadow-md relative overflow-hidden cursor-pointer"
                                                        >
                                                            <div 
                                                                className="absolute left-0 top-0 bottom-0 w-1.5"
                                                                style={{ backgroundColor: colorAccent }}
                                                            />

                                                            <div className="min-w-0 flex-1 pl-2">
                                                                <p className="text-xs text-slate-400 truncate font-mono mb-0.5">
                                                                    {link.originalUrl}
                                                                </p>
                                                                <a
                                                                    href={fullShortUrl}
                                                                    target="_blank"
                                                                    rel="noreferrer"
                                                                    className="text-base font-bold text-[#0f172a] hover:text-[#FF2D75] flex items-center gap-1.5 truncate w-fit"
                                                                    onClick={(e) => e.stopPropagation()}
                                                                >
                                                                    {fullShortUrl}
                                                                    <ExternalLink size={14} className="shrink-0 text-slate-400" />
                                                                </a>
                                                            </div>

                                                            <div className="flex items-center gap-3 shrink-0">
                                                                <div className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-extrabold flex items-center gap-1">
                                                                    <MousePointer size={12} className="text-[#FF2D75]" />
                                                                    {link.clicks || 0} clicks
                                                                </div>

                                                                <button
                                                                    onClick={(e) => {
                                                                        e.stopPropagation();
                                                                        handleCopy(fullShortUrl, link._id || link.shortCode);
                                                                    }}
                                                                    className="p-2 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#FF2D75] hover:text-[#FF2D75] text-slate-600 transition-colors"
                                                                    title="Copy Link"
                                                                >
                                                                    {copiedId === (link._id || link.shortCode) ? (
                                                                        <Check size={16} className="text-emerald-500" />
                                                                    ) : (
                                                                        <Copy size={16} />
                                                                    )}
                                                                </button>

                                                                <button
                                                                    onClick={(e) => handleDeleteLink(link.shortCode, e)}
                                                                    className="p-2 rounded-xl bg-slate-50 border border-slate-200 hover:border-red-500 hover:text-red-500 text-slate-600 transition-colors"
                                                                    title="Delete Link"
                                                                >
                                                                    <Trash2 size={16} />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    );
                                                })
                                            )}
                                        </div>
                                    </div>

                                    {/* Back to Dashboard Button */}
                                    <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                                        <span>Full Analytics View ({links.length} links)</span>
                                        <button
                                            onClick={() => handleSwitchView('dashboard')}
                                            className="flex items-center gap-1.5 text-[#FF2D75] hover:underline font-bold text-sm"
                                        >
                                            <ArrowLeft size={16} />
                                            <span>Back to Dashboard</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* VIEW MODE 3: SINGLE LINK DETAILS & STATS */}
                        {viewMode === 'link-details' && selectedLink && (
                            <div className="space-y-6 flex-1 flex flex-col">
                                <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex-1 flex flex-col relative">
                                    
                                    {/* Header & Back Button */}
                                    <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
                                        <div>
                                            <h2 className="text-xl font-extrabold text-[#0f172a]">Link Statistics</h2>
                                            <p className="text-xs text-slate-400 font-medium mt-1">Detailed performance for your short link</p>
                                        </div>
                                        <button
                                            onClick={() => handleSwitchView('all-links')}
                                            className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 hover:text-[#FF2D75] hover:border-[#FF2D75] font-bold text-xs flex items-center gap-2 transition-all"
                                        >
                                            <ArrowLeft size={14} />
                                            <span>Back to Links</span>
                                        </button>
                                    </div>

                                    {/* Link Details Cards */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                                        {/* Original Link Card */}
                                        <div className="bg-[#FAFBFD] border border-slate-200/80 rounded-2xl p-5 relative overflow-hidden group">
                                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                                <Link2 size={64} className="text-[#3B82F6]" />
                                            </div>
                                            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Original Destination</div>
                                            <a 
                                                href={selectedLink.originalUrl} 
                                                target="_blank" 
                                                rel="noreferrer"
                                                className="text-sm font-medium text-slate-700 hover:text-[#3B82F6] break-all block leading-relaxed"
                                            >
                                                {selectedLink.originalUrl}
                                            </a>
                                        </div>

                                        {/* Short Link Card */}
                                        <div className="bg-[#FAFBFD] border border-slate-200/80 rounded-2xl p-5 relative overflow-hidden group">
                                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                                <Sparkles size={64} className="text-[#FF2D75]" />
                                            </div>
                                            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-between">
                                                <span>Short URL</span>
                                                <button
                                                    onClick={() => handleCopy(`${baseUrl}/${selectedLink.shortCode}`, 'detail-copy')}
                                                    className="text-[#FF2D75] hover:text-[#ff1493] flex items-center gap-1"
                                                >
                                                    {copiedId === 'detail-copy' ? <Check size={12} /> : <Copy size={12} />}
                                                    <span>{copiedId === 'detail-copy' ? 'Copied' : 'Copy'}</span>
                                                </button>
                                            </div>
                                            <a 
                                                href={`${baseUrl}/${selectedLink.shortCode}`} 
                                                target="_blank" 
                                                rel="noreferrer"
                                                className="text-lg font-bold text-[#FF2D75] hover:underline block truncate"
                                            >
                                                {`${baseUrl}/${selectedLink.shortCode}`}
                                            </a>
                                        </div>
                                    </div>

                                    {/* Main Stats Area */}
                                    <div className="flex-1 bg-[#0f172a] rounded-3xl p-6 md:p-8 flex items-center justify-center relative overflow-hidden shadow-xl">
                                        {/* Decorative Background Elements */}
                                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF2D75] via-[#8B5CF6] to-[#3B82F6]" />
                                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#FF2D75]/10 rounded-full blur-3xl pointer-events-none" />
                                        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#3B82F6]/10 rounded-full blur-3xl pointer-events-none" />
                                        
                                        <div className="z-10 w-full h-full flex flex-col md:flex-row items-center justify-center gap-10">
                                            {loadingStats ? (
                                                <div className="flex flex-col items-center justify-center text-slate-400">
                                                    <RefreshCw size={32} className="animate-spin text-[#FF2D75] mb-4" />
                                                    <span className="text-sm font-medium">Loading advanced analytics...</span>
                                                </div>
                                            ) : linkStats ? (
                                                <>
                                                    <div className="text-center">
                                                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 text-white backdrop-blur-sm border border-white/20 mb-6 shadow-[0_0_30px_rgba(255,45,117,0.3)]">
                                                            <MousePointer size={32} className="text-[#FF60AF]" />
                                                        </div>
                                                        <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Total Engagements</h3>
                                                        <div className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-400 drop-shadow-sm mb-4">
                                                            {linkStats.totalClicks || 0}
                                                        </div>
                                                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold">
                                                            <Activity size={14} />
                                                            <span>Active Link</span>
                                                        </div>
                                                    </div>
                                                    
                                                    {linkStats.clicksByDevice && linkStats.clicksByDevice.length > 0 && (
                                                        <div className="h-[220px] w-full max-w-[320px] flex flex-col items-center">
                                                            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Clicks By Device</h3>
                                                            <div className="w-full flex-1">
                                                                <ResponsiveContainer width="100%" height="100%">
                                                                    <PieChart>
                                                                        <Pie
                                                                            data={linkStats.clicksByDevice}
                                                                            cx="50%"
                                                                            cy="50%"
                                                                            innerRadius={50}
                                                                            outerRadius={80}
                                                                            paddingAngle={5}
                                                                            dataKey="count"
                                                                            nameKey="_id"
                                                                        >
                                                                            {linkStats.clicksByDevice.map((entry, index) => (
                                                                                <Cell key={`cell-${index}`} fill={['#FF2D75', '#3B82F6', '#10B981', '#F59E0B', '#8B5CF6'][index % 5]} />
                                                                            ))}
                                                                        </Pie>
                                                                        <Tooltip 
                                                                            contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '12px', color: '#fff' }}
                                                                            itemStyle={{ color: '#fff' }}
                                                                        />
                                                                        <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                                                                    </PieChart>
                                                                </ResponsiveContainer>
                                                            </div>
                                                        </div>
                                                    )}
                                                </>
                                            ) : (
                                                <div className="text-slate-500">Analytics unavailable.</div>
                                            )}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )}

                    </div>

                </div>

            </div>

        </div>
    </div>
);
}

export default Shorten;
