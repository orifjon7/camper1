
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
import {ButtonLast} from '../Motor/style'
import Autocomplete from '@mui/material/Autocomplete';
import top100Films from '../Motor/top100Films';
import TextField from '@mui/material/TextField';
import { SelectButton } from '../Motor/style'
import Numbers from '../Motor/Number'
import{ClickButtons} from '../Motor/style'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
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
  <SelectButton>
      <label htmlFor="">Sort by</label>
      <Autocomplete
      disablePortal
      options={top100Films}
      sx={{ width: 255 ,height: 45}}
      size='small'
      renderInput={(params) => <TextField {...params} label="Select"  />}
    />
     </SelectButton>
  <DivBetween><Autocomplete
      disablePortal
      options={Numbers}
      sx={{ width: 85 ,height: 45}}
      size='small'
      renderInput={(params) => <TextField {...params} label="60"  />}
    /></DivBetween>
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
  

export default TuningComponent