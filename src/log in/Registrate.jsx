import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {LoginContainer} from './loginStyle'
import {LoginWrapper} from './loginStyle'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import {RegistrateWr} from './loginStyle'
import { Link } from 'react-router-dom';

const RegistrateComponent = () => {
  return (
   
<LoginContainer>
<LoginWrapper>
<Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 0.5, width: '44ch', background: 'rgba(55, 55, 55, 0.10)', border:'10px'} }}
      noValidate
      autoComplete="off"
    >
       <RegistrateWr> <h1>Sign in</h1>
         <p>Email</p>
<TextField
          id="outlined-textarea"
          placeholder="Your email"
          multiline
        />
        <p>Password</p>
         <TextField
          id="outlined-textarea"
          placeholder="Your email"
          multiline
        />
        <p>Repeat your password</p>
         <TextField
          id="outlined-textarea"
          placeholder="Your email"
          multiline
        />
        <FormControlLabel control={<Checkbox defaultChecked />} label="Keep me logged in" />
      <Link to={"/login"}> <Button variant="contained">REGISTRATE</Button> </Link>
        </RegistrateWr>
</Box>
</LoginWrapper>
</LoginContainer>

  )
}

export default RegistrateComponent