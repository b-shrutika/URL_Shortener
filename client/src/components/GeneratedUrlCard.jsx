import React from 'react'

const GeneratedUrlCard = ({url}) => {
  return (
    <div className="mt-8 rounded-xl border border-border bg-background/50 p-6 shadow-inner">
        <h3 className="text-lg font-bold text-text-dark tracking-tight">
            Short URL Generated
        </h3>

        <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-primary underline decoration-primary/40 hover:decoration-primary underline-offset-4 truncate"
            >
                {url}
            </a>

            <div className="flex gap-2 shrink-0">
                <button 
                    onClick={() => navigator.clipboard.writeText(url)}
                    className="rounded-lg border border-border bg-transparent px-4 py-2 text-text-dark text-sm font-bold hover:bg-border transition-colors"
                >
                    Copy
                </button>
                <a 
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg border border-primary bg-primary px-4 py-2 text-background text-sm font-bold hover:bg-accent transition-colors inline-block text-center"
                >
                    Visit
                </a>
            </div>
        </div>
    </div>
  )
}

export default GeneratedUrlCard
