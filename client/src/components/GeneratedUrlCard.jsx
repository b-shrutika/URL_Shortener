import React from 'react'

const GeneratedUrlCard = (url ) => {
  return (
    <div className="mt-8 rounded-xl border border-green-300 bg-green-50 p-6">

            <h3 className="text-xl font-semibold text-green-700">
                URL Generated Successfully
            </h3>

            <div className="mt-4 flex items-center justify-between">

                <a
                    href={url }
                    className="font-medium text-blue-600"
                >
                   { url }
                </a>

                <div className="flex gap-3">

                    <button className="rounded bg-blue-600 px-4 py-2 text-white">
                        Copy
                    </button>

                    <button className="rounded bg-green-600 px-4 py-2 text-white">
                        Open
                    </button>

                </div>

            </div>

        </div>
  )
}

export default GeneratedUrlCard
