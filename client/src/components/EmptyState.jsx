import React from 'react';
import { Link2 } from 'lucide-react';

const EmptyState = () => {
  return (
        <div className="flex flex-col items-center justify-center py-6 text-center">
            <div className="bg-[#07192F] p-2 rounded-xl mb-3 border border-[#233554]">
                <Link2 size={24} className="text-[#FF6B8B]" />
            </div>
            <h2 className="text-sm font-semibold text-text-dark mb-1">
                No links yet
            </h2>
            <p className="text-xs text-[#8892B0]">
                Create your first short link to get started!
            </p>
        </div>
    );
}

export default EmptyState;
