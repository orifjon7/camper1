import React from 'react'
import {ButtonWrR} from '../Motor/style'
import {CarWrTextR} from '../Motor/style'
import firstCar from '../assests/first car.svg';
import {CarWrapperRight} from '../Motor/style'
import {CarWrapperR} from '../Motor/style'
import {StarText} from '../Motor/style'
import Star from '../assests/bx_bxs-star.svg';
import {CarColumn} from '../Motor/style'
import {StarTextS} from '../Motor/style'
import { tuning } from '../mock/tuning';
const VMenuComponent = () => {
  console.log(tuning)
  return (
    <CarWrapperRight>
          {tuning.map((value, index) =>{
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