import React from 'react'
import { Carousel } from "react-responsive-carousel";
import Car1 from './modal rasm/AIimage1.jpg';
import Car2 from './modal rasm/AIimage12.jpg';
import Car3 from './modal rasm/AIimage3.jpg';
import Car4 from './modal rasm/AIimage4.jpg'
import BasicModal from './modal'
import MultiCarousel from './ MultiCarousel'
import{Caruselimage} from './HomeStyle'


const HomeComponent = () => {
  return (
   <>
      <Carousel autoPlay transitionTime="1000" interval="4000" showThumbs={false} infiniteLoop={true} showStatus={false}>
                <Caruselimage>
                    <img src={Car1}  alt="Car1"/>
                   
                </Caruselimage>
                <Caruselimage>
                    <img src={Car2} alt="Car2"/>
                  
                </Caruselimage>
                <Caruselimage>
                    <img src={Car3} alt="Car3"/>
                   
                </Caruselimage>
                <Caruselimage>
                    <img src={Car4} alt="Car4"/>
                    
                </Caruselimage>
                
               
             
            </Carousel>
      <MultiCarousel/>
      <BasicModal/>

            </>
  )
}

export default HomeComponent