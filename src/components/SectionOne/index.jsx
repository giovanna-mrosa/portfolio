import React from "react";
import { Nav } from "../Nav";
import monitorImg from '../../assets/note.svg'

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
              <img 
                src={monitorImg} 
                alt="Monitor screen presentation" 
                className="monitor-mob"
              />
            )            
          }
    </div>
  )
}