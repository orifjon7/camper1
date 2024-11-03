import styled from "styled-components";
import CarabaImg from './assests/TuningCar.png'

export const TuningImage = styled.div`
background-image:url(${CarabaImg});
width: 100%;
height: 380px;
background-size: cover;
background-position:center;
display: flex;
flex-direction:column;
align-items:center;
justify-content:center;

p{
    color: #000;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
  }

  h3{
    color: #000;
font-family: Montserrat;
font-size: 27px;
font-style: normal;
font-weight: 700;
line-height: normal;
  }
  h1{
    color: #000;
font-family: Montserrat;
font-size: 80px;
font-style: normal;
font-weight: 700;
line-height: normal;
  }
`