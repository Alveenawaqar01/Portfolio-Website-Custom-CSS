import "../Style/Contact.css"



const Contactpage = () => {
    return (
     
<main className="contact-main">

       <div className="form-container">
        <p className="contact-title">Contact Me</p>
    <form action="" className="form"> 
        <input type="text"placeholder="Enter your Text"/> 
        <input type="E-mail"placeholder="Enter your E-mail"/>
        <input className="msg" type="text"placeholder="Enter your Message"/>
    </form>
    <button className="button">Submit</button>
</div>

</main>



    )
  }
  
  export default Contactpage