import React from 'react'

const CreateUrlCard = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

        // Temporary fake response
        onGenerate("https://short.ly/abc123");
    };

    return (
        <div className="rounded-xl bg-white p-8 shadow">

            <h2 className="text-2xl font-semibold">
                Create Short URL
            </h2>

            <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-6"
            >

                <div>

                    <label className="mb-2 block font-medium">
                        Original URL
                    </label>

                    <input
                        type="url"
                        placeholder="https://example.com"
                        className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-600"
                    />

                </div>

                <button
                    className="w-full rounded-lg bg-blue-600 py-3 text-white hover:bg-blue-700"
                >
                    Generate Short URL
                </button>

            </form>

        </div>
    );
}

export default CreateUrlCard
