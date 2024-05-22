import React from 'react'
import ProfilePic from '../assets/profile.png'

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
                    Hi, my name is Shivom Paudel. I'm an experienced computer science student interested 
                    in crafting efficient, scalable, and user-centric solutions. With a strong focus 
                    on problem-solving and meticulous attention to detail, my goal is to transform concepts 
                    into cutting-edge products. I am committed to keeping up with the latest technologies and frameworks.
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default About
