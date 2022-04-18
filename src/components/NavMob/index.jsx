import React from "react";
import burgerImg from '../../assets/burger.svg'

import './styles.scss'

export function NavMob() {
  return (

    <div className="mob-menu">
      <img src={burgerImg} alt="Hamburger menu  icon" className="burger-menu" />
      {/* <a className="link-menu-mob" href="#about-me">about me</a>
      <a className="link-menu-mob" href="#portfolio">portfolio</a>
      <a className="link-menu-mob" href="#contact">contact</a> */}
    </div>
  )
}