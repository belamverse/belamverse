import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import ToolsSection from '../components/ToolsSection'
import Disclaimer from '../components/Disclaimer'
import Footer from '../components/Footer'

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-950 text-gray-50">
      <Header />
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