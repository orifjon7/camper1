import React from 'react'
import {ButtonWrR} from '../Motor/style'
import {CarWrTextR} from '../Motor/style'
import {CarWrapperRight} from '../Motor/style'
import {CarWrapperR} from '../Motor/style'
import {StarText} from '../Motor/style'
import Star from '../assests/bx_bxs-star.svg';
import {CarColumn} from '../Motor/style'
import {StarTextS} from '../Motor/style'
import { Link } from 'react-router-dom';
import { usedCar } from '../mock/usedcar';
import {Img1} from '../Motor/style'
const VMenuComponent = () => {
  console.log(usedCar)
  return (
    <CarWrapperRight>
          {usedCar.map((value, index) =>{
  return (
    <Link to={`/usedCar/${value.id}`} style={{textDecoration:'none'}}>
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