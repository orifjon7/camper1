import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {QAwrapper} from '../TabsInfoStyle'
import {AnswerWrapper} from '../TabsInfoStyle'
import map from '../Motor Rasm/Screenshot_1 1.svg'
import {MapInfo} from '../TabsInfoStyle'
import {ContactWrapper} from '../TabsInfoStyle'
import {InfoWrapper} from '../TabsInfoStyle'
const style1 = { 
    width: 390,
    height: 50,
    padding:1,
    
 };
 const style2 = { 
    width: 390,
    height: 50,
    padding:1,
 };
 const style3 ={
    width: 390,
    height: 120,
    padding:1,
 }
const ContactInfo = () => {
  return (
    <QAwrapper>
         <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
<ContactWrapper>
<img src={map} alt="map" />
<InfoWrapper>
        <MapInfo>
        <p>Phone number: <br />
            +7 237 181 181 <br />
            +7 210 181 191</p>
        </MapInfo>
        <MapInfo>
<p>E-mail: <br />
logo.uz</p>
        </MapInfo>
        </InfoWrapper>
</ContactWrapper>
</Box>
        <AnswerWrapper>
<h4>Have you got a question</h4>
<TextField sx={style1}
          id="filled-multiline-flexible"
          label="Your name"
          multiline
          maxRows={4}
          variant="filled"
        />
             <TextField sx={style2}
          id="filled-multiline-flexible"
          label="Your email"
          multiline
          maxRows={4}
          variant="filled"
        /> 
       <TextField sx={style3}
          id="filled-multiline-static"
          
          multiline
          rows={4}
          defaultValue="Your question"
          variant="filled"
        /> <br />
        <button>Send question</button>
        </AnswerWrapper>
    </QAwrapper>
  )
}

export default ContactInfo