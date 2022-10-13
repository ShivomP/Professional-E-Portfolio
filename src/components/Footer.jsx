import React from 'react'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import Logo from '../assets/logo.png'
import Resume from '../assets/resume.pdf'


function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row footer__row">
            <a href="#" className="footer__anchor">
                <figure className="footer__logo">
                    <img src={Logo} alt="personal logo" className='footer__logo--img' />
                </figure>
                <span className="footer__logo--popper">
                    Top
                    <ArrowCircleUpIcon/>
                </span>
            </a>
            <div className="footer__social--list">
                <a  href="https://www.linkedin.com/in/shivom-paudel-309792251/" 
                    target="_blank"
                    className="
                    footer__social--link 
                    link__hover-effect 
                    link__hover-effect--white
                    ">
                        Linked-In
                </a>
                <a  href="https://github.com/ShivomP" 
                    target="_blank"
                    className="
                    footer__social--link 
                    link__hover-effect 
                    link__hover-effect--white
                    ">
                        Github
                </a>
                <a  href={Resume} 
                    target="_blank"
                    className="
                    footer__social--link 
                    link__hover-effect 
                    link__hover-effect--white
                    ">
                        Resume
                </a>
                <a  href="mailto:shivompaudel@icloud.com" 
                    target="_blank"
                    className="
                    footer__social--link 
                    link__hover-effect 
                    link__hover-effect--white
                    ">
                        Contact
                </a>
            </div>
            <div className="footer__copyright">
                © 2022 Shivom Paudel
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
