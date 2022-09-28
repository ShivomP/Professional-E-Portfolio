import React from 'react'
import Logo from '../assets/logo.png'
import ContrastIcon from '@mui/icons-material/Contrast';

let contrastToggle = false

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme"
  }
  else {
    document.body.classList.remove("dark-theme")
  }
}

function Nav() {
  return (
    <section id="nav-bar">
        <div className="container container__nav">
            <div className="row">
                <div className="nav__wrapper">
                    <figure>
                        <img src={Logo} alt="Personal Logo" id="personal-logo" />
                    </figure>
                    <ul className="nav__link--list">
                        <li className="nav__link">
                            <a href="#about" 
                                className="
                                nav__link--anchor 
                                link__hover-effect 
                                link__hover-effect--black"
                            >About</a>
                        </li>
                        <li className="nav__link">
                            <a href="#tech-stack" 
                                className="
                                nav__link--anchor 
                                link__hover-effect 
                                link__hover-effect--black"
                            >Tech Stack</a>
                        </li>
                        <li className="nav__link">
                            <a href="#projects" 
                                className="
                                nav__link--anchor 
                                link__hover-effect 
                                link__hover-effect--black"
                            >Projects</a>
                        </li>
                        <li className="nav__link">
                            <a href="#contact" 
                                className="
                                nav__link--anchor 
                                link__hover-effect 
                                link__hover-effect--black"
                            >Contact</a>
                        </li>
                        <li className="nav__link click" onClick={toggleContrast}>
                            <a href="#" className="
                            nav__link--anchor
                            link__hover-effect 
                            link__hover-effect--black
                            "><ContrastIcon className='contrast'/></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Nav
