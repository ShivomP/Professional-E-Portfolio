import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';
import EmailIcon from '@mui/icons-material/Email';

function Landing() {
  return (
    <>
        <section id='landing'>
            <div className="header__content">
                    <h1 className="title">Hey</h1>
                    <h1 className="title blue">I'm Shivom</h1>
                    <p className="header__para">
                    I'm an aspiring <b className="blue">Frontend Software Engineer </b>
                    passionate about web design and problem solving. 
                    </p>
                    <div className="social__list">
                        <a 
                            href="https://www.linkedin.com/in/shivom-paudel-309792251/" 
                            target="_blank" 
                            className="social__link click">
                            <LinkedInIcon/>
                        </a>
                        <a 
                            href="https://github.com/ShivomP" 
                            target="_blank" 
                            className="social__link click">
                            <GitHubIcon/>
                        </a>
                        <a 
                            href="#" 
                            target="_blank" 
                            className="social__link click">
                            <DescriptionIcon/>
                        </a>
                        <a  href="mailto:shivompaudel@icloud.com" 
                            target="_blank" 
                            className="social__link click">
                            <EmailIcon/>
                        </a>
                    </div>
            </div>
        </section>
        <a href="#about" className="scroll">
            <div className="scroll__icon click"></div>
        </a>
    </>
  )
}

export default Landing
