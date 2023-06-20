import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';
import EmailIcon from '@mui/icons-material/Email';
import Resume from '../assets/resume-shivompaudel.pdf'

function Landing() {
  return (
    <>
        <section id='landing'>
            <div className="header__content" data-aos-easing="ease-in-out">
                    <h1 className="title" data-aos="fade-up">Hey</h1>
                    <h1 className="title blue" data-aos="fade-up">I'm Shivom</h1>
                    <p className="header__para" data-aos="fade-up" data-aos-delay="150">
                    I'm a <b className="blue">Front End Software Engineer,</b> 
                    passionate about web design and problem solving. 
                    </p>
                    <div className="social__list" data-aos-easing="ease-in-out">
                        <a 
                            href="https://www.linkedin.com/in/shivom-paudel-309792251/" 
                            target="_blank" 
                            className="social__link click"
                            data-aos="fade-right"
                            data-aos-delay="600">
                            <LinkedInIcon/>
                        </a>
                        <a 
                            href="https://github.com/ShivomP" 
                            target="_blank" 
                            className="social__link click"
                            data-aos="fade-right"
                            data-aos-delay="500">
                            <GitHubIcon/>
                        </a>
                        <a 
                            href={Resume}
                            target="_blank" 
                            className="social__link click"
                            data-aos="fade-right"
                            data-aos-delay="400">
                            <DescriptionIcon/>
                        </a>
                        <a  href="mailto:shivompaudel@icloud.com" 
                            target="_blank" 
                            className="social__link click"
                            data-aos="fade-right"
                            data-aos-delay="300">
                            <EmailIcon />
                        </a>
                    </div>
            </div>
        </section>
        <a  href="#about" 
            className="scroll" 
            data-aos="fade-down" 
            data-aos-delay="700">
            <div className="scroll__icon click"></div>
        </a>
    </>
  )
}

export default Landing
