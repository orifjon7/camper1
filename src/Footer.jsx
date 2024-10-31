import React from 'react'
import { FooterWr } from './footerStyle'
import youtube from './assests/cib_youtube.svg'
import instagram from './assests/Vector-3.svg'
import naver from './assests/simple-icons_naver.svg'
import { H1 } from './footerStyle'
import { H2 } from './footerStyle'
import { P } from './footerStyle'
const FooterComponent = () => {
  return (
   <FooterWr>
    <div>
      <H1>Camper</H1>
    </div>
    <div><br />
      <H2>Services</H2>
      <br />
      <P>Camping</P>
      <P>Lodging</P>
      <P>Harber</P>
      <P>Day Use</P>
      
    </div>
    <div><br />
    <H2>Menu</H2>
    <br />
     <P>About</P>
      <P>Services</P>
      <P>Booking</P>
      <P>Blog</P>
      </div>
      <div><br />
      <H2>Contact </H2>
      <br />
      <img src={youtube} alt="youtube" />
      <img src={instagram} alt="instagram" />
      <img src={naver} alt="naver" />
      <P>021 Korea Seul, LA</P>
      <P>camper@example.com </P>
      <P>(021) 345-6789-99</P>
      
    </div>
   </FooterWr>
  )
}

export default FooterComponent