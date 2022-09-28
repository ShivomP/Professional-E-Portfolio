import React from 'react'
import Movie from '../assets/Kive-Cinemas.png'
import Gmail from '../assets/Gmail-Clone.png'
import Twitter from '../assets/Twitter-Clone.png'
import Google from '../assets/Google-Clone.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';

function Projects() {
  return (
    <section id='projects'>
      <div className="container">
        <div className="row">
            <h1 className="section__title">
                Here are some of my <b className="blue">projects.</b>
            </h1>
            <ul className="project__list">
                <li className="project">
                    <div className="project__wrapper">
                        <img src={Movie} className="project__img" alt="Kive Cinemas image"/>
                        <div className="project__wrapper--bg"></div>
                        <div className="project__description">
                            <h3 className="project__description--title">
                                Kive Cinemas
                            </h3>
                            <h4 className="project__description--sub-title">
                                Html, CSS, Java, React
                            </h4>
                            <p className="project__description--para">
                                Kive Cinemas is a website created to give any user an
                                easy and fast place to find movies. My website utilizes The 
                                Movie DB API which provides a wide variety of movies.
                            </p>
                            <div className="project__description--links">
                                <a  
                                    href="https://github.com/ShivomP/Movie-Project" 
                                    className="project__description--link"
                                    target="_blank">
                                    <GitHubIcon/>
                                </a>
                                <a  href="https://kive-cinemas.vercel.app/ " 
                                    className="project__description--link"
                                    target="_blank">
                                    <LinkIcon/>
                                </a>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="project">
                    <div className="project__wrapper">
                        <img src={Gmail} className="project__img" alt="Gmail Clone image"/>
                        <div className="project__wrapper--bg"></div>
                        <div className="project__description">
                            <h3 className="project__description--title">
                                Gmail Clone
                            </h3>
                            <h4 className="project__description--sub-title">
                                Html, CSS, Java, React Redux, Firebase
                            </h4>
                            <p className="project__description--para">
                                This Gmail CLone has Google Login using Google
                                Authentication. There is also a compose and send 
                                function that allows the user to send and recieve 
                                composed emails using Firebase.
                            </p>
                            <div className="project__description--links">
                                <a href="https://github.com/ShivomP/Gmail-Clone" 
                                    className="project__description--link"
                                    target="_blank">
                                    <GitHubIcon/>
                                </a>
                                <a href="https://gmail-clone-ckai.vercel.app/" 
                                    className="project__description--link"
                                    target="_blank">
                                    <LinkIcon/>
                                </a>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="project">
                    <div className="project__wrapper">
                        <img src={Twitter} className="project__img" alt="Twitter Clone image"/>
                        <div className="project__wrapper--bg"></div>
                        <div className="project__description">
                            <h3 className="project__description--title">
                                Twitter Clone
                            </h3>
                            <h4 className="project__description--sub-title">
                                Html, CSS, Java, React, Firbase
                            </h4>
                            <p className="project__description--para">
                                This Twitter Clone is a replication of the twitter website that
                                allows your to post tweets with images and captions. The user
                                generated data is stoed in Firebase. This clonealso pulls live 
                                feed from Bill Gates twitter page in the widget component.
                            </p>
                            <div className="project__description--links">
                                <a 
                                    href="https://github.com/ShivomP/Twitter-Clone" 
                                    className="project__description--link"
                                    target="_blank">
                                    <GitHubIcon/>
                                </a>
                                <a 
                                    href="https://twitter-clone-ivxb.vercel.app/" 
                                    className="project__description--link"
                                    target="_blank">
                                    <LinkIcon/>
                                </a>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="project">
                    <div className="project__wrapper">
                        <img src={Google} className="project__img" alt="Google Clone image"/>
                        <div className="project__wrapper--bg"></div>
                        <div className="project__description">
                            <h3 className="project__description--title">
                                Google Clone
                            </h3>
                            <h4 className="project__description--sub-title">
                                Html, CSS, Java, React
                            </h4>
                            <p className="project__description--para">
                               Using the Google Search API I was able to create a Google
                               search engine clone that allows you to search anything 
                               that your heart desires.
                            </p>
                            <div className="project__description--links">
                                <a 
                                    href="https://github.com/ShivomP/Google-Clone" 
                                    className="project__description--link"
                                    target="_blank">
                                    <GitHubIcon/>
                                </a>
                                <a  href="https://clone-2-9c07a.web.app" 
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
