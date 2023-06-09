import React from "react";
import Design from "../styles/Villa7.module.css";
import { useState } from "react";
import { motion } from "framer-motion";




function Villa7(){


  
      
      const [animeflag, setAnimeFlag] = useState(false);
      const variant = {
        hidden: {
          opacity: 0,
        },
        animate: {
          opacity: 1,
          repeatCount: 0,
          transition: {
            duration: 0.2,
            repeatCount: 0,
            staggerChildren: 0.1,
            repeat: 0,
          },
        },
      };
      const childVariant = {
        hidden: {
          opacity: 0,
          y: "10rem",
        },
        animate: {
          opacity: 1,
          y: "0rem",
          repeatCount: 0,
          transition: {
            type: "spring",
            stiffness: 150,
            damping: 12,
            duration: 0.1,
            repeat: 0,
          },
        },
      };
    return(
        <>

<motion.div
        className={Design.container}
        onViewportEnter={() => {
          setAnimeFlag(true);
        }}
        variants={variant}
        initial={"hidden"}
        animate={animeflag ? "animate" : "hidden"}
        whileInView={{ repeatCount: 0 }}
      >
      
        <div className={Design.container10} variants={childVariant}>
    <motion.h1 className={Design.container1} variants={childVariant}>
        What People Say About Us
    </motion.h1>
    </div>
    
    <div className={Design.container9} variants={childVariant}>
    <div className={Design.container11} variants={childVariant}>
    
<motion.h1 className={Design.container2} variants={childVariant}>
    Happy Clients
</motion.h1>
<motion.p className={Design.container3} variants={childVariant}>
    Buying meddicine online is a key to the Safety of our <br/>
    country while the pandemic is spreading all around.<br/>
    Stay safe and buy online!
</motion.p>
< motion.img   src="/Uncle.png"
          alt="About" className={Design.imagess}    variants={childVariant}/>
<motion.h5 className={Design.contain} variants={childVariant}>
   Sam Hardin
    <br/>
    New york
</motion.h5>

</div>


<div className={Design.container11} variants={childVariant}>
    
<motion.h1 className={Design.container13} variants={childVariant}>
    Happy Clients
</motion.h1>
<motion.p  className={Design.container14} variants={childVariant}>
    Buying meddicine online is a key to the Safety of our <br/>
    country while the pandemic is spreading all around.<br/>
    Stay safe and buy online!
</motion.p>
<motion.img  src="/Uncle.png"
          alt="About"  className={Design.imagess1} variants={childVariant}/>
<motion.h5 className={Design.contain2} variants={childVariant}>
  Sam hardin
    <br/>
    New york
</motion.h5>

</div>


</div>
</motion.div>
</>

    )
}
export default Villa7;