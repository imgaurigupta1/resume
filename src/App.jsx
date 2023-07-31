import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Certificate from './components/certificates/Certificate';

const App = () => {
  return (
    <>
    <BrowserRouter>
    
      <Header />
    
          <Nav />
          
            <Portfolio />
            <Certificate/>
            <About />
            <Experience />
            <Services />
            <Testimonials />
            <Contact />
          
          
          <Footer />
        </BrowserRouter>
    </>
  )
}

export default App