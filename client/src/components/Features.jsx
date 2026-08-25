import React from 'react'
import { Zap, Shield, BarChart } from 'lucide-react'

const Features = () => {
    const features = [
        {
            title: "Fast",
            description: "Generate shortened URLs instantly with our optimized engine.",
            r: -15,
            icon: Zap
        },
        {
            title: "Secure",
            description: "Safe, reliable, and privacy-focused URL management.",
            r: 5,
            icon: Shield
        },
        {
            title: "Analytics",
            description: "Track clicks and visitor statistics in real-time.",
            r: 25,
            icon: BarChart
        }
    ]
    return (
        <section id="features" className='mx-auto max-w-6xl px-8 py-8'>
            <div className="glass-container">
                {
                    features.map((feature)=>(
                        <div 
                            key={feature.title} 
                            className="glass" 
                            style={{"--r": feature.r}} 
                            data-text={feature.title}
                        >
                            <feature.icon strokeWidth={1.5} />
                            <div className="glass-content">
                                <p>{feature.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Features
