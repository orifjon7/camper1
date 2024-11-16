import React from 'react'
import star from '../assests/bx_bxs-star.svg'
import { CarWrapper } from './style'
import {CarWrText} from './style'
import {StarText} from './style'
import {ButtonWr} from './style' 
import {CarWrapperAll} from './style'
import {Img1} from './style'
import { motordata } from "../mock/motor"
import { Link } from 'react-router-dom'


const HMenuComponent = () => {
  console.log(motordata)
  return (
    <div>
        <CarWrapperAll>
          {motordata.map((value, index) =>{
            return(
              <Link to={`/MotorDatial/${value.id}`} style={{textDecoration:'none'}}>
              <CarWrapper key={value.id}>
  <Img1><img src={value.car.photo} alt="img" /></Img1>
<h1>{value.car.name}</h1>
<CarWrText>
  <p>{value.car.company}</p>
  <StarText><img src={star} alt="star"/>
  <p>{value.car.rate}</p></StarText>
 
</CarWrText>
<h2>{value.car.cost}</h2>
<ButtonWr>
  <button>Order</button>
  <button>Compare</button>
</ButtonWr>
</CarWrapper></Link>
            )
          })}


</CarWrapperAll>
    </div>
  )
}

export default HMenuComponent