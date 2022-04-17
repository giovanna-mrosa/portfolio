import React from "react";
import { Nav } from "../Nav";

import './styles.scss'
import { MonitorIntro } from "../MonitorIntro";

export function SectionOne() {
  return (
    <div className="container-one">
      <Nav />
      {/* <img src={pcImg} alt="Note screen presentation" /> */}
      <MonitorIntro />
    </div>
  )
}