import React from 'react'
import { Route, Routes } from 'react-router-dom';
import CaravanComponent from './Caravan';
import TuningComponent from './Tuning';
import UsedComponent from './used-car';
import CampingPlaceComponent from './camping';
import FooterComponent from './Footer';
import NavbarComponent from './navbar';
import MotorComponent from '../src/Motor/index';
import HomeComponent from './Home';
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
    </Routes>
     <FooterComponent/>
     </>
  )
}

export default RouterComponent