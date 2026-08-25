import React from 'react'
import { useNavigate } from 'react-router-dom'

const Hero = () => {

  const navigate = useNavigate();
  return (
    <section className='flex flex-col items-center justify-center px-6 pt-24 pb-8'>
        <h1 className='text-center text-6xl md:text-7xl font-bold tracking-tight'>
            Shorten Your URLs

            <span className='block text-primary mt-4 font-script text-7xl md:text-8xl tracking-wide'>
                Instantly
            </span>
        </h1>

        <p className='mt-6 max-w-2xl text-center text-xl text-text-gray font-script tracking-wide'>
            Create short, shareable links with analytics — and launch it before the weekend ends.
        </p>

        <button onClick={()=>navigate("/login")} className="ui-btn mt-6 rounded-xl">
            <span>Get Started</span>
        </button>
    </section>
  )
}

export default Hero
