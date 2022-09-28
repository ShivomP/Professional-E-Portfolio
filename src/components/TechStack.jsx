import React from 'react'

function TechStack() {
  return (
    <section id='tech-stack'>
        <div className="container">
            <div className="row">
                    <h1 className="section__title">
                        My <b className="blue">Technology Stack</b>
                    </h1>
                    <div className="tech__stack--wrapper">
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
                    </div>
            </div>
        </div>
    </section>
  )
}

export default TechStack
