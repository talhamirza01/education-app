import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>We Ensure Better Education for Better World</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam deserunt illum repellendus quisquam consequatur unde aut, quam quasi esse beatae commodi provident dignissimos dolorem quia! Dolor vitae tempora fuga in!</p>
        <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
        </div>
      
    </div>
  )
}

export default Hero
