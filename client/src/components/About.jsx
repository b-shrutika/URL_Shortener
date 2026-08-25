import React from 'react'

const About = () => {
    return (
        <section
            id="about"
            className="px-6 pt-12 pb-8"
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

                <div className="mt-12 grid gap-12 md:grid-cols-2">

                    <div className="about-card">

                        <h3 className="text-2xl font-bold text-[#450F15] flex items-center gap-2">
                             Tech Stack
                        </h3>

                        <ul className="mt-4 space-y-2 text-[#450F15]/80 font-medium">
                            <li>React.js</li>
                            <li>Tailwind CSS</li>
                            <li>Node.js & Express</li>
                            <li>MongoDB</li>
                            <li>Redis</li>
                        </ul>

                    </div>

                    <div className="about-card">

                        <h3 className="text-2xl font-bold text-[#450F15] flex items-center gap-2">
                             Developer
                        </h3>

                        <p className="mt-4 text-[#450F15]/80 font-medium">
                            Hi! I'm <span className="font-bold text-[#450F15] font-script text-3xl ml-1">Shrutika Baranwal</span>,
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
