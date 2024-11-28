import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {QAwrapper} from '../TabsInfoStyle'
import {AnswerWrapper} from '../TabsInfoStyle'
import {ContactWrapper} from '../TabsInfoStyle'
import FAQLists  from '../FAQList';
import emailjs from '@emailjs/browser';
import  { useRef } from 'react';
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

const FAQComponent = () => {
  return (
        <QAwrapper>
             <Box
          component="form"
          sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
          noValidate
          autoComplete="off"
        >
    <ContactWrapper>
   <FAQLists/>
    </ContactWrapper>
    </Box>
            <AnswerWrapper>
    <h4>Have you got a question</h4>
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
 

export default FAQComponent