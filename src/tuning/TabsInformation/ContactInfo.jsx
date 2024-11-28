import * as React from 'react';
import Box from '@mui/material/Box';
import {QAwrapper} from '../TabsInfoStyle'
import {AnswerWrapper} from '../TabsInfoStyle'
import KakaoMap from '../../Kakao Map';
import {MapInfo} from '../TabsInfoStyle'
import {ContactWrapper} from '../TabsInfoStyle'
import {InfoWrapper} from '../TabsInfoStyle'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import KakaoMap from '../../Kakao Map';
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
const ContactInfo = () => {
  return (
    <ContactWrapper>
         <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >

<KakaoMap/>
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
        </ContactWrapper>
  )
}

export default ContactInfo