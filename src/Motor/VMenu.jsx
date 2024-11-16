import React from 'react'
import {ButtonWrR} from './style'
import {CarWrTextR} from './style'
import {CarWrapperRight} from './style'
import {CarWrapperR} from './style'
import {StarText} from './style'
import Star from '../assests/bx_bxs-star.svg';
import {CarColumn} from './style'
import {StarTextS} from './style'
import { motordata } from '../mock/motor';
import { Link } from 'react-router-dom';
import {Img1} from './style'
const VMenuComponent = () => {
  console.log(motordata)
  return (
    <CarWrapperRight>
          {motordata.map((value, index) =>{
  return (
    <Link to={`/MotorDatial/${value.id}`} style={{textDecoration:'none'}}>
<CarWrapperR key={value.id}>
    <Img1> <img src={value.car.photo} alt="firstCar" /></Img1>
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
    </CarWrapperR></Link>
   
  )
})}
  

</CarWrapperRight>
)
}
export default VMenuComponent