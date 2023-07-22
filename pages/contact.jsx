import React from "react";
import designs from "../styles/Contact.module.css";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/router";

function Contact() {
  const [animateFlag, setAnimateFlag] = useState(false);
  const [placeHolder, setPlaceHolder] = useState({
    user:"Username",
    email:"Email",
    pass:"Password"
  });
  const [input, setInput] = useState({
    user:false,
    email:false,
    pass:false
  })


  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    email: "",
    pass: "",
  });

  let x = 0;
  const email = /^[\w.%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };



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
  <div className={designs.inputbox1}>
<div className={designs.inputbox}>
  <input type="text" required="required"/>
  <span >Firstname</span>
</div>


<div className={designs.inputbox}>
  <input type="text" required="required"/>
  <span >Lastname</span>
</div>



<div className={designs.inputbox}>
  <input type="text" required="required"/>
  <span >Email</span>
</div>


<div className={designs.inputbox}>
  <input type="text" required="required"/>
  <span >Firstname</span>
</div>

 
  </div>

</div>

</section>
 



</>
    )
}

export default Contact;

