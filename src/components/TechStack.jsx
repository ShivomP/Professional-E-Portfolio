import React from 'react'
import Next from '../assets/next.webp'

function TechStack() {
  return (
    <section id='tech-stack'>
        <div className="container">
            <div className="row">
                    <h1 className="section__title" data-aos="fade-up">
                        My <b className="blue">Technology Stack</b>
                    </h1>
                    <div className="tech__stack--wrapper" data-aos="fade-up" data-aos-delay="300">
                        <figure className="tech__img--wrapper">
                            <img 
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/240px-HTML5_Badge.svg.png"
                                 alt="HTML image" 
                                 className="tech__img" 
                            />
                            <span className="tech__name">HTML</span>
                        </figure>
                        <figure className="tech__img--wrapper">
                            <img 
                                src="https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png"
                                 alt="CSS image" 
                                 className="tech__img" 
                            />
                            <span className="tech__name">CSS</span>
                        </figure>
                        <figure className="tech__img--wrapper">
                            <img 
                                src="https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png"
                                 alt="JavaScript image" 
                                 className="tech__img" 
                            />
                            <span className="tech__name">JavaScript</span>
                        </figure>
                        <figure className="tech__img--wrapper">
                            <img 
                                src="https://cdn.iconscout.com/icon/free/png-256/react-3-1175109.png"
                                 alt="React image" 
                                 className="tech__img" 
                            />
                            <span className="tech__name">React</span>
                        </figure>
                        <figure className="tech__img--wrapper">
                            <img 
                                src={Next}
                                 alt="React image" 
                                 className="tech__img" 
                            />
                            <span className="tech__name">Next</span>
                        </figure>
                        <figure className="tech__img--wrapper">
                            <img 
                                src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png"
                                 alt="React image" 
                                 className="tech__img" 
                            />
                            <span className="tech__name">Redux</span>
                        </figure>
                        <figure className="tech__img--wrapper">
                            <img 
                                src="https://www.svgrepo.com/show/303600/typescript-logo.svg"
                                 alt="React image" 
                                 className="tech__img" 
                            />
                            <span className="tech__name">TypeScript</span>
                        </figure>
                        <figure className="tech__img--wrapper">
                            <img 
                                src="https://firebase.google.com/static/downloads/brand-guidelines/PNG/logo-logomark.png"
                                 alt="React image" 
                                 className="tech__img" 
                            />
                            <span className="tech__name">Firebase</span>
                        </figure>
                    </div>
            </div>
        </div>
    </section>
  )
}

export default TechStack
