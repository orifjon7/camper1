import React from 'react'
import {CampingPlace} from './CampingStyle'
import { CampingPlaces} from './CampingStyle'
import place1 from './assests/image 11.svg'
import place2 from './assests/image 12.svg'
import place3 from './assests/image 13.svg'
const CampingPlaceComponent = () => {
  return (
    <>
    <CampingPlace>
    <p>Home / Camping place</p>
     <h1>Camping places</h1>
    </CampingPlace>
<CampingPlaces>
<div><img src={place1} alt="place1" />
<h1>Camping place name</h1>
<p>Location</p></div>
<div><img src={place2} alt="place2" />
<h1>Camping place name</h1>
<p>Location</p></div>
<div><img src={place3} alt="place3" />
<h1>Camping place name</h1>
<p>Location</p></div>
</ CampingPlaces>
<CampingPlaces>
<div><img src={place1} alt="place1" />
<h1>Camping place name</h1>
<p>Location</p></div>
<div><img src={place2} alt="place2" />
<h1>Camping place name</h1>
<p>Location</p></div>
<div><img src={place3} alt="place3" />
<h1>Camping place name</h1>
<p>Location</p></div>
</ CampingPlaces>
<CampingPlaces>
<div><img src={place1} alt="place1" />
<h1>Camping place name</h1>
<p>Location</p></div>
<div><img src={place2} alt="place2" />
<h1>Camping place name</h1>
<p>Location</p></div>
<div><img src={place3} alt="place3" />
<h1>Camping place name</h1>
<p>Location</p></div>
</ CampingPlaces>
<CampingPlaces>
<div><img src={place1} alt="place1" />
<h1>Camping place name</h1>
<p>Location</p></div>
<div><img src={place2} alt="place2" />
<h1>Camping place name</h1>
<p>Location</p></div>
<div><img src={place3} alt="place3" />
<h1>Camping place name</h1>
<p>Location</p></div>
</ CampingPlaces>
    </>
  )
}

export default CampingPlaceComponent