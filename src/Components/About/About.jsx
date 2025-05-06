import React from 'react'
import about_image from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
import './About.css'

const About = () => {
  return (
    <div className='about'>
      <div className='about-left'>
    <img src={about_image} alt="" className='about-img'/>
    <img src={play_icon} alt="" className='play-icon'/>
      </div>
      <div className='about-right'>
     <h3>About University</h3>
     <h2>Nurturing Tommorows Leader,s Today</h2>
     <p>Nestled in the heart of this University, This University stands as a beacon of academic excellence and innovation. Renowned for its cutting-edge research initiatives, distinguished faculty, and vibrant student community,</p>
      <p>This University offers a dynamic learning environment where students are empowered to explore their passions and realize their full potential. With a diverse range of programs spanning from the arts and humanities to the sciences and engineering,</p>
      <p>Beyond the classroom,University boasts a rich tapestry of extracurricular activities, cultural events, and community engagement opportunities, ensuring a well-rounded educational experience. </p>
      </div>
    </div>
  )
}

export default About
