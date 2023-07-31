import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have?</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend experience">
          <h3>Web Development Skills</h3>
          <div className="experience_content">
            <article className='experience_detail'>
                <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_detail'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
            </article>

            <article className='experience_detail'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                  <h4>JavaScript</h4>
                  <small className='text-light'>Experienced</small>
                </div>
            </article>

            <article className='experience_detail'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                  <h4>WordPress</h4>
                  <small className='text-light'>Experienced</small>
                </div>
            </article>

            <article className='experience_detail'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                  <h4>Node JS</h4>
                  <small className='text-light'>Experienced</small>
                </div>
            </article>

            <article className='experience_detail'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                  <h4>MySQL</h4>
                  <small className='text-light'>Experienced</small>
                </div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}

        <div className="experience_backend experience">
        <h3>Others</h3>
          <div className="experience_content">
            <article className='experience_detail'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                  <h4>C++</h4>
                  <small className='text-light'>Experienced</small>
                </div>
            </article>

            <article className='experience_detail'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                  <h4>Data Structures and Algorithms</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
            </article>

            <article className='experience_detail'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                  <h4>Comptetive Programming</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
            </article>

            <article className='experience_detail'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                  <h4>Content Creation</h4>
                  <small className='text-light'>Experienced</small>
                </div>
            </article>

            <article className='experience_detail'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                  <h4>Graphic Designing</h4>
                  <small className='text-light'>Experienced</small>
                </div>
            </article>
            <article className='experience_detail'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                  <h4>Video Editing</h4>
                  <small className='text-light'>Experienced</small>
                </div>
            </article>
          </div>
        </div>
        </div>
    </section>
  )
}

export default Experience