import React from "react";
import designs from "../styles/Contact.module.css";


function Contact() {



    return (
      <>
 



<section className={designs.containers}>
  <div className={designs.containers2}>
    <h2 className={designs.containers5}>Contact Us</h2>
    <p className={designs.containers6}>We're open for any suggestion  or just to have a chat</p>
  </div>


  <div className={designs.container3}>
 
  <div className={designs.containers3}>
 
    <div className={designs.box}>
      <div className={designs.icons}>
        <img src="/location.png" alt="noimage" className={designs.ram}/>
      </div>
      <div className={designs.text}>
        <h3 className={designs.text2}>Address</h3>
        <p className={designs.text3}>198 West 21th <br/>Street, Suite 721 New York<br/> NY 10016</p>
      </div>
    </div>


    <div className={designs.box}>
      <div className={designs.icons}>
      <img src="/phone.png" alt="noimage" className={designs.ram}/>
      </div>
      <div className={designs.text}>
        <h3 className={designs.text2}>PHONE </h3>
        <p className={designs.text3}>507-475-0094</p>
      </div>
    </div>




    <div className={designs.box}>
      <div className={designs.icons}>
      <img src="/email2.png" className={designs.ram}/>
      </div>
      <div className={designs.text}>
        <h3 className={designs.text2}>Email</h3>
        <p className={designs.text3}>@yoursite.com</p>
      </div>
    </div>

  </div>

<div className={designs.form}>
  <form className={designs.forms}>
    <h2 className={designs.form2}>Send message</h2>
    <div className={designs.input}>

  
    <input  className={designs.input3}type="text" name="" required="required"></input>
      <span className={designs.input4}>Username</span>
      </div>


    
    
    <div className={designs.input}>
      <input  className={designs.input3}type="text" name="" required="required"></input>
      <span className={designs.input4}>Email</span>
      </div>
     




    <div className={designs.input1}>
      <textarea  name="" id="message" cols="30" rows="10" className={designs.input10}/>
      <span className={designs.input7}>Type Your Message</span>
   
      </div>

     
<input  className={designs.input00}type="submit" value="Submit" required="required"></input>
   
  </form>
</div>
</div>

</section>
 



</>
    )
}

export default Contact;

