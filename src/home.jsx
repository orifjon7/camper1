import React from 'react'

import { Carousel } from "react-responsive-carousel";
import Car1 from './assests/MotorBg.png';
import Car2 from './assests/CaravanBg.png';
import Car3 from './assests/TuningCar.png';
import Car4 from './assests/UsedBg.png'
const HomeComponent = () => {
  return (
   
      <Carousel autoPlay>
                <div>
                    <img src={Car1}  alt="Car1"/>
                    <p className="legend">Car 1</p>
                </div>
                <div>
                    <img src={Car2} alt="Car2"/>
                    <p className="legend">Car 2</p>
                </div>
                <div>
                    <img src={Car3} alt="Car3"/>
                    <p className="legend">Car 3</p>
                </div>
                <div>
                    <img src={Car4} alt="Car4"/>
                    <p className="legend">Car 3</p>
                </div>
                
               
             
            </Carousel>
   
  )
}

export default HomeComponent