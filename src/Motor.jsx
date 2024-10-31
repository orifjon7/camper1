import React from 'react'

import { Carousel } from "react-responsive-carousel";
import Car1 from './assests/first car.svg';
import Car2 from './assests/ccar.svg';
import Car3 from './assests/c a-2.svg';
const MotorComponent = () => {
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
                
               
             
            </Carousel>
   
  )
}

export default MotorComponent