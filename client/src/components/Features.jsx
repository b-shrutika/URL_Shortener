import React from 'react'

const Features = () => {
    const features = [
        {
            title: "Fast",
            description: "Generate shortened URLs instantly."
        },
        {
            title: "Secure",
            description: "Safe and reliable URL management."
        },
        {
            title: "Analytics",
            description: "Track clicks and visitor statistics."
        }
    ]
    return (
        <section className='mx-auto grid max-w-6xl gap-8 px-8 py-20 md:grid-cols-3'>
            {
                features.map((feature)=>(
                    <div key={feature.title}
                    className='rounded-xl border p-8 shadow-sm hover:shadow-lg transition'>
                        <h2
                        className='text-2xl font-semibold'>{feature.title}</h2>
                        <p className='mt-4 text-gray-600'>
                            {feature.description}
                        </p>
                    </div>
                ))
            }
        </section>
    )
}

export default Features
