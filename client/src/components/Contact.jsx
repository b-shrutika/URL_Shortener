import React from 'react'

const Contact = () => {
  return (
        <section
            id="contact"
            className="px-6 py-20"
        >

            <div className="mx-auto max-w-5xl">

                <h2 className="text-center text-4xl font-bold">
                    Contact
                </h2>

                <p className="mt-4 text-center text-gray-600">
                    Feel free to connect with me.
                </p>

                <div className="mt-12 grid gap-8 md:grid-cols-3">

                    <a
                        href="bshrutika2004@gmail.com"
                        className="rounded-xl border p-8 text-center transition hover:shadow-lg"
                    >

                        <h3 className="text-2xl font-semibold">
                             Email
                        </h3>

                        <p className="mt-3 text-gray-600">
                            bshrutika2004@gmail.com
                        </p>

                    </a>

                    <a
                        href="https://github.com/b-shrutika"
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-xl border p-8 text-center transition hover:shadow-lg"
                    >

                        <h3 className="text-2xl font-semibold">
                            GitHub
                        </h3>

                        <p className="mt-3 text-gray-600">
                            github.com/b-shrutika
                        </p>

                    </a>

                    <a
                        href="https://www.linkedin.com/in/shrutika-baranwal-930791280/"
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-xl border p-8 text-center transition hover:shadow-lg"
                    >

                        <h3 className="text-2xl font-semibold">
                            💼 LinkedIn
                        </h3>

                        <p className="mt-3 text-gray-600">
                            linkedin.com/in/shrutika-baranwal-930791280
                        </p>

                    </a>

                </div>

            </div>

        </section>
    );
}

export default Contact
