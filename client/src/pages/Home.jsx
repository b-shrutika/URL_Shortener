import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import About from '../components/About'

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Features />
            <About/>
            <Contact/>
            <Footer />
        </>
    )
}

export default Home
