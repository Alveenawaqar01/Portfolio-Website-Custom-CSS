import Image from "next/image"
import "../Style/hero.css"

const hero = () => {
  return (
    <div className="header-container">
    <div className="header-box-container">
        {/*left */}
        <div>
    <Image src={"/pic.JPG"} width =  {200} height={200} className="header-image" alt = "profile"/>
        </div>
         {/*right */}
         <div className="hero-right-div">

            <h1 className="title-hero"> I am Alveena </h1>
            <h1 className="title-hero" > Graphic designer </h1>
            <p className="des-hero">
            As a passionate graphic designer I bring creativity and precision to every project
            I specialize in crafting visual experiences that communicate your brands message effectively
            </p>
             <button className="hero-button">HIRE ME</button>
            <h1> </h1>
         </div>
    </div>
    </div>
  )
}

export default hero
