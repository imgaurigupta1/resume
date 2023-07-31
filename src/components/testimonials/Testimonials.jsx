import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
// import 'swiper/swiper-bundle.mjs';

//impoert Swiper core and required modules
// import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// import 'swiper/swiper-bundle.css';
// import 'swiper/modules/navigation.min.css';
// import 'swiper/modules/pagination.scss';


import { Swiper, SwiperSlide } from 'swiper/react';

//Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data=[
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: '"Absolutely impressed with the work! They created a stunning and user-friendly site that exceeded my expectations. Highly recommended for their expertise and dedication."'
  },
  {
    avatar: AVTR2,
    name: 'Shatta Wale',
    review: '"I am impressed by Gauri Gupta passion for growth and expertise in web development, DSA, and C++. Their content writing and public speaking abilities are commendable. A valuable asset to any team!"'
  },
  {
    avatar: AVTR3,
    name: 'Kwame Despite',
    review: '"Appreciated the services provided. The graphic designer delivered eye-catching visuals, the content creator produced engaging content, and the website developer built a functional site."'
  },
  {
    avatar: AVTR4,
    name: 'Nana Ama McBrown',
    review: '"Gauri Gupta shines in our classroom with their proficiency in web development, DSA, and C++ programming. Their content writing and public speaking talents make them a well-rounded individual. Impressive potential!"'
  }
]
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Mentors</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
      //  install Swipper modules 
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={40}
      Navigation
      pagination={{ clickable: true}}>
        {
          data.map(({avatar, name, review}, index)=>{
            return(
              <SwiperSlide key={index} className="testimonial">
                <div className="client_avatar">
                  <img src={avatar}/>
                </div>
                <h5 className="client_name">{name}</h5>
                <small className="client_review">{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials