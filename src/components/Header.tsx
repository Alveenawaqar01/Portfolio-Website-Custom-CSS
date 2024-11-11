import Link from "next/link"
import "../Style/header.css"


import React from 'react'

const Header = () => {
  return (
    <div className="header">
          {/* left*/}
          <div>
            <h1 className="logo">Alveena</h1>
          </div>
           {/*right */}
           <div  className="header-right-div">
            <ul className="header-links">
                <li>
                    <Link className= "nav-links" href={"/"}>Home</Link>
                </li>
                <li>
                    <Link   className= "nav-links" href={"/About"}>About</Link>
                </li>
                <li>
                    <Link  className= "nav-links" href={"/Contact"}>Contact</Link>
                </li>
            </ul>
           </div>
    </div>
  )
}

export default Header
