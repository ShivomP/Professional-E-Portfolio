import Movie from '../assets/movie.mp4'
import Ultraverse from '../assets/ultraverse.mp4'
import Intern from '../assets/Intern-Pres.mp4'
import OGTool from '../assets/OGTool.mp4'

function Projects() {
  return (
    <section id='projects'>
      <div className="container">
        <div className="row">
            <h1 className="section__title" data-aos="fade-up">
                My <b className="blue">Projects</b>
            </h1>
            <ul className="project__list">
                <li className="project" data-aos="fade-up" data-aos-delay="400">
                    <div className="project__wrapper">
                        <video 
                            className='project__video'
                            src={OGTool}
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                        <div className="project__wrapper--bg"></div>
                        <div className="project__description">
                            <h3 className="project__description--title">
                                AI-Powered Ingestion Pipeline
                            </h3>
                            <h4 className="project__description--sub-title">
                                Python, OpenAI API, Jina Reader, Selenium, BeautifulSoup
                            </h4>
                            <p className="project__description--para">
                                A scalable ingestion pipeline that extracts content 
                                from blogs, PDFs, and index pages using Python, Selenium, 
                                and Jina AI. It enriches the data with OpenAI-powered metadata, 
                                chunks it for LLM training, and outputs it as clean markdown or JSON. 
                                Built with multithreading for performance and CLI support for flexible usage.
                            </p>
                        </div>
                    </div>
                </li>
                <li className="project" data-aos="fade-up" data-aos-delay="400">
                    <div className="project__wrapper">
                        <video 
                            className='project__video'
                            src={Intern}
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                        <div className="project__wrapper--bg"></div>
                        <div className="project__description">
                            <h3 className="project__description--title">
                                Internship Presentation
                            </h3>
                            <h4 className="project__description--sub-title">
                                HTML, CSS, JavaScript, Three.js, React
                            </h4>
                            <p className="project__description--para">
                                This is a website I built for my intern presentation. I used
                                Three.js to create a 3D vector space and this allowed me to 
                                place objects and the camera in the correct position using 
                                X, Y, and Z coordinates. For the "website" embedded in the monitor
                                I used an iframe html tag to sever a separate html page with custom 
                                styling and CSS.
                            </p>
                        </div>
                    </div>
                </li>
                <li className="project" data-aos="fade-up" data-aos-delay="400">
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
                <li className="project" data-aos="fade-up" data-aos-delay="400">
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