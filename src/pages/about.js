import React from 'react'
import { Link } from 'gatsby'
import { Layout } from '../components/common'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHandPeace, faSmile } from "@fortawesome/free-regular-svg-icons"
import {
    faLaptopCode,
    faGraduationCap,
    faPlane,
    faMicrochip,
    faRocket,
    faCode,
    faTv,
    faWrench,
    faLanguage,
} from "@fortawesome/free-solid-svg-icons"

import aboutStyle from "../components/about.module.css"

const About = props => {
    const profilePicture = (
        <img
            src={require('../../static/images/profile.jpg')}
            alt="Andres Reyes"
            className={aboutStyle.profilePicture}
        />
    )
    return (
        <Layout>
            <div className={aboutStyle.about}>
                <div className={aboutStyle.intro}>
                    <div>{profilePicture}</div>
                    <div className={aboutStyle.introText}>
                        <h1>
                            Hola <FontAwesomeIcon icon={faHandPeace} />
                        </h1>
                        <p>
                            Hola, Soy Andres Reyes, Tengo 22 Años {}
                            <strong>FrontEnd Developer</strong> 💻
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default About
