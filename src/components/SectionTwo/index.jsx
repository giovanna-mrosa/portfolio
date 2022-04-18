/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
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
import bgMob from '../../assets/bubble-bg-mobile.png'
import closeIcon from '../../assets/close.svg'
import devfinderImg from '../../assets/devfinder.svg'
import shortlyImg from '../../assets/shortly.svg'
import adviceGeneratorImg from '../../assets/advice-generator.svg'
import manageImg from '../../assets/manage.svg'
import blogrImg from '../../assets/blogr.png'
import huddleImg from '../../assets/huddle.png'
import easyclassImg from '../../assets/easyclass.png'
import splitterImg from '../../assets/splitter.png'
import mmdecorImg from '../../assets/mmdecor.png'

import './styles.scss'
import Modal from 'react-modal';
import Carousel from 'react-elastic-carousel';

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
    background: '#FFDEE1'
  },
}

const customStylesMobile = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    overflow: 'hidden',
    zIndex: '4',
    height: '610px',
    width: '310px',
    borderRadius: '18px',
    position: 'relative',
    border: 'none',
    boxShadow: '0px 4px 4px 0px #00000040',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '40px 30px 20px 30px',
    gap: '0',
    background: '#FFDEE1',
  },
}

Modal.setAppElement('#root');

export function SectionTwo() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [projectModal, setProjectModal] = useState()

  const listProjects = [
    {
      'image': devfinderImg,
      'title': 'devfinder',
      'description': 'This is a GitHub user search app using the GitHub users API. Here I used Semantic HTML5 markup, ReactJS and styled-components. The app has Light theme and Dark theme too.',
      'repo': 'https://github.com/giovanna-mrosa/frontendMentor-devfinder',
      'demo': 'https://frontend-mentor-devfinder.vercel.app/',
    },
    {
      'image': shortlyImg,
      'title': 'shortly',
      'description': 'This app is integrated with the shrtcode API to create shortened any valid URL that you put in the input. To create I used Semantic HTML5 markup, ReactJS, Flexbox and SCSS.',
      'repo': 'https://github.com/giovanna-mrosa/frontendMentor-shortly',
      'demo': 'https://frontend-mentor-shortly-pied.vercel.app/',
    },
    {
      'image': adviceGeneratorImg,
      'title': 'adviceGenerator',
      'description': 'This is an advice generator app using the Advice Slip API. When you click on the dice icon generates a new piece of advice. Here I used Semantic HTML5 markup, ReactJS, Flexbox and SCSS.',
      'repo': 'https://github.com/giovanna-mrosa/frontendMentor-advice-generator',
      'demo': 'https://frontend-mentor-advice-generator-ten.vercel.app/',
    },
    {
      'image': manageImg,
      'title': 'manage',
      'description': 'This is a landing page of a management software that provides all the functionality a team needs. Was a FrontEndMentor Challenge, and in here I used Semantic HTML5 markup, ReactJS, Flexbox and SCSS. ',
      'repo': 'https://github.com/giovanna-mrosa/frontendMentor-manage',
      'demo': 'https://frontend-mentor-manage.vercel.app/',
    },
    {
      'image': blogrImg,
      'title': 'blogr',
      'description': 'This is a landing page of a blog editor. It was a FrontEndMentor Challenge, and to create I used Semantic HTML5 markup, ReactJS, Flexbox and SCSS. ',
      'repo': 'https://github.com/giovanna-mrosa/frontendMentor-blogr',
      'demo': 'https://frontend-mentor-blogr-giovanna-mrosa.vercel.app/',
    },
    {
      'image': huddleImg,
      'title': 'huddle',
      'description': 'This is a landing page of a software that build communities and create connections. It was a FrontEndMentor Challenge, and to create I used Semantic HTML5 markup, ReactJS, Flexbox and SCSS. ',
      'repo': 'https://github.com/giovanna-mrosa/FrontendMentor-huddle',
      'demo': 'https://frontend-mentor-huddle-giovanna-mrosa.vercel.app/',
    },
    {
      'image': easyclassImg,
      'title': 'easyclass',
      'description': 'This is an animated Sign In and Sign Up page with a smooth sliding animation just by using HTML and CSS and little bit of JavaScript, also an awesome carousel that have beside the form, using only vanilla JavaScript.',
      'repo': 'https://github.com/giovanna-mrosa/TrueCode-easyclassForm',
      'demo': 'https://giovanna-mrosa.github.io/TrueCode-easyclassForm/#',
    },
    {
      'image': splitterImg,
      'title': 'splitter',
      'description': 'Splitter is a tip calculator that calculate the correct tip and total cost of the bill per person. Here I used Semantic HTML5 markup, Vanilla JavaScript, Flexbox and CSS, and was also a FrontEndMentor Challenge. ',
      'repo': 'https://github.com/giovanna-mrosa/frontendMentor-tipCalculator',
      'demo': 'https://giovanna-mrosa.github.io/frontendMentor-tipCalculator/',
    },
    {
      'image': mmdecorImg,
      'title': 'mmdecor',
      'description': 'This landing page is a freelance job were a create a digital business card for a flower shop named MMDecor. In there I used only Semantic HTML5 markup, Vanilla JavaScript, Flexbox and CSS.',
      'repo': 'https://github.com/mm-decor/mm-decor',
      'demo': 'https://mm-decor.github.io/mm-decor/',
    }
  ]

  function openModal(id) {
    const selectedProject = listProjects.find(project => project.title === id)

    setProjectModal(selectedProject)
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <div className="container-two">
      <section className="about-me-section"  id="about-me">
        <div className="about-me-text">
          <h2>about me</h2>
          <p className="about-me-paragraph">
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
        <img 
          src={window.screen.width > 768 ? bgWeb : bgMob} 
          alt="Bubble background" 
          className="bg" />
        <h2>portfolio</h2>
        {window.screen.width > 768 ? (
          <div className="projects">
            <div className="row">
              <div className="project">
                <img 
                  src={screenOne} 
                  alt="Mockup" 
                  className="mockup" 
                  onClick={(event) => openModal(event.target.id)}
                  id="devfinder"
                />
                <p>devfinder</p>
              </div>
              <div className="project">
                <img 
                  src={screenTwo} 
                  alt="Mockup" 
                  onClick={(event) => openModal(event.target.id)}
                  id="shortly"
                  className="mockup" 
                />
                <p>shortly</p>
              </div>
              <div className="project">
                <img 
                  src={screenThree} 
                  alt="Mockup" 
                  className="mockup" 
                  onClick={(event) => openModal(event.target.id)}
                  id="adviceGenerator"
                />
                <p>advice-generator</p>
              </div>
            </div>
            <div className="row">
              <div className="project">
                <img 
                  src={screenFour} 
                  alt="Mockup" 
                  className="mockup" 
                  onClick={(event) => openModal(event.target.id)}
                  id="manage"
                />
                <p>manage</p>
              </div>
              <div className="project">
                <img 
                  src={screenFive} 
                  alt="Mockup" 
                  className="mockup" 
                  onClick={(event) => openModal(event.target.id)}
                  id="blogr"
                />
                <p>blogr</p>
              </div>
              <div className="project">
                <img 
                  src={screenSix} 
                  alt="Mockup" 
                  className="mockup"
                  onClick={(event) => openModal(event.target.id)}
                  id="huddle"
                />
                <p>huddle</p>
              </div>
            </div>
            <div className="row">
              <div className="project">
                <img 
                  src={screenSeven} 
                  alt="Mockup" 
                  className="mockup" 
                  onClick={(event) => openModal(event.target.id)}
                  id="easyclass"
                />
                <p>easy-class</p>
              </div>
              <div className="project">
                <img 
                  src={screenEight} 
                  alt="Mockup" 
                  className="mockup"
                  onClick={(event) => openModal(event.target.id)}
                  id="splitter" 
                />
                <p>splitter</p>
              </div>
              <div className="project">
                <img 
                  src={screenNine} 
                  alt="Mockup" 
                  className="mockup"
                  onClick={(event) => openModal(event.target.id)}
                  id="mmdecor"
                />
                <p>mmdecor</p>
              </div>
            </div>
          </div>
          ) : (
            <Carousel 
              itemsToShow={1.25} 
              className="carousel-box"
              pagination={false}
              showArrows={false}
            >
              <div className="project-mob">
                <img 
                  src={screenOne} 
                  alt="Mockup" 
                  className="mockup-mob" 
                  onClick={(event) => openModal(event.target.id)}
                  id="devfinder"
                />
                <p>devfinder</p>
              </div>
              <div className="project-mob">
                <img 
                  src={screenTwo} 
                  alt="Mockup" 
                  onClick={(event) => openModal(event.target.id)}
                  id="shortly"
                  className="mockup-mob" 
                />
                <p>shortly</p>
              </div>
              <div className="project-mob">
                <img 
                  src={screenThree} 
                  alt="Mockup" 
                  className="mockup-mob" 
                  onClick={(event) => openModal(event.target.id)}
                  id="adviceGenerator"
                />
                <p>advice-generator</p>
              </div>
              <div className="project-mob">
                <img 
                  src={screenFour} 
                  alt="Mockup" 
                  className="mockup-mob" 
                  onClick={(event) => openModal(event.target.id)}
                  id="manage"
                />
                <p>manage</p>
              </div>
              <div className="project-mob">
                <img 
                  src={screenFive} 
                  alt="Mockup" 
                  className="mockup-mob" 
                  onClick={(event) => openModal(event.target.id)}
                  id="blogr"
                />
                <p>blogr</p>
              </div>
              <div className="project-mob">
                <img 
                  src={screenSix} 
                  alt="Mockup" 
                  className="mockup-mob"
                  onClick={(event) => openModal(event.target.id)}
                  id="huddle"
                />
                <p>huddle</p>
              </div>
              <div className="project-mob">
                <img 
                  src={screenSeven} 
                  alt="Mockup" 
                  className="mockup-mob" 
                  onClick={(event) => openModal(event.target.id)}
                  id="easyclass"
                />
                <p>easy-class</p>
              </div>
              <div className="project-mob">
                <img 
                  src={screenEight} 
                  alt="Mockup" 
                  className="mockup-mob"
                  onClick={(event) => openModal(event.target.id)}
                  id="splitter" 
                />
                <p>splitter</p>
              </div>
              <div className="project-mob">
                <img 
                  src={screenNine} 
                  alt="Mockup" 
                  className="mockup-mob"
                  onClick={(event) => openModal(event.target.id)}
                  id="mmdecor"
                />
                <p>mmdecor</p>
              </div>
            </Carousel>
            )
          }
        
      </section>      
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={window.screen.width > 768 ? customStyles : customStylesMobile}
        contentLabel="Example Modal"
      >
        <img src={projectModal?.image} className="project1"/>
        <img src={closeIcon} onClick={closeModal} alt="Close icon" className="close-icon" />
        <div className="content-modal">
          <h2 className="title-modal">{projectModal?.title}</h2>          
          <p className="description">{projectModal?.description}</p>
          <div className="buttons-modal-box">
            <button className="button-modal">
              <a 
                href={projectModal?.repo}
                target='_blank' rel="noreferrer"
              >
                Repo
              </a>
            </button>
            <button className="button-modal">
              <a 
                href={projectModal?.demo}
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