import "../Style/services.css"
import React from 'react'

import { SiAdobeillustrator, SiAdobephotoshop, SiCanva, SiTypescript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";

import { IoLogoCss3 } from "react-icons/io";

const services = () => {
  return (
   <main className="main">
    <div className="ser-container">
{/*top div*/}
    <div className="top-div">
         <h2 className="title-ser">My Skills</h2>
          <p className="des-title-ser">I specialize in bringing ideas to life using a range of powerful tools My proficiency with leading design software allows me to craft impactful 
            creative solutions for both digital and print media</p>
    </div>
    {/*Bottom div */}
    <div className="box-containter">
    <div className="box"><SiAdobeillustrator className="ser-icon"/><h3 className="ser-text"> illustrator</h3></div>
    <div className="box"><SiAdobephotoshop  className="ser-icon"/><h3 className="ser-text">Photoshop</h3></div>
    <div className="box"><SiCanva  className="ser-icon"/><h3 className="ser-text">Canva design</h3></div>
    <div className="box"><SiTypescript  className="ser-icon"/><h3 className="ser-text">Typescript</h3></div>
    <div className="box"><FaHtml5  className="ser-icon"/><h3 className="ser-text">Html</h3></div>
     <div className="box"> <IoLogoCss3 className="ser-icon"/><h3 className="ser-text">CSS</h3></div>
</div>
          

    </div>
</main>
  )
}

export default services
