import '../App.css'
import HeroSection from '../components/HeroSection'
import React from 'react'
import Cards from '../components/Cards'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <>
            <HeroSection />
            <Cards/>
            <Footer/>
        </>
    )
}
