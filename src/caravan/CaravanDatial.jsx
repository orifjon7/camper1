import React from 'react'

import { useParams } from 'react-router-dom';
import { BackgroundImage } from '../Motor/MotorDatialStyle';
import {DatailButton} from '../Motor/Datail.Button'
import image2 from '../Motor/Motor Rasm/image 7.svg'
import image3 from '../Motor/Motor Rasm/image 9.svg'
import {DatailWrapper} from '../Motor/MotorDatialStyle'
import {DatailContainer} from '../Motor/MotorDatialStyle'
import {AllWrapper} from '../Motor/MotorDatialStyle'
import image4 from '../Motor/Motor Rasm/image 6.svg'
import image5 from '../Motor/Motor Rasm/image 8.svg'
import image6 from '../Motor/Motor Rasm/image 10.svg'
import {DatailCar} from '../Motor/MotorDatialStyle'
import {DatailFlex} from '../Motor/MotorDatialStyle'
import {DatailImg } from '../Motor/MotorDatialStyle'
import {DatailText} from '../Motor/MotorDatialStyle'
import {DatailId} from '../Motor/MotorDatialStyle'
import {DatailData} from '../Motor/MotorDatialStyle'
import TabPanel1 from '../Motor/TabsMenu'
import { caravandata } from '../mock/caravan';


const MotorDatial = () => {

   let{id} = useParams();
  

   const dataById = caravandata.find((data) => data.id === parseInt(id) )
   
  return ( 
    <>
   <BackgroundImage>
<h1>{dataById.car.name}</h1>
<DatailButton/>
    </BackgroundImage>
    <AllWrapper>
    <DatailWrapper>
      <DatailImg><img src={dataById.car.photo} alt="image1" /></DatailImg>
      <DatailCar> <DatailFlex> <h1>{dataById.car.name}</h1>
<h2>{dataById.car.cost}</h2>
</DatailFlex>

<DatailData>
<DatailText><h4>Company</h4>
<h4>People</h4>
<h4>License type   </h4>
      </DatailText>
      <DatailId>
        <p>{dataById.car.company}</p>
        <p>{dataById.car.people}</p>
        <p>{dataById.car.license}</p>
      </DatailId>
      </DatailData>
    </DatailCar>
       </DatailWrapper>
       <DatailWrapper>
      <DatailContainer> <h1>Comfort</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum <br />nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus,<br /> id in proin sed proin iaculis mi. Turpis ac ut metus, amet, pulvinar. <br />
       Eget amet dictum luctus quis molestie tellus vitae.Lorem ipsum <br />dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna <br /> sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin <br /> iaculis mi.</p></DatailContainer>
       <DatailContainer> <img src={image4} alt="image4" /></DatailContainer>
       </DatailWrapper>
    <DatailWrapper>
    <DatailContainer> <img src={image2} alt="image2" /> </DatailContainer>
    <DatailContainer><h1>Tidying away is child`s play!</h1> 
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum <br />nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus,<br /> id in proin sed proin iaculis mi. Turpis ac ut metus, amet, pulvinar. <br />
      Eget amet dictum luctus quis molestie tellus vitae.Lorem ipsum <br />dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna <br /> sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin <br /> iaculis mi.</p>
      </DatailContainer>
          </DatailWrapper>
   <DatailWrapper>
   <DatailContainer> <h1>Ventilated , Lit up</h1>
      <p>In our vans and motorhomes, all our body lighting is 100% LED: a <br /> guarantee of energy efficiency and durability. <br />
As for ventilation, we also often offer double ventilation in the <br /> bathroom (Skylight + window), which is very popular with our <br /> customers…
Camper relies on legendary Seitz windows. They offer the best <br /> insulation and are also the easiest to use and safest because they <br /> can`t be removed from the outside.										
					</p></DatailContainer>
  <DatailContainer><img src={image5} alt="image5" /></DatailContainer></DatailWrapper>
  <DatailWrapper>
      <DatailContainer><img src={image3} alt="image3" /></DatailContainer>
      <DatailContainer><h1>Easy access</h1>
      <p>We add little touches that your joints will thank you for… <br />
All our motorhomes are equipped with a built-in step to facilitate <br /> entry to the vehicle <br />
All our vans are equipped with an electric step.
      </p>
      </DatailContainer>
      </DatailWrapper>
      <DatailWrapper>
      <DatailContainer> <h1>Heating when driving</h1>
   <p>Fuel heating is now very popular in the industry, but this was not <br /> always the case; Camper (once again) led the way in this area over <br /> 15 years ago. <br />
   One of the advantages it offers is that it can heat up your vehicle <br /> while you drive, for a more comfortable arrival.</p> <br />
   <DatailButton/>
   </DatailContainer>
         
      <DatailContainer><img src={image6} alt="image6" /></DatailContainer> </DatailWrapper>
    
    </AllWrapper>
    <TabPanel1/>
    
    </>
  )
}

export default MotorDatial