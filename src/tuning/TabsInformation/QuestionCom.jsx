
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {QuestionWrapper} from '../TabsInfoStyle'
import {QAwrapper} from '../TabsInfoStyle'
import {AnswerWrapper} from '../TabsInfoStyle'


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
const QuestionComponent = () => {
  return (
    <QAwrapper>
         <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
<QuestionWrapper>
<TextField
          id="standard-helperText"
          label="Name"
          defaultValue="Question Lorem ipsum dolor sit amet ?"
          
          variant="standard"
        />
        <TextField
          id="standard-helperText"
          label="Name"
          defaultValue="Question Lorem ipsum dolor sit amet ?"
          
          variant="standard"
        />
        <TextField
          id="standard-helperText"
          label="Name"
          defaultValue="Question Lorem ipsum dolor sit amet ?"
          
          variant="standard"
        />
        <TextField
          id="standard-helperText"
          label="Name"
          defaultValue="Question Lorem ipsum dolor sit amet ?"
          
          variant="standard"
        />
        <TextField
          id="standard-helperText"
          label="Name"
          defaultValue="Question Lorem ipsum dolor sit amet ?"
          
          variant="standard"
        />
        
</QuestionWrapper>
</Box>
        <AnswerWrapper>
<h4>Send a question</h4>
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

export default QuestionComponent