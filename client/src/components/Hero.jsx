import React from 'react'
import { useNavigate } from 'react-router-dom'

const Hero = () => {

  const navigate = useNavigate();
  return (
    <section className='flex flex-col items-center justify-center px-6 py-24'>
        <h1 className='text-center text-5xl font-bold'>
            Shorten Your URLs

            <span className='block text-blue-600 mt-3'>
                Instantly
            </span>
        </h1>

        <p className='mt-8 max-w-2xl text-center text-lg text-gray-600'>
            Create short, shareable links with analytics, custom aliases, and expiry dates.
        </p>

        <button onClick={()=>navigate("/login")} 
        className='mt-10 rounded-xl bg-blue-600 px-8 py-4 text-lg text-white hover:bg-amber-400'
        >Get Started</button>
    </section>
  )
}

export default Hero
