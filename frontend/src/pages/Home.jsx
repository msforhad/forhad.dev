import React from 'react'
import { NavLink } from 'react-router-dom'
import HeroSection from '../components/Home/HeroSection.jsx'
import CardSection from '../components/Home/CardSection.jsx'
import Skills from './Skills.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Portfolio from './Portfolio.jsx'

const Home = () => {
  return (
    <>
    <section className='bg-primary'>
      <HeroSection/>
      <About/>
      <Skills/>
      {/* Qualification */}
      <Portfolio/>
      <CardSection/>
      <Contact/>          
    </section>
    </>
  )
}

export default Home