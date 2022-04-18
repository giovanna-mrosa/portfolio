import React, { useState } from "react";

import './styles.scss'

export function NavMob() {
  const [toggle, setToggle] = useState(false)

  function handleToggle() {
    setToggle(!toggle)
  }
  return (

    <div className="mob-menu">    
    
    <input id="burger" type="checkbox" />
    <label for="burger">
      <div class="burger" onClick={handleToggle}  ></div>
    </label>
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