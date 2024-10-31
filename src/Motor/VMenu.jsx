import React from 'react'
import {ButtonWrR} from './style'
import {CarWrTextR} from './style'
import firstCar from '../assests/22 1-3.svg';
import {CarWrapperRight} from './style'
import {CarWrapperR} from './style'
import {StarText} from './style'
import Star from '../assests/bx_bxs-star.svg';
import {ButtonR} from './style'
const VMenuComponent = () => {
  return (
    
    <CarWrapperRight>
    <CarWrapperR>
     <img src={firstCar} alt="firstCar" />
    <h1>Name of the car</h1>
    <CarWrTextR>
      <p>Brand name</p>
      <StarText><img src={Star} alt="star"/>
      <p>5.3</p></StarText>
      
    </CarWrTextR>
    <h2>250 $</h2>
    <ButtonWrR>
      <ButtonR>Order</ButtonR>
      <ButtonR>Compare</ButtonR>
   </ButtonWrR>
    </CarWrapperR>
    </CarWrapperRight>
  )
}

export default VMenuComponent