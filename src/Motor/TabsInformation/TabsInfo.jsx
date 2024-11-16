import React from 'react'
import { motordata } from '../../mock/motor'
import {ItemReviewInformation, Infbox1 , Infbox2, Infbox3 } from '../TabsInfoStyle'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import top100Films from '../top100Films';
import {Best, ItemReview,CustomTabPanel} from '../TabsInfoStyle'


  const TabsInfo = () => {
    console.log(motordata)
    return(
      <CustomTabPanel>
        <ItemReview>
<Best>
<h1>Premium Review <span style={{color:'#006DAB'}}>35</span></h1>
<Autocomplete
size='small'
disablePortal
options={top100Films}
sx={{ width: 180 }}
renderInput={(params) => <TextField {...params} label="Best" />}
/>
</Best>
     {motordata.map((value, index) => {
      return ( 


      <ItemReviewInformation>
      <Infbox1>
        <img src={value.car.photo} alt="car-icon" />
      </Infbox1>
      <Infbox2>
        <h1>{value.car.name}</h1>
        <p style={{marginTop:'-5px'}}>{value.car.company}</p>
        <p style={{color:'#373737'}}>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
      </Infbox2>
      <Infbox3>
        <p>ID: <span style={{color:'#373737'}}>{value.id}</span></p>
        <p>Date: <span style={{color:'#373737'}}>{value.car.date}</span></p>
        <p>Viewed: <span style={{color:'#373737'}}>{value.car.cost}</span></p>
      </Infbox3>
    </ItemReviewInformation>
    

    );
  }
)
}
</ItemReview>
</CustomTabPanel>
)
};


export default TabsInfo
