import React from 'react'
import DashboardNavbar from '../components/DashboardNavbar'
import CreateUrlCard from '../components/CreateUrlCard'
import GeneratedUrlCard from '../components/GeneratedUrlCard'
import EmptyState from '../components/EmptyState'
import { useState } from 'react'

const Shorten = () => {
  const [generatedUrl, setGeneratedUrl] = useState(null);

    return (

        <div className="min-h-screen bg-gray-100">

            <DashboardNavbar />

            <div className="mx-auto max-w-6xl px-6 py-10">

                <h1 className="text-4xl font-bold">
                    Welcome
                </h1>

                <p className="mt-2 text-gray-600">
                    Manage all your shortened URLs.
                </p>

                <div className="mt-10">

                    <CreateUrlCard
                        onGenerate={setGeneratedUrl}
                    />

                    {generatedUrl && (
                        <GeneratedUrlCard
                            url={generatedUrl}
                        />
                    )}

                </div>

                <div className="mt-12">

                    <h2 className="mb-6 text-3xl font-semibold">
                        Your URLs
                    </h2>

                    <EmptyState />

                </div>

            </div>

        </div>

    );
}

export default Shorten
