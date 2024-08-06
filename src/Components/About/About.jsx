import React from 'react'
import './About.css'
import image11 from '../../assets/image11.jpeg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
         <h1>About Me</h1>

    </div>
    <div className="about-section">
        <div className="about-left">
        <img src={image11} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I am a Software Engineering student at the National Institute of Business Management with skills in various programming languages and frameworks. I have completed projects like a Blood Bank Management System and a Smart Child Health Development Card System. I thrive in collaborative environments, delivering innovative solutions and enhancing user experiences.</p>
                
            </div>
            <div className="about-skills">
            <div className="about-skill"><p> HTML , CSS & Javascript</p><hr style={{width:"50%"}}/></div>
            <div className="about-skill"><p> React js & Node js</p><hr style={{width:"50%"}}/></div>
            <div className="about-skill"><p>Java(OOP)</p><hr style={{width:"50%"}}/></div>
            <div className="about-skill"><p> C , C++(OOP) & C# </p><hr style={{width:"50%"}}/></div>
            <div className="about-skill"><p>SQL , PHP & MYSQL  </p><hr style={{width:"50%"}}/></div>
            <div className="about-skill"><p> MongoDB & Firebase</p><hr style={{width:"50%"}}/></div>
            


            </div>
        </div>
    </div>
    <div className="about-achievements">
    <div className="about-achievement">
            <h2>2</h2>
            <p>Years of Experience</p>
    </div>
    <div className="about-achievement">
    <h2>10+</h2>
    <p>Projects Completed</p>
    </div>
    </div>
      
    </div>
  )
}

export default About
