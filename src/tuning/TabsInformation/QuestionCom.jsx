import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {QuestionWrapper} from '../TabsInfoStyle'
import {QAwrapper} from '../TabsInfoStyle'
import {AnswerWrapper} from '../TabsInfoStyle'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_7l9xfdg', 'template_xbolusb', form.current, {
        publicKey: 'mPpzZ_FLkfvcyaOUA',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

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
<form ref={form} onSubmit={sendEmail}>
    <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" /></form>
        </AnswerWrapper>
    </QAwrapper>
  )
}

export default QuestionComponent