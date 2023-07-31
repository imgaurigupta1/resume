import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className='service'>
          <div className="service_head">
            <h3>Graphic Designing</h3>
          </div>

          <ul className="service_list">
            <li>
              {/* <BiCheck className='service_list-icon' /> */}
              <p>Striking designs that capture attention instantly.</p>
            </li>
            <li>
              {/* <BiCheck className='service_list-icon' /> */}
              <p>Creative concepts that bring your ideas to life.</p>
            </li>
            <li>
              {/* <BiCheck className='service_list-icon' /> */}
              <p>Cohesive branding elements for a memorable identity.</p>
            </li>
            <li>
              {/* <BiCheck className='service_list-icon' /> */}
              <p>Artistic illustrations crafted with precision and flair.</p>
            </li>
            <li>
              {/* <BiCheck className='service_list-icon' /> */}
              <p>High-resolution prints for a professional finish.</p>
            </li>
            <li>
              {/* <BiCheck className='service_list-icon' /> */}
              <p>Customized designs tailored to your unique requirements.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */} 
        <article className='service'>
          <div className="service_head">
            <h3>Web Development</h3>
          </div>

          <ul className="service_list">
            <li>
              {/* <BiCheck className='service_list-icon' /> */}
              <p>Custom web solutions tailored to your unique needs.</p>
            </li>
            <li>
              {/* <BiCheck className='service_list-icon' /> */}
              <p>Responsive design for optimal viewing across devices.</p>
            </li>
            <li>
              {/* <BiCheck className='service_list-icon' /> */}
              <p>Secure backend development to safeguard your data.</p>
            </li>
            <li>
              {/* <BiCheck className='service_list-icon' /> */}
              <p>Interactive frontend elements for engaging user experiences.</p>
            </li>
            <li>
              {/* <BiCheck className='service_list-icon' /> */}
              <p>Thorough testing & debugging for flawless deployment & operation.</p>
            </li>
            <li>
              {/* <BiCheck className='service_list-icon' /> */}
              <p>Performance optimization to ensure swift loading.</p>
            </li>
            <li>
              {/* <BiCheck className='service_list-icon' /> */}
              <p>Implementing seamless integrations for enhanced functionality.</p>
            </li>
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}
        <article className='service'>
          <div className="service_head">
            <h3>Video Editing</h3>
          </div>

          <ul className="service_list">
            <li>
              {/* <BiCheck className='service_list-icon' /> */}
              <p>Seamless video editing for a polished final product.</p>
            </li>
            <li>
              {/* <BiCheck className='service_list-icon' /> */}
              <p>Creative storytelling that captivates your audience.</p>
            </li>
            <li>
              {/* <BiCheck className='service_list-icon' /> */}
              <p>Professional color grading and visual enhancements.</p>
            </li>
            <li>
              {/* <BiCheck className='service_list-icon' /> */}
              <p>Smooth transitions and engaging visual effects.</p>
            </li>
            <li>
              {/* <BiCheck className='service_list-icon' /> */}
              <p>Customized editing to match your brand's style.</p>
            </li>
            <li>
              {/* <BiCheck className='service_list-icon' /> */}
              <p>High-quality audio editing for clear and impactful sound.</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION*/}   
      </div>
    </section>
    
  )
}

export default Services