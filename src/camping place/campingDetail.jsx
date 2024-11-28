import React from 'react'
import { campingPlaces } from '../mock/camping';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { CampingWr } from './CampingStyle'
import {CamperText} from './CampingStyle'
import locationIcon from './campingIcon/carbon_location.svg'
import phoneIcon from './campingIcon/carbon_phone.svg'
import clockIcon from './campingIcon/bi_clock.svg'
import websiteIcon from './campingIcon/codicon_home.svg'
import {PlaceNumber} from './CampingStyle'
import {PlaceNumberLeft} from './CampingStyle'
import {PlaceNumberRight} from './CampingStyle'
import { Description } from './CampingStyle'
import KakaoMap from '../Kakao Map/index'
const CampingDetail = () => {
    let{id} = useParams();
    const dataById=campingPlaces.find((data)=>data.id===parseInt(id));
  return (
    <div style={{background: '#FAFAFA',padding:'30px 65px'}}>
    <CampingWr>
    {campingPlaces.map((value, index) => {
            return ( 
                <Link to={`/campingDetail/${value.id}`} style={{textDecoration:'none'}}> 
                <img src={value.campingPlace.photo} alt="camping" />
                </Link>
               );
        })
    }
</CampingWr>
<CamperText>
<h1>{dataById.campingPlace.name}</h1>
<div className='location'>
        <p>Location</p>
        <button>Copy map</button>
    </div>
</CamperText>
<PlaceNumber>
    <PlaceNumberLeft>
        <div className='location2'>
            <img src={locationIcon} alt="location-icon" />
            <p style={{marginLeft:'1px'}}>{dataById.campingPlace.city}</p>
        </div>
        <div className='location2' style={{marginTop:'-5px'}}>
            <img src={phoneIcon} alt="phone-icon" />
            <p>{dataById.campingPlace.phone_number}</p>
        </div>
    </PlaceNumberLeft>
    <PlaceNumberRight>
    <div className='location2'>
            <img src={clockIcon} alt="location-icon" />
            <p style={{marginLeft:'1.5px'}}>from <span style={{color:'#FF7A00'}}>{dataById.campingPlace.working_hour.from}</span> to <span style={{color:'#FF7A00'}}>{dataById.campingPlace.working_hour.to}</span></p>
        </div>
        <div className='location2' style={{marginTop:'-5px'}}>
            <img src={websiteIcon} alt="phone-icon" />
            <p>{dataById.campingPlace.location}</p>
        </div>
    </PlaceNumberRight>
</PlaceNumber>
<Description>
    <h1>Description</h1>
    <p>{dataById.campingPlace.description}</p>
</Description>
<KakaoMap/>
</div>
  )
}

export default CampingDetail