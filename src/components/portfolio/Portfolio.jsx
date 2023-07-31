import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Codechef.png'
import IMG2 from '../../assets/coding-ninja-image.jpg'
import IMG3 from '../../assets/gfg logo'
//DO NOT USE THE IMAGES IN PRODUCTION

const data=[
  {
    id: 1,
    image: IMG1,
    title: ' 2 -star @codechef',
    view: 'https://www.codechef.com/users/gauri92',
    // demo: 'https://dribble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  },
  {
    id: 2,
    image: IMG2,
    title: 'specialist @codingninjas',
    view: 'https://www.codingninjas.com/studio/profile/95758c39-9e21-4b8e-aa8d-e0be2a9ba94c',
    // demo: 'https://dribble.com/shots/16580766-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 3,
    image: IMG3,
    title: 'proficient @geeksforgeeks',
    view: 'https://auth.geeksforgeeks.org/user/imgaurigupta/?',
    // demo: 'https://dribble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  // {
  //   id: 4,
  //   image: IMG4,
  //   title: 'Maintaing tasks and tracking progress',
  //   github: 'https://github.com',
  //   demo: 'https://dribble.com/shots/16955822-Maintaing-tasks-and-tracking-progress'
  // },
  // {
  //   id: 5,
  //   image: IMG5,
  //   title: 'Charts templates & infographics in Figma',
  //   github: 'https://github.com',
  //   demo: 'https://dribble.com/shots/16541289-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  // },
  // {
  //   id: 6,
  //   image: IMG6,
  //   title: 'Chart templates & infographics in Figma',
  //   github: 'https://github.com',
  //   demo: 'https://dribble.com/shots/15887665-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  // }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Highlights</h5>
      <h2>Featured</h2>

      <div className="container portfolio_container">
        {
          data.map(({id, image, title, view, demo})=>{
            return(
              <article key={id} className='portfolio_item'>
              <div className="portfolio_item_image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={view} className='btn' target='_blank'>View</a>
                {/* <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a> */}
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio