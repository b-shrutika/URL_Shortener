import React from 'react';
import { MoreVertical } from 'lucide-react';

const StatWidget = ({ user, chartData }) => {
    return (
        <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between items-start mb-8">
                <h3 className="text-lg font-bold text-white">Statistic</h3>
                <button className="text-text-gray hover:text-white transition-colors">
                    <MoreVertical size={20} />
                </button>
            </div>

            <div className="flex flex-col items-center justify-center mb-8">
                {/* Custom SVG Doughnut Chart */}
                <div className="relative w-32 h-32 mb-4">
                    <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                        {/* Background Circle */}
                        <path
                            className="text-border"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            fill="none"
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        {/* Progress Circle (80%) */}
                        <path
                            className="text-primary"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeDasharray="80, 100"
                            strokeLinecap="round"
                            fill="none"
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-xl font-bold text-primary leading-none">US</span>
                    </div>
                    {/* Floating 80% Badge */}
                    <div className="absolute top-1 right-2 bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                        80%
                    </div>
                </div>

                <div className="text-center">
                    <h4 className="text-sm font-bold text-white mb-1">Good Morning User 🔥</h4>
                    <p className="text-xs text-text-gray">
                        Continue sharing your links to achieve your target!
                    </p>
                </div>
            </div>

            {/* Simple Bar Chart */}
            <div className="h-32 w-full relative">
                {/* Y-axis labels */}
                <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-[10px] text-text-gray">
                    <span>28</span>
                    <span>21</span>
                    <span>14</span>
                    <span>7</span>
                    <span>0</span>
                </div>
                
                {/* Bars */}
                <div className="absolute left-6 right-0 top-0 bottom-6 flex items-end justify-around">
                    {/* Week 1 */}
                    <div className="w-3.5 h-[50%] bg-primary rounded-t-sm"></div>
                    {/* Week 2 */}
                    <div className="w-3.5 h-[75%] bg-primary rounded-t-sm"></div>
                    {/* Week 3 */}
                    <div className="w-3.5 h-[55%] bg-primary rounded-t-sm"></div>
                    {/* Week 4 */}
                    <div className="w-3.5 h-[100%] bg-primary rounded-t-sm"></div>
                </div>

                {/* X-axis labels */}
                <div className="absolute left-6 right-0 bottom-0 flex justify-around text-[10px] text-text-gray">
                    <span>Week 1</span>
                    <span>Week 2</span>
                    <span>Week 3</span>
                    <span>Week 4</span>
                </div>
            </div>
        </div>
    );
};

export default StatWidget;
