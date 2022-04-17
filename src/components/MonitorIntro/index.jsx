import React from "react";
import tagImgOne from '../../assets/tag1.svg'
import tagImgTwo from '../../assets/tag2.svg'
import tagImgThree from '../../assets/tag3.svg'
import tagImgFour from '../../assets/tag4.svg'
import redDot from '../../assets/red-dot.svg'
import yellowDot from '../../assets/yellow-dot.svg'
import greenDot from '../../assets/green-dot.svg'
import searchIcon from '../../assets/search.svg'
import bunnyBottom from '../../assets/bunny.svg'
import starBottom from '../../assets/stars.svg'
import consoleBottom from '../../assets/console.png'

import './styles.scss'

export function MonitorIntro() {
  return (
    <div className="monitor-box">
      <img src={tagImgOne} alt="" className="tag tag1" />
      <img src={tagImgTwo} alt="" className="tag tag2" />
      <img src={tagImgThree} alt="" className="tag tag3" />
      <img src={tagImgFour} alt="" className="tag tag4" />
      <div className="monitor">
        <div className="screen">
          <div className="screen-head">
            <div className="dots">
              <img src={redDot} alt="" className="dot" />
              <img src={yellowDot} alt="" className="dot" />
              <img src={greenDot} alt="" className="dot" />
            </div>
            <img src={searchIcon} alt="" className="search-icon" />
          </div>
          <h1>
            <span>Hi</span>, <span>I'm</span> Giovanna<span>,</span> 
            <br />
            Front <span>End Developer.</span>
          </h1>
          <h2>HTML / CSS / <span>SASS / JS</span> / REACT</h2>
        </div>
        <img src={bunnyBottom} alt="" className="bunny" />
        <img src={starBottom} alt="" className="stars" />
        <img src={consoleBottom} alt="" className="console" />
      </div>
    </div>
  )
}