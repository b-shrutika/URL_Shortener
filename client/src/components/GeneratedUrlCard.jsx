import React from 'react'

const GeneratedUrlCard = ({url}) => {
  return (
    <div className="mt-8 rounded-xl border border-[#450F15]/20 bg-[#450F15]/5 p-6 shadow-inner">
        <h3 className="text-lg font-bold text-[#450F15] tracking-tight">
            Short URL Generated
        </h3>

        <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-[#450F15] underline decoration-[#450F15]/40 hover:decoration-[#450F15] underline-offset-4 truncate"
            >
                {url}
            </a>

            <div className="flex gap-2 shrink-0">
                <button 
                    onClick={() => navigator.clipboard.writeText(url)}
                    className="rounded-lg border border-[#450F15] bg-transparent px-4 py-2 text-[#450F15] text-sm font-bold hover:bg-[#450F15]/10 transition-colors"
                >
                    Copy
                </button>
                <a 
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg border border-[#450F15] bg-[#450F15] px-4 py-2 text-[#CBA36A] text-sm font-bold hover:bg-[#350B10] transition-colors inline-block text-center"
                >
                    Visit
                </a>
            </div>
        </div>
    </div>
  )
}

export default GeneratedUrlCard
