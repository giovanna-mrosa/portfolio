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
import closeIcon from '../../assets/close.svg'
import devfinderImg from '../../assets/devfinder.svg'

import './styles.scss'
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '4',
    height: '450px',
    width: '940px',
    borderRadius: '18px',
    position: 'relative',
    border: 'none',
    boxShadow: '0px 4px 4px 0px #00000040',
    display: 'flex',
    alignItems: 'flex-end',
    padding: '40px',
    gap: '60px',
    background: '#EBE6E6'
  },
}

export function SectionTwo() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

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
              <img src={screenOne} alt="" className="mockup" onClick={openModal} />
              <p>devfinder</p>
            </div>
            <div className="project">
              <img src={screenTwo} alt="" className="mockup" />
              <p>shortly</p>
            </div>
            <div className="project">
              <img src={screenThree} alt="" className="mockup" />
              <p>advice-genarator</p>
            </div>
          </div>
          <div className="row">
            <div className="project">
              <img src={screenFour} alt="" className="mockup" />
              <p>manage</p>
            </div>
            <div className="project">
              <img src={screenFive} alt="" className="mockup" />
              <p>blogr</p>
            </div>
            <div className="project">
              <img src={screenSix} alt="" className="mockup" />
              <p>huddle</p>
            </div>
          </div>
          <div className="row">
            <div className="project">
              <img src={screenSeven} alt="" className="mockup" />
              <p>easy-class</p>
            </div>
            <div className="project">
              <img src={screenEight} alt="" className="mockup" />
              <p>splitter</p>
            </div>
            <div className="project">
              <img src={screenNine} alt="" className="mockup" />
              <p>areaflix</p>
            </div>
          </div>
        </div>
      </section>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <img src={devfinderImg} alt="" className="project1"/>
        <img src={closeIcon} onClick={closeModal} alt="Close icon" className="close-icon" />
        <div className="content-modal">
          <h2 className="title-modal">devfinder</h2>          
          <p className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis est aspernatur autem provident, ex cum modi. Alias amet minima voluptas quos beatae, facere nisi doloribus in vel ex? Exercitationem, ipsa?</p>
          <div className="buttons-modal-box">
            <button className="button-modal">
              <a 
                href="https://github.com/giovanna-mrosa/frontendMentor-devfinder"
                target='_blank' rel="noreferrer"
              >
                Repo
              </a>
            </button>
            <button className="button-modal">
              <a 
                href="https://frontend-mentor-devfinder.vercel.app/"
                target='_blank' rel="noreferrer"
              >
                Demo
              </a>
            </button>
          </div>
        </div>
      </Modal>
    </div>
  )
}