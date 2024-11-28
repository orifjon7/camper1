import React, {useState} from 'react'
import star from '../assests/bx_bxs-star.svg'
import { CarWrapper } from '../Motor/style'
import {CarWrText} from '../Motor/style'
import {StarText} from '../Motor/style'
import {ButtonWr} from '../Motor/style' 
import {CarWrapperAll} from '../Motor/style'
import {Img1} from '../Motor/style'
import { caravandata } from "../mock/caravan"
import { Link } from 'react-router-dom'
import {InputWr} from '../Motor/style'
const HMenuComponent = () => {
  console.log( caravandata )
  const [SearchData, setSearchData]  = useState("")
  
const searchDataList = 
caravandata.filter((data)=>data.car.name.includes(SearchData))
  return (
      <div>
        <InputWr><input type="text" placeholder='FIND YOUR CAMPER' 
value={SearchData}
onChange={(e)=>setSearchData(e.target.value)}
/>
</InputWr>
          <CarWrapperAll>
            {searchDataList.map((value, index) =>{
              return(
                <Link to={`/CaravanDatial/${value.id}`} style={{textDecoration:'none'}}>
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