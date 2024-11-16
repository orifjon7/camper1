import React from 'react'
import { Route, Routes } from 'react-router-dom';
import CaravanComponent from './caravan/Caravan';
import TuningComponent from './tuning/Tuning';
import UsedComponent from './Used Car/used-car';
import CampingPlaceComponent from './camping';
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
const RouterComponent = () => {
  return (
    <>
    <NavbarComponent/>
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

    </Routes>
     <FooterComponent/>
     </>
  )
}

export default RouterComponent