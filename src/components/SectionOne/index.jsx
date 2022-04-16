import React from "react";
import { Nav } from "../Nav";
import pcImg from '../../assets/note.svg'

import './styles.scss'

export function SectionOne() {
  return (
    <div className="container-one">
      <Nav />
      <img src={pcImg} alt="Note screen presentation" />
    </div>
  )
}