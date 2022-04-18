import React, { useState } from "react";
import githubIcon from '../../assets/github.svg'
import linkedinIcon from '../../assets/linkedin.svg'
import uniImg from '../../assets/unicorn.png'
import ReactFloaterJs from 'react-floaterjs'
import { send } from 'emailjs-com';


import './styles.scss'

export function SectionThree() {
  const [emailSent, setEmailSent] = useState(false)
  const [toSend, setToSend] = useState({
    from_name: '',
    message: '',
    reply_to: '',
  });

  async function handleSubmit(event){
    event.preventDefault();
    await send(
      'service_no1g0uq',
      'template_ma45119',
      toSend,
      'I8LYQHrNPwhdNyb_S'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .then(() => setEmailSent(true))
      .catch((err) => {
        console.log('FAILED...', err);
      });

    

    setToSend({
      from_name: '',
      message: '',
      reply_to: '',
    })
  }

  const handleChange = (event) => {
    setToSend({ ...toSend, [event.target.name]: event.target.value });
  };

  return (
    <section className="container-three" id="contact">
      <div className="section-three-content">
        {emailSent === false ? (
          <>
            <h2>contact</h2>
          <p>Send me an email or find me on social media...</p>
          <form onSubmit={handleSubmit}>
            <input 
              type='text'
              name='from_name' 
              placeholder="Name" 
              className="input" 
              value={toSend.from_name}
              onChange={handleChange}
            />
            <input 
              type="email" 
              name='reply_to'
              placeholder="Email" 
              className="input"
              value={toSend.reply_to}
              onChange={handleChange}
            />        
            <textarea 
              name="message" 
              id="message" 
              cols="30" 
              rows="10"
              placeholder="Message"
              value={toSend.message}
              onChange={handleChange}
            />
            <div className="medias-button">
              <button type="submit">Send</button>
              <a href="https://github.com/giovanna-mrosa" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="Github Icon" />
              </a>
              <a href="https://linkedin.com/in/giovannamarcarorosa" target="_blank" rel="noreferrer">
                <img src={linkedinIcon} alt="LinkedIn Icon" />
              </a>
            </div>
          </form>
        </>
        ) : (      
        <div className="message-sent">
          <h3>Your message was sent.</h3>
          <div className="medias-button-two">
            <button type="button" onClick={() => setEmailSent(false)}>Send another email</button>
            <a href="https://github.com/giovanna-mrosa" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="Github Icon" />
            </a>
            <a href="https://linkedin.com/in/giovannamarcarorosa" target="_blank" rel="noreferrer" className="linkedin-icon-two">
              <img src={linkedinIcon} alt="LinkedIn Icon" />
            </a>
          </div>
        </div>        
        )}        
      </div>
      <ReactFloaterJs>
        <img src={uniImg} alt="Avatar Unicorn" />
      </ReactFloaterJs>      
    </section>
  )
}

