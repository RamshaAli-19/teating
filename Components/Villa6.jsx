import React from "react";
import design from "../styles/Villa6.module.css";


import { useState } from "react";
import { motion } from "framer-motion";


function Villa6(){
   
    const [flag, setFlag] = useState(false);
    
return(
   <>
    < motion.div className={design.society}
    onViewportEnter={()=>setFlag(true)}
    initial={{
        opacity:0,
        y:60
    }}
 animate={
    flag?{
        opacity:1,
        y:0,
    }
    :{
        opacity:0,
        y:60
    }

}
transition={{
    type:"spring",
    duration:2,
}

}

   
 
    
   >
        <img src="/Rectangle70.png" alt="base" className={design.society3}  />
        <div className={design.society1} >
        <img src="/Rectangle71.png" alt="base" className={design.society1} />
        </div>
        <div className={design.society2}>
        <img src="/Rectangle72.png" alt="base" className={design.society6} />
        </div>
        <div className={design.society3} >
        <img src="/Rectangle73.png" alt="base" className={design.society7} />
        </div>
   </motion.div>
</>
)
}
export default Villa6;

