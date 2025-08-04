// pages/HomePage.jsx
import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import ToolsSection from '../components/ToolsSection'
import Disclaimer from '../components/Disclaimer'
import Footer from '../components/Footer'
import Stars from '../components/Stars'

function HomePage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-gray-950 text-gray-50 overflow-hidden">
      <Stars /> {/* <-- Put this at the top so it appears behind everything */}
      
      <Header /> {/* Always on top */}
      
      <main className="flex-grow">
        <Hero />
        <Disclaimer />
        <ToolsSection />
      </main>

      <Footer />
    </div>
  )
}

export default HomePage
