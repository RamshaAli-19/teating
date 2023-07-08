import React from "react";
import Design from "../styles/Villa7.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";


import { Pagination ,Autoplay } from "swiper";





function Villa7(){

       
  
      
    
    return(
        <>
        

<div className={Design.pic3}>
<img
          src="/bed-icon.png"
          alt="About1"
          className={Design.imagess}
          
        />

     
</div>


<div className={Design.pic2}>
   <h1 className={Design.pics4}>
      Our Guest Loves Us
   </h1>
   
 

</div>


<div className={Design.swiper}>



<Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 3,
            spaceBetween: 50,
          }
      
        }}


        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >


<div className={Design.container02}>
<SwiperSlide>
<div className={Design.container03}>
<div className={Design.container050}>
<img
          src="/s.png"
          alt="About2"
          className={Design.imagess00}
          
        />

<p className={Design.container01} >
Incident deleniti blanditis quas aperiam recusandae consillo ullam quibusdam cum libero illo 
repell endus!
</p>
</div>
<div className={Design.container052}>
<h3 className={Design.container09}>
  David Alone
</h3>
<p className={Design.container000} >
CEO & Founder
</p>
</div>
</div>

     
        </SwiperSlide>
      
<SwiperSlide>
<div className={Design.container03}>
<div className={Design.container050}>


<img
          src="/s.png"
          alt="About2"
          className={Design.imagess00}
          
        />

<p className={Design.container01} >
Incident deleniti blanditis quas aperiam recusandae consillo ullam quibusdam cum libero illo 
repell endus!
</p>
</div>
<div className={Design.container052}>
<h3 className={Design.container09}>
  David Alone
</h3>

<p className={Design.container000} >
CEO & Founder
</p>
</div>
</div>
        
    

      
  
        </SwiperSlide>








      
        <SwiperSlide>
        <div className={Design.container03}>
<div className={Design.container050}>


<img
          src="/s.png"
          alt="About2"
          className={Design.imagess00}
          
        />

<p className={Design.container01} >
Incident deleniti blanditis quas aperiam recusandae consillo ullam quibusdam cum libero illo 
repell endus!
</p>
</div>
<div className={Design.container052}>
<h3 className={Design.container09}>
  David Alone
</h3>

<p className={Design.container000} >
CEO & Founder
</p>
</div>
        </div>
    



</SwiperSlide>

<SwiperSlide>
<div className={Design.container03}>
<div className={Design.container050}>


<img
          src="/s.png"
          alt="About2"
          className={Design.imagess00}
          
        />

<p className={Design.container01} >
Incident deleniti blanditis quas aperiam recusandae consillo ullam quibusdam cum libero illo 
repell endus!
</p>
</div>
<div className={Design.container052}>
<h3 className={Design.container09}>
  David Alone
</h3>

<p className={Design.container000} >
CEO & Founder
</p>
</div>
  </div>      
    



</SwiperSlide>

  
      
    
  

        


        
      </div>
 
       
        
     
      
    
  

        


        
 
 
       
        
     

       
        

</Swiper>
</div>
</>

    )
}
export default Villa7;