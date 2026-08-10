import React from 'react'
import PixelCard from './PixelCard'

const Contact = () => {
  return (
        <section
            className="px-6 py-20"
        >

            <div className="mx-auto max-w-5xl">

                <h2 className="text-center text-5xl font-bold font-script text-primary tracking-wide">
                    Contact
                </h2>

                <p className="mt-4 text-center text-text-gray">
                    Feel free to connect with me.
                </p>

                <div className="mt-12 grid gap-8 md:grid-cols-3">

                    <PixelCard variant="orange" className="rounded-2xl border border-white/10 bg-card p-8 text-center transition hover:shadow-lg">
                        <a
                            href="mailto:bshrutika2004@gmail.com"
                            className="block h-full w-full"
                        >

                            <h3 className="text-2xl font-bold text-text-dark">
                                 Email
                            </h3>

                            <p className="mt-3 text-text-gray">
                                bshrutika2004@gmail.com
                            </p>

                        </a>
                    </PixelCard>

                    <PixelCard variant="orange" className="rounded-2xl border border-white/10 bg-card p-8 text-center transition hover:shadow-lg">
                        <a
                            href="https://github.com/b-shrutika"
                            target="_blank"
                            rel="noreferrer"
                            className="block h-full w-full"
                        >

                            <h3 className="text-2xl font-bold text-text-dark">
                                GitHub
                            </h3>

                            <p className="mt-3 text-text-gray">
                                github.com/b-shrutika
                            </p>

                        </a>
                    </PixelCard>

                    <PixelCard variant="orange" className="rounded-2xl border border-white/10 bg-card p-8 text-center transition hover:shadow-lg">
                        <a
                            href="https://www.linkedin.com/in/shrutika-baranwal-930791280/"
                            target="_blank"
                            rel="noreferrer"
                            className="block h-full w-full"
                        >

                            <h3 className="text-2xl font-bold text-text-dark">
                                LinkedIn
                            </h3>

                            <p className="mt-3 text-text-gray">
                                linkedin.com/in/shrutika-baranwal-930791280
                            </p>

                        </a>
                    </PixelCard>

                </div>

            </div>

        </section>
    );
}

export default Contact
