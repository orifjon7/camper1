
import React,  { useState } from 'react'
import HmenuIcon from '../assests/clarity_grid-view-solid.svg'
import VmenuIcon from '../assests/ic_round-view-list.svg'
import HMenuComponent from './hMenu'
import VMenuComponent from './VMenu'
import {TuningImage} from './TuningStyle'
import {MainWrapper} from '../Motor/style'
import {Filter} from '../Motor/style'
import {SideText} from '../Motor/style'
import {CheckBox} from '../Motor/style'
import icon from '../assests/grommet-icons_form-next.svg'
import {MainFilter} from '../Motor/style'
import {LeftBar} from '../Motor/style'
import { LeftBarText } from '../Motor/style'
import {RightBarText} from '../Motor/style'
import {DivBetween} from '../Motor/style'
import car1 from '../assests/Rectangle 705.svg'
import car2 from '../assests/c a.svg'
import car3 from '../assests/22 1.svg'
import { Button } from '../Motor/style'
import { CarWr } from '../Motor/style'
import {Leftnavinput} from '../Motor/style'
import {ButtonLast} from '../Motor/style'
const TuningComponent = () => {
  const [active, setActive] = useState(true);
  function handleHmenu(){
    setActive(true);
  }
  function handleVmenu() {
    setActive(false)
  }
    return (
      <>
      <TuningImage>
      <p>Home / Tuning</p>
       <h3>Our ranges</h3>
       <h1>Tuning</h1>
      </TuningImage>
      <MainFilter> 
      <Filter>
        <p>Cost of car</p>
  <SideText>
    <div><p>from</p>
    <input type="text" /></div>
    <div><p>to</p>
    <input type="text" /></div>
  </SideText>
  <div>
   
    <CheckBox>
    <button><h1>Brand</h1>
    <img src={icon} alt="icon" /></button>
    <Leftnavinput> <label> <input type="checkbox" /><p>Aidal</p></label>
    <label> <input type="checkbox" /><p>Knal</p></label>
    <label> <input type="checkbox" /><p>Knal</p></label>
    </Leftnavinput>
  </CheckBox>
  <CheckBox>
    <button><p>Company</p>
    <img src={icon} alt="icon" /></button>
    <Leftnavinput> <label> <input type="checkbox" /><p>escape</p></label>
    <label> <input type="checkbox" /><p>Aidal</p></label>
    </Leftnavinput>
  
  </CheckBox>
  <CheckBox>
    <button><p>License type</p>
    <img src={icon} alt="icon" /></button>
    <Leftnavinput><label> <input type="checkbox" /><p>1 year</p></label>
    <label> <input type="checkbox" /><p>2 year</p></label>
    <label> <input type="checkbox" /><p>1.5year</p></label>
    </Leftnavinput>
  </CheckBox>
  <CheckBox>
    <button><p>Number of travelers</p>
    <img src={icon} alt="icon" /></button>
    <Leftnavinput><label> <input type="checkbox" /><p>2</p></label>
    <label> <input type="checkbox" /><p>3-4</p></label>
    <label> <input type="checkbox" /><p>5+</p></label>
    </Leftnavinput>
  </CheckBox>
  <CheckBox>
    <button><p>Location</p>
    <img src={icon} alt="icon" /></button>
    <Leftnavinput><label> <input type="checkbox" /><p>Seoul</p></label>
    <label> <input type="checkbox" /><p>Korea</p></label>
    <label> <input type="checkbox" /><p>Busan</p></label></Leftnavinput>
  
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
    <ButtonLast><button>Compare</button></ButtonLast>
  </div>
   </Filter>
   <MainWrapper>
      <LeftBar>
    <LeftBarText>
  <div><h3>Item    <span>  25.156</span></h3></div></LeftBarText>
  <RightBarText>
  <h4>Sort by</h4>
  <input type="text" placeholder='Select'/>
  <button ><img src={icon} alt="icon" width={20} /></button>
  <DivBetween><input type="text" placeholder='60' />
  <button ><img src={icon} alt="icon" width={20} /></button></DivBetween>
  <button onClick={handleHmenu}>
    <img src={HmenuIcon} alt="HmenuIcon" />
  </button>
  <button onClick={handleVmenu}>
    <img src={VmenuIcon} alt="VmenuIcon" />
  </button>
  </RightBarText>
  
  
  </LeftBar>
  
      <div>
      {active ?  <HMenuComponent/> :  <VMenuComponent/>}
      </div>
      </MainWrapper>
      </MainFilter>
    
      </>
    )
  }
  

export default TuningComponent