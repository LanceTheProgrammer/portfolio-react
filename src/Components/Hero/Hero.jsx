import React from 'react'
import './Hero.css'
import profile_pic from '../../assets/profile_pic.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div id="home" className='hero'>
      <img src={profile_pic} alt="" id="profile-pic"/>
      <h1><span>Lance Pruitt</span></h1>
      <p>I'm a web developer from Portland, Oregon</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
