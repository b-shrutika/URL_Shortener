import React from 'react';
import { Link2 } from 'lucide-react';

const EmptyState = () => {
  return (
        <div className="flex flex-col items-center justify-center py-6 text-center">
            <div className="bg-[#1A080A] p-2 rounded-xl mb-3 border border-[#3A181A]">
                <Link2 size={24} className="text-[#B09295]" />
            </div>
            <h2 className="text-sm font-semibold text-white mb-1">
                No links yet
            </h2>
            <p className="text-xs text-[#B09295]">
                Create your first short link to get started!
            </p>
        </div>
    );
}

export default EmptyState;
