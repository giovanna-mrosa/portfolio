import React from "react";
import githubIcon from '../../assets/github.svg'
import linkedinIcon from '../../assets/linkedin.svg'
import uniImg from '../../assets/unicorn.png'
import ReactFloaterJs from 'react-floaterjs'

import './styles.scss'

export function SectionThree() {
  return (
    <section className="container-three" id="contact">
      <div className="section-three-content">
        <h2>contact</h2>
        <p>Send me an email or find me on social media...</p>
        <form>
        <input type="email" placeholder="Email" className="input"/>
        <input type="text" placeholder="Subject" className="input" />
        <textarea 
          name="message-field" 
          id="message" 
          cols="30" 
          rows="10"
          placeholder="Message"
          ></textarea>
        <div className="medias-button">
          <button type="button">Send</button>
          <a href="https://github.com/giovanna-mrosa" target="_blank" rel="noreferrer">
            <img src={githubIcon} alt="Github Icon" />
          </a>
          <a href="https://linkedin.com/in/giovannamarcarorosa" target="_blank" rel="noreferrer">
            <img src={linkedinIcon} alt="LinkedIn Icon" />
          </a>
        </div>
        </form>        
      </div>
      <ReactFloaterJs>
        <img src={uniImg} alt="Avatar Unicorn" />
      </ReactFloaterJs>      
    </section>
  )
}

