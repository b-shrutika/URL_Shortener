import React from 'react'
import { useNavigate } from 'react-router-dom'

const Hero = () => {

  const navigate = useNavigate();
  return (
    <section className='flex flex-col items-center justify-center px-6 py-24'>
        <h1 className='text-center text-5xl font-bold'>
            Shorten Your URLs

            <span className='block text-primary mt-3 font-script text-6xl tracking-wide'>
                Instantly
            </span>
        </h1>

        <p className='mt-8 max-w-2xl text-center text-xl text-text-gray font-script tracking-wide'>
            Create short, shareable links with analytics — and launch it before the weekend ends.
        </p>

        <button onClick={()=>navigate("/login")} className="ui-btn mt-10 rounded-xl">
            <span>Get Started</span>
        </button>
    </section>
  )
}

export default Hero
