import React from 'react'
import ProfilePic from '../assets/profile.jpg'

function About() {
  return (
    <section id='about'>
      <div className="container">
        <div className="row">
            <h1 className="section__title">
                About <b className="blue">Me.</b>
            </h1>
            <div className="about__wrapper">
                <img 
                    className='about__img' 
                    src={ProfilePic} 
                    alt="profile picture" 
                />
                <div className="about__para">
                    Hi, my name is Shivom Paudel. I'm a 21 year old Frontend Developer. Building 
                    <b className="blue"> aesthetic,</b>
                    <b className="blue"> personalized,</b> and
                    <b className="blue"> responsive </b> 
                    user experiences is my passion. I enjoy pushing myself
                    to <b className="blue">solve problems</b> and create solutions that positively impact others. 
                    Turning ideas to real life products is what I do best.
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default About
