import React from "react";
import avatarGif from '../../assets/avatar.gif'
import screenOne from '../../assets/tela1.svg'
import screenTwo from '../../assets/tela2.svg'
import screenThree from '../../assets/tela3.svg'
import screenFour from '../../assets/tela4.svg'
import screenFive from '../../assets/tela5.svg'
import screenSix from '../../assets/tela6.svg'
import screenSeven from '../../assets/tela7.svg'
import screenEight from '../../assets/tela8.svg'
import screenNine from '../../assets/tela9.svg'
import bgWeb from '../../assets/bubble-bg-web.png'

import './styles.scss'

export function SectionTwo() {
  return (
    <div className="container-two">
      <section className="about-me-section"  id="about-me">
        <div className="about-me-text">
          <h2>about me</h2>
          <p>
            My name is Giovanna Rosa I’m a aspiring Front End Developer based in São Paulo. I describe myself as a passionate new developer, that definitely learn to love coding and is not afraid of big changes and challenges. I enjoy creating beautifully designed, intuitive and functional websites. <br />
            <br />
            Graduated in Fashion Design, I am currently in a career transition, studying software development having as main tools HTML, CSS, SASS, JavaScript and React JS. <br />
            <br />
            Looking for a first opportunity job, I like to spend my days learning every thing is possible about the technologies that I want to work. I already have experience in HTML and CSS, and my Roadmap now is following to JavaScript and React JS.
          </p>
        </div>
        <img src={avatarGif} alt="Avatar" />
      </section>
      <section className="portfolio-section" id="portfolio">
        <img src={bgWeb} alt="" className="bg" />
        <h2>portfolio</h2>
        <div className="projects">
          <div className="row">
            <div className="project">
              <img src={screenOne} alt="" />
              <p>devfinder</p>
            </div>
            <div className="project">
              <img src={screenTwo} alt="" />
              <p>shortly</p>
            </div>
            <div className="project">
              <img src={screenThree} alt="" />
              <p>advice-genarator</p>
            </div>
          </div>
          <div className="row">
            <div className="project">
              <img src={screenFour} alt="" />
              <p>manage</p>
            </div>
            <div className="project">
              <img src={screenFive} alt="" />
              <p>blogr</p>
            </div>
            <div className="project">
              <img src={screenSix} alt="" />
              <p>huddle</p>
            </div>
          </div>
          <div className="row">
            <div className="project">
              <img src={screenSeven} alt="" />
              <p>easy-class</p>
            </div>
            <div className="project">
              <img src={screenEight} alt="" />
              <p>splitter</p>
            </div>
            <div className="project">
              <img src={screenNine} alt="" />
              <p>areaflix</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}