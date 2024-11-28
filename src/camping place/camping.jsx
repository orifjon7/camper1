import React from 'react'
import {CampingPlace, CampingSites, SitesBox, SitesBackgroundImg, } from './CampingStyle'

import { campingPlaces } from '../mock/camping'
import { Link } from 'react-router-dom'
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
    <Link to={`/campingPlaces/${value.id}`} style={{textDecoration:'none'}}>
<SitesBox key={value.id}>
<SitesBackgroundImg><img src={value.campingPlace.photo} alt="sites-icon" /></SitesBackgroundImg>
  <h3>{value.campingPlace.name}</h3>
  <p>{value.campingPlace.location}</p>
</SitesBox></Link>

) 
}
)}

</CampingSites>
    </>
  )
}

export default CampingPlaceComponent