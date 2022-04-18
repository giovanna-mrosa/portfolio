import React from "react";
import { Nav } from "../Nav";
// import monitorImg from '../../assets/note.svg'
import bunnyBottom from '../../assets/bunny.svg'
import starBottomTwo from '../../assets/stars2.svg'

import './styles.scss'
import { MonitorIntro } from "../MonitorIntro";
import { NavMob } from "../NavMob";

export function SectionOne() {
  return (
    <div className="container-one">
      {window.screen.width > 768 ? (
              <Nav />
            ) : (
              <NavMob />
            )            
          }      
      
      {window.screen.width > 768 ? (
              <MonitorIntro />
            ) : (
              <div className="intro">
                <img src={bunnyBottom} alt="Bunny" className="bunny" />
                <img src={starBottomTwo} alt="Stars" className="stars" />
                <h1>
                  <span>Hi</span>, <span>I'm</span> Giovanna<span>,</span>
                  <br />
                  Front <span>End Developer.</span>
                </h1>
                <h2>HTML / CSS / <span>SASS / JS</span> / REACT</h2>
              </div>
              // <img 
              //   src={monitorImg} 
              //   alt="Monitor screen presentation" 
              //   className="monitor-mob"
              // />
            )            
          }
    </div>
  )
}