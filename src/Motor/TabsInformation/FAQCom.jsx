import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {QAwrapper} from '../TabsInfoStyle'
import {AnswerWrapper} from '../TabsInfoStyle'
import {ContactWrapper} from '../TabsInfoStyle'
import FAQLists  from '../FAQList';

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
const FAQComponent = () => {
  return (
        <QAwrapper>
             <Box
          component="form"
          sx={{ '& .MuiTextField-root': { m: 1, width: '43ch' } }}
          noValidate
          autoComplete="off"
        >
    <ContactWrapper>
   <FAQLists/>
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
 

export default FAQComponent