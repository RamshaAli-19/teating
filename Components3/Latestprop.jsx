import React from "react";
import designsd from "../styles/Latestprop.module.css";
import { motion } from "framer-motion";
import { useState } from "react";

const  Latestprop=()=> {
  const [cardhead, setCardHead] = useState(false);
  const [cardflag, setCardFlag] = useState(false);

const cardParent = {
  hidden: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.2,
      staggerChildren: 0.2,
      repeat: 0,
    },
  },
};

const cardChild = {
  hidden: {
    opacity: 0,
    y: "5rem",
  },
  animate: {
    opacity: 1,
    y: "0rem",
    transition: {
      type: "spring",
      stiffness: 150,
      duration: 0.15,
      damping: 13,
      repeat: 0,
    },
  },
};
 

    return (
        <>
        <div className={designsd.ptHead1}>
        <motion.h1
          onViewportEnter={() => setCardHead(true)}
          initial={{
            opacity: cardhead ? 1 : 0,
            y: cardhead ? "0rem" : "5rem",
          }}
          whileInView={{
            y: "0rem",
            opacity: 1,
          }}
          transition={{
            type: "spring",
            duration: 0.2,
            stiffness: 100,
            damping: 11,
          }}
          className={designsd.ptText1}
        >
         OUR SERVICES
        </motion.h1>
        <p className={designsd.para}
>
Let us help you make your dreams a reality.
  </p>      </div>

 
  
   
        </>
        );
      }
      export default Latestprop;