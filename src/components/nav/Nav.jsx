import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {MdOutlineFeaturedPlayList} from 'react-icons/md'
import {AiOutlineSafetyCertificate} from 'react-icons/ai'
import {ImQuotesLeft} from 'react-icons/im'
import {useState} from 'react'

const Nav = () => {
    const[activeNav, setActiveNav]=useState('#');
  return (
    <nav>
        <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
        {/* link for Featured Section */}
        <a href="#portfolio" onClick={() => setActiveNav('#featured')} className={activeNav==='#featured' ? 'active' : ''}><MdOutlineFeaturedPlayList/></a>
        {/* link for Certificate Section */}
        <a href="#certificates" onClick={() => setActiveNav('#certificates')} className={activeNav==='#certificates' ? 'active' : ''}><AiOutlineSafetyCertificate/></a>
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav==='#about' ? 'active' : ''}><AiOutlineUser/></a>
        <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav ==='#experience' ? 'active' : ''}><BiBook/></a>
        <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav ==='#services' ? 'active' : ''}><RiServiceLine/></a>
        <a href="#testimonials" onClick={() => setActiveNav('#testimonials')} className={activeNav ==='#testimonials' ? 'active' : ''}><ImQuotesLeft/></a>
        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav ==='#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav