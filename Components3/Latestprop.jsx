import React from "react";
import designsd from "../styles/Latestprop.module.css";
import { motion } from "framer-motion";
import { useState } from "react";
const  Latestprop=()=> {
  const [animeflag, setAnimeFlag] = useState(false);
  const variant = {
    hidden: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      repeatCount: 0,
      transition: {
        duration: 0.1,
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
        stiffness: 120,
        damping: 10,
        duration: 0.2,
        repeat: 0,
      },
    },
  };

    return (
        <>
      <div className={designsd.team}>
        <div className={designsd.container3}>
            <div className={designsd.rows}>
            <div className={designsd.rows33}>
            <div className={designsd.rows334}>
                <h1 className={designsd.titles}>
                    Latest Property
                </h1>
                </div>
                </div>


<div className={designsd.titles22}>
    <div className={designsd.btn}>
        <a href="#" className={designsd.btn2}>
        <img
             src="/y.png.png"
             alt="About2"
             className={designsd.pics9901002}
             
           />
           All Counselor

        </a>
    </div>

</div>


            </div>
        </div>
      </div>

      <motion.div className={designsd.images340}onViewportEnter={() => {
          setAnimeFlag(true);
        }}
        variants={variant}
        initial={"hidden"}
        animate={animeflag ? "animate" : "hidden"}>
<motion.div className={designsd.images34 } variants={childVariant}>
       
 
<img
             src="/cat-2.jpg"
             alt="About2"
             className={designsd.villas} 
             
           />
           <div className={designsd.images35}>
           <h1 className={designsd.imgg}>Villa</h1>
           <h2 className={designsd.imgg2}>230 Properties</h2>
           </div>



</motion.div>

<motion.div className={designsd.images34}variants={childVariant}>

<img
             src="/cat-3.jpg"
             alt="About2"
             className={designsd.villas}
             
           />
           <div className={designsd.images35}>
           <h1 className={designsd.imgg}>House</h1>
           <h2 className={designsd.imgg2}>230 Properties</h2>
           </div>



</motion.div>

<motion.div className={designsd.images34}variants={childVariant}>

<img
             src="/prop3.jpg.jpg"
             alt="About2"
             className={designsd.villas}
             
           />
           <div className={designsd.images35}>
           <h1 className={designsd.imgg}>Office</h1>
           <h2 className={designsd.imgg2}>230 Properties</h2>
           </div>



</motion.div>



       


</motion.div>
   


        </>
        );
      }
      export default Latestprop;