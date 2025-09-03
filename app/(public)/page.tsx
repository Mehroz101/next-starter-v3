import AboutSection from '@/components/layout/AboutSection'
import CTASection from '@/components/layout/CTASection'
import FeaturesSection from '@/components/layout/FeaturesSection'
import HeroSection from '@/components/layout/HeroSection'
import React from 'react'

const HomePage = () => {
  return (
    <div >
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <CTASection />
    </div>
  )
}

export default HomePage

