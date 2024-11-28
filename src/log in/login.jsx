import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import or from './login photos/Group 2220.svg'
import {LoginContainer} from './loginStyle'
import {LoginWrapper} from './loginStyle'
import logo from './login photos/Group 2248.svg'
import {ButtonWrap} from './loginStyle'
import {Passwordwr} from './loginStyle'
import { Link } from 'react-router-dom';
const LoginComponent = () => {
  return (
    
    <LoginContainer>
        <LoginWrapper>
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 0.5, width: '44ch', background: 'rgba(55, 55, 55, 0.10)', border:'10px'} }}
      noValidate
      autoComplete="off"
    >
   
        <h1>Sign in</h1>
        <p>Email</p>

    
    <TextField
          id="outlined-textarea"
          placeholder="Your email"
          multiline
        />
        <p>Password</p>
        <TextField
          id="outlined-textarea"
          placeholder="Your password"
          multiline
        />
      
     <Passwordwr> <FormControlLabel control={<Checkbox defaultChecked />} label="Keep me logged in" />
      <p>Forget your password ?</p> </Passwordwr>
     <ButtonWrap>
     <Link to={"/"}> <Button variant="contained">SIGN IN</Button></Link>
    
 
      <img src={or} alt="or" />
     
        <img src={logo} alt="logo" />
      <Link to={"/registrate"}>  <Button variant="outlined">CREATE ACCOUNT</Button></Link></ButtonWrap>
    </Box>
    </LoginWrapper>
    </LoginContainer>
  )
}

export default LoginComponent