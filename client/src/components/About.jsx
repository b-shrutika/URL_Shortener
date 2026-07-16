import React from 'react'

const About = () => {
    return (
        <section
            id="about"
            className="bg-gray-50 px-6 py-20"
        >
            <div className="mx-auto max-w-5xl">

                <h2 className="text-center text-4xl font-bold">
                    About
                </h2>

                <p className="mt-6 text-center text-lg leading-8 text-gray-600">
                    URL Shortener is a modern web application that lets users
                    create short, shareable URLs with ease. It also provides
                    analytics to track clicks, making it useful for personal,
                    academic, and professional use.
                </p>

                <div className="mt-12 grid gap-8 md:grid-cols-2">

                    <div className="rounded-xl bg-white p-8 shadow">

                        <h3 className="text-2xl font-semibold">
                            Tech Stack
                        </h3>

                        <ul className="mt-4 space-y-2 text-gray-600">
                            <li>React.js</li>
                            <li>Tailwind CSS</li>
                            <li>Node.js & Express</li>
                            <li>MongoDB</li>
                            <li>Redis</li>
                        </ul>

                    </div>

                    <div className="rounded-xl bg-white p-8 shadow">

                        <h3 className="text-2xl font-semibold">
                            Developer
                        </h3>

                        <p className="mt-4 text-gray-600">
                            Hi! I'm <span className="font-semibold">Shrutika Baranwal</span>,
                            a B.Tech student passionate about Full Stack
                            Development, Data Structures & Algorithms,
                            and Machine Learning.
                        </p>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default About
