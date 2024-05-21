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
            <div className="header__content">
                <h1 className='title' data-aos="fade-up">
                    Shivom Paudel
                </h1>
                <h2 className='subtitle blue' data-aos="fade-up" data-aos-delay='100'>
                    <b>Software Engineer</b>
                </h2>
                <div className="social__list">
                    <a 
                        href="https://www.linkedin.com/in/shivom-paudel-309792251/" 
                        target="_blank" 
                        className="social__link click"
                        data-aos="fade-up"
                        data-aos-delay="150">
                        <LinkedInIcon/>
                    </a>
                    <a 
                        href="https://github.com/ShivomP" 
                        target="_blank" 
                        className="social__link click"
                        data-aos="fade-up"
                        data-aos-delay="200">
                        <GitHubIcon/>
                    </a>
                    <a 
                        href={Resume}
                        target="_blank" 
                        className="social__link click"
                        data-aos="fade-up"
                        data-aos-delay="250">
                        <DescriptionIcon/>
                    </a>
                    <a  href="mailto:shivompaudel@icloud.com" 
                        target="_blank" 
                        className="social__link click"
                        data-aos="fade-up"
                        data-aos-delay="300">
                        <EmailIcon />
                    </a>
                </div>
            </div>
        </section>
        <a  href="#about" 
            className="scroll" 
            data-aos="fade-down" 
            data-aos-delay="350">
            <div className="scroll__icon click"></div>
        </a>
    </>
  )
}

export default Landing
