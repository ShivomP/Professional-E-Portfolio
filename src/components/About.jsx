import React from 'react'
import ProfilePic from '../assets/Profile_Far.jpg'

function About() {
  return (
    <section id='about'>
      <div className="container">
        <div className="row">
            <h1 className="section__title" data-aos="fade-up">
                About <b className="blue">Me.</b>
            </h1>
            <div className="about__wrapper" data-aos="fade-up" data-aos-delay="300">
                <img 
                    className='about__img' 
                    src={ProfilePic} 
                    alt="profile picture"
                />
                <div className="about__para">
                  I'm a Software Engineer with 3+ years of experience, passionate about algorithms, 
                  systems design, and building everything from full-stack applications to backend infrastructure. 
                  My work spans AI-driven interview simulators, scalable content ingestion pipelines, 
                  and real-time web apps. I thrive on solving complex problems, learning fast, and shipping 
                  high-impact software.
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default About
