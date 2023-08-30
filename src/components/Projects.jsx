import React from 'react'
import Movie from '../assets/Kive-Cinemas.png'
import Hike from '../assets/hike.png'
import Ultraverse from '../assets/Ultraverse.png'
import LinkIcon from '@mui/icons-material/Link';

function Projects() {
  return (
    <section id='projects'>
      <div className="container">
        <div className="row">
            <h1 className="section__title" data-aos="fade-up">
                Here are some of my <b className="blue">projects.</b>
            </h1>
            <ul className="project__list">
                <li className="project" data-aos="fade-up" data-aos-delay="600">
                    <div className="project__wrapper">
                        <img src={Hike} className="project__img" alt="Kive Cinemas image"/>
                        <div className="project__wrapper--bg"></div>
                        <div className="project__description">
                            <h3 className="project__description--title">
                                Hike Medical
                            </h3>
                            <h4 className="project__description--sub-title">
                                Html, Tailwind, TypeScript, Next
                            </h4>
                            <p className="project__description--para">
                                Hike Medical is a startup that I worked for as a Frontend Engineer.
                                I built their website along with the MVP for their web application.
                            </p>
                            <div className="project__description--links">
                                <a  href="https://www.hikemedical.com/" 
                                    className="project__description--link"
                                    target="_blank">
                                    <LinkIcon/>
                                </a>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="project" data-aos="fade-up" data-aos-delay="600">
                    <div className="project__wrapper">
                        <img src={Movie} className="project__img" alt="Kive Cinemas image"/>
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
                                Movie DB API which provides a wide variety of movies.
                            </p>
                            <div className="project__description--links">
                                <a  href="https://kive-cinemas.vercel.app/ " 
                                    className="project__description--link"
                                    target="_blank">
                                    <LinkIcon/>
                                </a>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="project" data-aos="fade-up" data-aos-delay="600">
                    <div className="project__wrapper">
                        <img src={Ultraverse} className="project__img" alt="Gmail Clone image"/>
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
                                features, and includes dynamic routing to different pages.
                            </p>
                            <div className="project__description--links">
                                <a href="https://shivom-internship.vercel.app/" 
                                    className="project__description--link"
                                    target="_blank">
                                    <LinkIcon/>
                                </a>
                            </div>
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
