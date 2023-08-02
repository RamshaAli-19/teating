import React from "react";
import  stylees from "../styles/Services.module.css";
const Services=() => {
    return(
        <>
<div className={stylees.headings}>
    <h1 className={stylees.title}>
      SPECIAL SERVICES
    </h1>
</div>
<div className={stylees.titles2}>
    <div className={stylees.images2}>
    <img
             src="/developer (1).png"
             alt="About2"
             className={stylees.img}
             
           />
           <h1 className={stylees.txt}>
            Development
           </h1>
    </div>




    <div className={stylees.images2}>
    <img
             src="/economy.png"
             alt="About2"
             className={stylees.img}
             
           />
           <h1 className={stylees.txt}>
           Sales Marketing
           </h1>
    </div>






    <div className={stylees.images2}>
    <img
             src="/property.png"
             alt="About2"
             className={stylees.img}
             
           />
           <h1 className={stylees.txt}>
           Brokerage
           </h1>
    </div>




    <div className={stylees.images2}>
    <img
             src="/manager.png"
             alt="About2"
             className={stylees.img}
             
           />
           <h1 className={stylees.txt}>
           Property Management
           </h1>
    </div>
</div>

        </>
    )
}
export default Services