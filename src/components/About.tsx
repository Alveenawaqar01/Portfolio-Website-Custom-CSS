import Image from "next/image"
import "../Style/hero.css"
import "../Style/About.css"
import { FaBehanceSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa"
import Link from "next/link"


const Aboutpage = () => {
  return (
    <div className="header-container">
    <div className="header-box-container">
        {/*left */}
        <div>
    <Image src={"/pic-02.JPG"} width =  
    {200}
     height={200} className="header-image" alt = "profile"/>
    <div className="social-icon" >
      <Link href= "https://www.linkedin.com/in/alveena-2086b42b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="-blank" rel="noopener noreferrer">  <FaLinkedin className="s-icon1" /></Link>
      <Link href= "https://www.behance.net/alveenawaqar" target="_blank" rel="noopener noreferrer">   <FaBehanceSquare className="s-icon2"/> </Link>
      <Link href= "https://www.instagram.com/kalveena786/profilecard/?igsh=MTFtaGJoNGU3cTM5MQ" target="_blank" rel="noopener noreferrer">   <FaInstagramSquare className="s-icon3"/> </Link>
    
      
      
    </div>

        </div>
         {/*right */}
         <div className="hero-right-div">

            <h1 className="title-hero">About Me</h1>
  <p className="des-hero">I m graphic designer with a passion for UI/UX design and AI development After mastering graphic design
    I decided to expand my skills by exploring user centered design and AI technology
    My goal is to create intuitive innovative digital experiences I m now focused on creating user friendly and innovative digital 
    experiences using the latest technology
 </p>
             
            <h1> </h1>
         </div>
    </div>
    </div>
  )
}
export default Aboutpage