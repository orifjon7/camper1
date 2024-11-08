import React from 'react'
import {ButtonWrR} from './style'
import {CarWrTextR} from './style'
import firstCar from '../assests/22 1-3.svg';
import {CarWrapperRight} from './style'
import {CarWrapperR} from './style'
import {StarText} from './style'
import Star from '../assests/bx_bxs-star.svg';
import {CarColumn} from './style'
import {StarTextS} from './style'
import { motordata } from '../mock/motor';
const VMenuComponent = () => {
  console.log(motordata)
  return (
    <CarWrapperRight>
          {motordata.map((value, index) =>{
  return (
    
<CarWrapperR key={value.id}>
     <img src={firstCar} alt="firstCar" />
     <div>
    <CarColumn>
    <CarWrTextR>
    <h1>{value.car.name}</h1>
    <p> {value.car.company}</p>
    </CarWrTextR>
    <StarText> <h2>{value.car.cost}</h2>
      <StarTextS><img src={Star} alt="star" width={10}/>
      <p>{value.car.rate}</p></StarTextS>
     </StarText></CarColumn>
    <ButtonWrR>
      <button>Order</button>
      <button>Compare</button>
   </ButtonWrR></div>
    </CarWrapperR>
   
  )
})}
  

</CarWrapperRight>
)
}
export default VMenuComponent