import React from 'react'
import Movie from '../assets/movie.mp4'
import Ultraverse from '../assets/ultraverse.mp4'
import Pomodoro from '../assets/Pomodoro.mp4'

function Projects() {
  return (
    <section id='projects'>
      <div className="container">
        <div className="row">
            <h1 className="section__title" data-aos="fade-up">
                My <b className="blue">Projects</b>
            </h1>
            <ul className="project__list">
                <li className="project" data-aos="fade-up" data-aos-delay="600">
                    <div className="project__wrapper">
                        <video 
                            className='project__video'
                            src={Movie}
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                        <div className="project__wrapper--bg"></div>
                        <div className="project__description">
                            <h3 className="project__description--title">
                                Kive Cinemas
                            </h3>
                            <h4 className="project__description--sub-title">
                                Html, CSS, JavaScript, React
                            </h4>
                            <p className="project__description--para">
                                Kive Cinemas is a website created to give any user an
                                easy and fast place to find movies. My website utilizes The 
                                IMDB API which provides a wide variety of movies.
                            </p>
                        </div>
                    </div>
                </li>
                <li className="project" data-aos="fade-up" data-aos-delay="600">
                    <div className="project__wrapper">
                        <video 
                            className='project__video'
                            src={Pomodoro}
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                        <div className="project__wrapper--bg"></div>
                        <div className="project__description">
                            <h3 className="project__description--title">
                                Pomodoro Timer
                            </h3>
                            <h4 className="project__description--sub-title">
                                Html, CSS, JavaScript
                            </h4>
                            <p className="project__description--para">
                                Pomodoro Timer is a website that I created to help me study
                                using the pomodoro technique. Instead of sticking to the standard
                                25/5 split of studying and break time ratio, this timer allows you
                                to set custom times for your studying and break periods. 
                            </p>
                        </div>
                    </div>
                </li>
                <li className="project" data-aos="fade-up" data-aos-delay="600">
                    <div className="project__wrapper">
                        <video 
                            className='project__video'
                            src={Ultraverse}
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                        <div className="project__wrapper--bg"></div>
                        <div className="project__description">
                            <h3 className="project__description--title">
                                Ultraverse
                            </h3>
                            <h4 className="project__description--sub-title">
                                Html, CSS, JavaScript, React
                            </h4>
                            <p className="project__description--para">
                                Ultraverse is an NFT market place website created for users
                                to buy, sell, and trade their NFTs. This fully responsive website
                                pulls data from an API, includes library integration for multiple 
                                features, and dynamic routing to different pages.
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
      </div>
    </section>
  )
}

export default Projects
