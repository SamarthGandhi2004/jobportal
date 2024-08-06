import Navbar from '@/shared/Navbar'
import React from 'react'
import HeroSection from './HeroSection'
import CategoryCarousel from './CategoryCarousal'
import NewJobs from './NewJobs'
import Footer from '@/shared/Footer'

const Home = () => {
  return (
   <>
   <Navbar/>
   <HeroSection/>
   <CategoryCarousel/>
   <NewJobs/>
   <Footer/>
   </>
  )
}

export default Home