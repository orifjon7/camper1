import React,  { useState } from 'react'
import HmenuIcon from '../assests/clarity_grid-view-solid.svg'
import VmenuIcon from '../assests/ic_round-view-list.svg'
import HMenuComponent from './hMenu'
import VMenuComponent from './VMenu'
import {BackImage} from './style'
import {MainWrapper} from './style'
import {Filter} from './style'
import {SideText} from './style'
import {CheckBox} from './style'
import {MainFilter} from './style'
import {LeftBar} from './style'

import {RightBarText} from './style'

import car1 from '../assests/Rectangle 705.svg'
import car2 from '../assests/c a.svg'
import car3 from '../assests/22 1.svg'
import { Button } from './style'
import { CarWr } from './style'
import {ButtonLast} from './style'
import{ClickButtons} from './style'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {LeftBarText} from './style'
const MotorComponent = () => {



  const [active, setActive] = useState(true);
function handleHmenu(){
  setActive(true);
}
function handleVmenu() {
  setActive(false)
}
  return (
    <>
    <BackImage>
    <p>Home / Motors</p>
     <h3>Our ranges</h3>
     <h1>Motors</h1>
    </BackImage>
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
  <Accordion defaultExpanded={true}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          
        >
  <Typography>Brand</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <FormGroup>
    <FormControlLabel control={<Checkbox  />} label="Aidal" />
    <FormControlLabel control={<Checkbox  />} label="Knal" />
    <FormControlLabel control={<Checkbox  />} label="Escape" />
    </FormGroup>
          </Typography>
        </AccordionDetails>
      </Accordion>
</CheckBox>
<CheckBox>

  
  <Accordion defaultExpanded={true}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          
        >
  <Typography>Company</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <FormGroup>
          <FormControlLabel control={<Checkbox  />} label="Escape" />
    <FormControlLabel control={<Checkbox  />} label="Aidal" />
    </FormGroup>
          </Typography>
        </AccordionDetails>
      </Accordion>
</CheckBox>
<CheckBox>
<Accordion defaultExpanded={true}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          
        >
  <Typography>License Type</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <FormGroup>
          <FormControlLabel control={<Checkbox  />} label="1 year" />
    <FormControlLabel control={<Checkbox  />} label="2 year" />
    <FormControlLabel control={<Checkbox  />} label="1.5 year" />
    </FormGroup>
          </Typography>
        </AccordionDetails>
      </Accordion>
</CheckBox>
<CheckBox>
<Accordion defaultExpanded={true}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          
        >
  <Typography>Number of travelers</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <FormGroup>
          <FormControlLabel control={<Checkbox  />} label="2" />
    <FormControlLabel control={<Checkbox  />} label="3-4" />
    <FormControlLabel control={<Checkbox  />} label="5+" />
    </FormGroup>
          </Typography>
        </AccordionDetails>
      </Accordion>
</CheckBox>
<CheckBox>
<Accordion defaultExpanded={true}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          
        >
  <Typography>Location</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <FormGroup>
          <FormControlLabel control={<Checkbox  />} label="Seoul" />
    <FormControlLabel control={<Checkbox  />} label="Korea" />
    <FormControlLabel control={<Checkbox  />} label="Pusan" />
    </FormGroup>
          </Typography>
        </AccordionDetails>
      </Accordion>

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


    <ClickButtons>
<button onClick={handleHmenu}>
  <img src={HmenuIcon} alt="HmenuIcon" />
</button>
<button onClick={handleVmenu}>
  <img src={VmenuIcon} alt="VmenuIcon" />
</button></ClickButtons>
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

export default MotorComponent