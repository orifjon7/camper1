import React from 'react'
import {CampingPlace, CampingSites, SitesBox, SitesBackgroundImg, } from './CampingStyle'

import { campingPlaces } from './mock/camping'

const CampingPlaceComponent = () => {
  console.log(campingPlaces)
  return (
    <>
    <CampingPlace>
    <p>Home / Camping place</p>
     <h1>Camping places</h1>
    </CampingPlace>
    <CampingSites>
{campingPlaces.map((value,index) =>{
  return(
<SitesBox key={value.id}>
<SitesBackgroundImg><img src={value.place.photo} alt="sites-icon" /></SitesBackgroundImg>
  <h3>{value.place.name}</h3>
  <p>{value.place.location}</p>
</SitesBox>

) 
}
)}

</CampingSites>
    </>
  )
}

export default CampingPlaceComponent