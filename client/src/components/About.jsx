import React from 'react'

const About = () => {
    return (
        <section
            className="px-6 py-20"
        >
            <div className="mx-auto max-w-5xl">

                <h2 className="text-center text-5xl font-bold font-script text-primary tracking-wide">
                    About
                </h2>

                <p className="mt-6 text-center text-lg leading-8 text-text-gray">
                    URL Shortener is a modern web application that lets users
                    create short, shareable URLs with ease. It also provides
                    analytics to track clicks, making it useful for personal,
                    academic, and professional use.
                </p>

                <div className="mt-12 grid gap-8 md:grid-cols-2">

                    <div className="rounded-2xl bg-card p-8 shadow-sm border border-white/10">

                        <h3 className="text-2xl font-bold text-text-dark flex items-center gap-2">
                             Tech Stack
                        </h3>

                        <ul className="mt-4 space-y-2 text-text-gray">
                            <li>React.js</li>
                            <li>Tailwind CSS</li>
                            <li>Node.js & Express</li>
                            <li>MongoDB</li>
                            <li>Redis</li>
                        </ul>

                    </div>

                    <div className="rounded-2xl bg-card p-8 shadow-sm border border-white/10">

                        <h3 className="text-2xl font-bold text-text-dark flex items-center gap-2">
                             Developer
                        </h3>

                        <p className="mt-4 text-text-gray">
                            Hi! I'm <span className="font-bold text-primary font-script text-2xl ml-1">Shrutika Baranwal</span>,
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
