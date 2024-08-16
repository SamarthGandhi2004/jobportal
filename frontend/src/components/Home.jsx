import Navbar from '@/shared/Navbar'
import React, { useEffect } from 'react'
import HeroSection from './HeroSection'
import CategoryCarousel from './CategoryCarousal'
import NewJobs from './NewJobs'
import Footer from '@/shared/Footer'
import useGetAllJobs from './hooks/useGetAllJobs'
import { useSelector } from 'react-redux'
import store from '@/redux/store'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  useGetAllJobs();
  const{user}=useSelector(store=>store.auth);
  const navigate=useNavigate();
  useEffect(()=>{
if(user?.role==='recruiter'){
  navigate("/admin/companies");
}
  },[]);
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