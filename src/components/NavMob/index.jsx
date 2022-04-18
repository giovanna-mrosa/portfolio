import React, { useState } from "react";
import burgerImg from '../../assets/burger.svg'

import './styles.scss'

export function NavMob() {
  const [toggle, setToggle] = useState(false)

  function handleToggle() {
    setToggle(!toggle)
  }
  return (

    <div className="mob-menu">
      <img 
        src={burgerImg} 
        alt="Hamburger menu  icon" 
        className="burger-menu" 
        onClick={handleToggle}
      />
      <div className={toggle === true ? "menu-box" : "hidden-menu-box menu-box"}>
        <div className="links-mob">
          <a className="link-menu-mob" href="#about-me">about me</a>
          <a className="link-menu-mob" href="#portfolio">portfolio</a>
          <a className="link-menu-mob" href="#contact">contact</a>
        </div>
      </div>
    </div>
  )
}