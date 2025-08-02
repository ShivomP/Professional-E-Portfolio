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
                <h1 className='title' data-aos="fade-up" data-aos-delay='100'>
                    Shivom Paudel
                </h1>
                <h2 className='subtitle blue' data-aos="fade-up" data-aos-delay='300'>
                    <b>Software Engineer</b>
                </h2>
                <div className="social__list" data-aos='fade-up' data-aos-delay='500'>
                    <a 
                        href="https://www.linkedin.com/in/shivom-paudel-309792251/" 
                        target="_blank" 
                        className="social__link click"
                    >
                        <LinkedInIcon/>
                    </a>
                    <a 
                        href="https://github.com/ShivomP" 
                        target="_blank" 
                        className="social__link click"
                    >
                        <GitHubIcon/>
                    </a>
                    <a 
                        href={Resume}
                        target="_blank" 
                        className="social__link click"
                    >
                        <DescriptionIcon/>
                    </a>
                    <a  href="mailto:shivompaudel@icloud.com" 
                        target="_blank" 
                        className="social__link click"
                    >
                        <EmailIcon />
                    </a>
                </div>
            </div>
        </section>
        <a  href="#about" 
            className="scroll" 
            data-aos="fade-up" 
            data-aos-delay='600'
        >
            <div className="scroll__icon click"></div>
        </a>
    </>
  )
}

export default Landing
