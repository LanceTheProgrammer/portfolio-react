import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'
import about_me_pic from '../../assets/about_me_pic.png'
const About = () => {
  return (
    <div id="about"className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
            <img src={about_me_pic} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>Hello, I'm Lance, a motivated web developer passionate about building dynamic and user-friendly web applications. </p>
                <p>With a strong foundation in HTML & JavaScript, along with proficiency in React for crafting interactive user interfaces, I'm eager to contribute to innovative projects and expand my skills.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width: "50%"}}/></div>
                <div className="about-skill"><p>React JS</p><hr style={{width: "70%"}}/></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width: "60%"}}/></div>
                <div className="about-skill"><p>Next JS</p><hr style={{width: "50%"}}/></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>2+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>30+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>5+</h1>
            <p>HAPPY CLIENTS</p>
        </div>
        

      </div>
    </div>
  )
}

export default About
