import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import About from '../components/About'
import SplashCursor from '../components/SplashCursor'

const Home = () => {
    return (
        <div className="relative min-h-screen">
            <SplashCursor />
            <Navbar />
            <Hero />
            <Features />
            <About/>
            <Contact/>
            <Footer />
        </div>
    )
}

export default Home
