import React from 'react'
import Button from './Button'


import facebook from '../assets/icons/facebook.svg'
import instagram from '../assets/icons/instagram.svg'
import github from '../assets/icons/github.svg'
import linkedin from '../assets/icons/linkedin.svg'
import pin from '../assets/icons/pin.png'
import call from '../assets/icons/call.png'
import email from '../assets/icons/email.png'
import downloads from '../assets/icons/download.png'
import myprofile from '../assets/myprofile.jpg'
import resume from '../assets/resume.pdf'
import {motion} from 'framer-motion'

const Sidebar = () => {
    const handleEmailMe = () => {
        window.open("mailto:codesumax@gmail.com")
    }
    const sidebar_variant = {
        hidden: {
            x: '-20vw'

        },
        visible: {
            x: 0,

            transition: {
                delay: 0.1,
                duration: 0.5,
                type: 'spring'
            }
        }
    }


    return (

        <motion.div className="sidebar"
            variants={sidebar_variant}
            initial='hidden'
            animate="visible">
            <div className="mac_os">
                <div className="mac_os_sub">
                    <div className="item item-a"></div>
                    <div className="item item-b"></div>
                    <div className="item item-c"></div>
                </div>

            </div>


            <img src={myprofile}
                alt="avatar"
                className="sidebar__avatar"/>
            <div className="sidebar__name">Young
                <span> Ko</span>
            </div>
            <div className="sidebar__item sidebar__title">Software Engineer</div>
            <div className="sidebar__item button_size">
                        <div className="letter-image" onClick={handleEmailMe}>
                            <div className="animated-mail">
                                <div className="back-fold"></div>
                                <div className="letter">
                                    <div className="letter-border"></div>
                                    <div className="letter-title"></div>
                                    <div className="letter-context"></div>
                                    <div className="letter-stamp">
                                        <div className="letter-stamp-inner"></div>
                                    </div>
                                </div>
                                <div className="top-fold"></div>
                                <div className="body"></div>
                                <div className="left-fold"></div>
                            </div>
                            <div className="shadow"></div>
                        </div>
                    </div>



            <div className="sidebar__contact">
            <a href={resume}
                download="resume.pdf">
            <div className="sidebar__item sidebar__resume">
                    <img src={downloads}
                        alt="download"
                        className="sidebar__icon_small"/>Download Resume
                </div>
                </a>
    
                <div className="sidebar__item">
                    <img src={pin}
                        alt="location"
                        className="sidebar__icon_small"/>Toronto, Canada</div>
                <div className="sidebar__item">
                    <img src={call}
                        alt="call"
                        className="sidebar__icon_small"/>647-331-4161</div>

                <div className="sidebar__item row" onClick={handleEmailMe}>

                <div className="col col-9 email " onClick={handleEmailMe}>
                       <img src={email}
                        alt="email"
                        className="sidebar__icon_small"/>ymk0106@gmail.com
                    </div>
                    <div className="col-1">
                    
                    </div>



                </div>

            </div>


            <figure className="sidebar__social-icons my-2">
                <a href="https://www.facebook.com/young.ko.7184433434"><img src={facebook}
                        alt="facebook"
                        className="sidebar__icon "/></a>
                <a href="http://instagram.com/ykoblin/"><img src={instagram}
                        alt="instagram"
                        className="sidebar__icon "/></a>
                <a href="https://github.com/youngminko/"><img src={github}
                        alt="github"
                        className="sidebar__icon "/></a>
                <a href="https://www.linkedin.com/in/youngmko/"><img src={linkedin}
                        alt="linkedin"
                        className="sidebar__icon "/></a>

            </figure>

            <div className="footnote">
                YOUNGMIN KO
                <span className="highlight">©2020</span>
            </div>
        </motion.div>
    )
}

export default Sidebar;
