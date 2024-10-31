import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeComponent from './home'
import MotorComponent from './Motor'
import CaravanComponent from './Caravan'
import TuningComponent from './Tuning'
import UsedComponent from './used-car'
import CampingComponent from './camping'
import FooterComponent from './Footer'
import NavbarComponent from './navbar'
import HomeRightComponent from '../src/Motor/index'
const RouterComponent = () => {
  return (
    <>
    <NavbarComponent/>
    <Routes>
        <Route path='/' element={<MotorComponent />} />
        <Route path='/Motor' element={<HomeRightComponent />} />
       <Route path='/Motor' element={<HomeComponent />} />
       <Route path='/Caravan' element={<CaravanComponent />}/>
       <Route path='/Tuning' element={<TuningComponent />} />
       <Route path='/Used-car' element={<UsedComponent />} />
       <Route path='/Camping-place' element={<CampingComponent />} />
    </Routes>
     <FooterComponent/>
     </>
  )
}

export default RouterComponent