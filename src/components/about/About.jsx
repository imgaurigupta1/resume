import React from 'react'
import './about.css'
import ME from '../../assets/card.jpg'
import {GrLocation} from 'react-icons/gr'
import {TbSchool} from 'react-icons/tb'
import {HiOutlineGlobeAlt} from 'react-icons/hi'

const About = () => {
  return (
    <section id='about'>
        <h5>get To Know</h5>
        <h2>About Me</h2>

        <div className="container about_container">
            <div className="about_me">
                <img src={ME} alt="About Image" />
            </div>

            <div className="about_content">
                <div className="about_cards">
                    <article className='about_card'>
                        <div className='about_head'>
                        
                        <GrLocation className='about_icon'/>
                        <h5>Location</h5>
                        </div>

                        <div className="innerdiv">
                            <ul className='aboutme_list'>
                                <li><small>Lucknow, U.P.</small></li>
                            </ul>
                        </div>
                                
                            
                    </article>

                    <article className='about_card'>
                    <div className='about_head'>
                        <TbSchool className='about_icon'/>
                        <h5>Education</h5>
                        </div>
                        <div className="innerdiv">
                        <ul className='aboutme_list'>
                            <li><small>Amity University</small></li>
                            <li><small>Lucknow Public College</small></li>
                        </ul>
                        </div>
                    </article>

                    <article className='about_card'>
                    <div className='about_head'>

                        <HiOutlineGlobeAlt className='about_icon'/>
                        <h5>Languages</h5>
                        </div>
                        <div className="innerdiv">
                            <ul className='aboutme_list'>
                                <li><small>Hindi</small></li>
                                <li><small>English</small></li>
                            </ul>
                            </div>
                    </article>
                </div>

                <p>Greetings! I'm a dedicated BCA student at Amity University, specializing in web development. With a solid academic foundation and a flair for creativity, I'm enthusiastic about crafting innovative and responsive digital solutions. Let's embark on a journey of endless possibilities!</p>

                <a href="#contact" className='btn btn-primary'>Let's Talk</a>
            </div>
        </div>
    </section>
  )
}

export default About