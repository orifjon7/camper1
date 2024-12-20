import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import CaravanComponent from './caravan/Caravan';
import TuningComponent from './tuning/Tuning';
import UsedComponent from './Used Car/used-car';
import CampingPlaceComponent from './camping place/camping';
import FooterComponent from './Footer';
import NavbarComponent from './navbar';
import MotorComponent from '../src/Motor/index';
import HomeComponent from './Home';
import MotorDatial from './Motor/MotorDatial';
import DatailButton from './Motor/Datail.Button'
import FAQLists from './Motor/FAQList';
import TuningDatial from './tuning/TuningDatial';
import CaravanDatial from './caravan/CaravanDatial'
import UsedCarDatial from './Used Car/UsedCarDatial'
import LoginComponent from './log in/login'
import RegistrateComponent from './log in/Registrate'
import TabsMenu1 from './Motor/TabsMenu'
import CampingDetail from './camping place/campingDetail';
import KakaoMap from './Kakao Map/index'
const RouterComponent = () => {
  let location = useLocation();

  const hiddenNavbar =
  location.pathname !=="/login" && location.pathname !=="/registrate";

  return (
    <>
   {hiddenNavbar && <NavbarComponent/> }
  
    <Routes>
        <Route path='/' element={<HomeComponent />} />
        <Route path='/Motor' element={<MotorComponent />} />
       <Route path='/Caravan' element={<CaravanComponent />}/>
       <Route path='/Tuning' element={<TuningComponent />} />
       <Route path='/UsedCar' element={<UsedComponent />} />
       <Route path='/CampingPlace' element={<CampingPlaceComponent />} />
       <Route path = '/MotorDatial/:id' element={<MotorDatial />}/>
       <Route path = '/TuningDatial/:id' element={<TuningDatial />}/>
       <Route path = '/CaravanDatial/:id' element={<CaravanDatial />}/>
       <Route path = '/usedCar/:id' element={<UsedCarDatial />}/>
       <Route path = '/DatailButton' element= {<DatailButton/>}/>
  <Route path = '/FAQList' element={<FAQLists/>}/>
<Route path = '/login' element={<LoginComponent/>}/>
<Route path = '/registrate' element={<RegistrateComponent/>}/>
<Route path = '/TabsMenu1' element={<TabsMenu1/>}/>
<Route path = '/campingPlaces/:id' element={<CampingDetail />}/>
<Route path = '/campingDetail/:id' element={<CampingDetail />}/>
<Route path = '/KakaoMap' element={<KakaoMap/>}/>
    </Routes>
    {hiddenNavbar && <FooterComponent/> }
  
     </>
  )
}

export default RouterComponent