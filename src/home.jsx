import React from 'react'

import { HomeWr } from './homeStyle'
import { SideBar } from './homeStyle'
import {SideText} from './homeStyle'
import { CheckBox } from './homeStyle'
import icon from './assests/grommet-icons_form-next.svg'
import { Button } from './homeStyle'
import car1 from './assests/Rectangle 705.svg'
import car2 from './assests/c a.svg'
import car3 from './assests/22 1.svg'
import {CarWr} from './homeStyle'
import {LeftBar} from './homeStyle'
import {HomeWrapper} from './homeStyle'
import {LeftBarText } from './homeStyle'
import icon2 from './assests/clarity_grid-view-solid.svg'
import icon3 from './assests/ic_round-view-list.svg'
import {RightBarText} from  './homeStyle'


const HomeComponent = () => {
  return (
    <>
    <div>
    <HomeWr>
     <p>Home / Motors</p>
     <h3>Our ranges</h3>
     <h1>Motors</h1>
    </HomeWr>

    <HomeWrapper>
<SideBar>
<p>Cost of car</p>
<SideText>
  <div><p>from</p>
  <input type="text" /></div>
  <div><p>to</p>
  <input type="text" /></div>
</SideText>
<div>
 
  <CheckBox>
  <SideText><h5>Brand</h5>
  <img src={icon} alt="icon" /></SideText>
  <label> <input type="checkbox" /><p>Aidal</p></label>
  <label> <input type="checkbox" /><p>Knal</p></label>
  <label> <input type="checkbox" /><p>Knal</p></label>

</CheckBox>
<CheckBox>
  <SideText><h5>Company</h5>
  <img src={icon} alt="icon" /></SideText>
  <label> <input type="checkbox" /><p>escape</p></label>
  <label> <input type="checkbox" /><p>Aidal</p></label>


</CheckBox>
<CheckBox>
  <SideText><h5>License type</h5>
  <img src={icon} alt="icon" /></SideText>
  <label> <input type="checkbox" /><p>1 year</p></label>
  <label> <input type="checkbox" /><p>2 year</p></label>
  <label> <input type="checkbox" /><p>1.5year</p></label>

</CheckBox>
<CheckBox>
  <SideText><h5>Number of travelers</h5>
  <img src={icon} alt="icon" /></SideText>
  <label> <input type="checkbox" /><p>2</p></label>
  <label> <input type="checkbox" /><p>3-4</p></label>
  <label> <input type="checkbox" /><p>5+</p></label>

</CheckBox>
<CheckBox>
  <SideText><h5>Location</h5>
  <img src={icon} alt="icon" /></SideText>
  <label> <input type="checkbox" /><p>Seoul</p></label>
  <label> <input type="checkbox" /><p>Korea</p></label>
  <label> <input type="checkbox" /><p>Busan</p></label>

</CheckBox>
</div>
<div>
  <Button $deleteBtn >Cancel</Button>
  <Button>Search</Button>
</div>

<div>
  <p>Compare</p>
  <CarWr>
  <img src={car1} alt="car1" />
  <img src={car2} alt="car2" />
  <img src={car3} alt="car3" /></CarWr>
  <Button>Compare</Button>
</div>
</SideBar>

<LeftBar>
  <LeftBarText>
<div><h3>Item    <span>  25.156</span></h3></div>
<RightBarText>
<h4>Sort by</h4>
<select name="" id="select">
  <option value="">Select</option>
  <option value="">Year</option>
  <option value="">Color</option>
  <option value="">Cost</option>
</select>
<select name="" id="select">
  <option value="">60</option>
  <option value="">50</option>
  <option value="">60</option>
  <option value="">30</option>
</select>
<img src={icon2} alt="icon2"/>
<img src={icon3} alt="icon3" />
</RightBarText>

</LeftBarText>
</LeftBar>
</HomeWrapper>
</div>
</>
  )
}

export default HomeComponent