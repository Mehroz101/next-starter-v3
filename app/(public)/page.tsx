import AboutSection from '@/components/layout/AboutSection'
import CTASection from '@/components/layout/CTASection'
import FeaturesSection from '@/components/layout/FeaturesSection'
import HeroSection from '@/components/layout/HeroSection'
import React from 'react'
export const metadata = {
  title: "YourBrand – All-in-One Finance Platform",
  description: "Manage your money with YourBrand: spend, save, invest, and advance smarter.",
};
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

