import styled from "styled-components";
import CampingBag from './assests/CampingBg.svg'

export const CampingPlace = styled.div`
background-image:url(${CampingBag});
width: 100%;
height: 380px;
background-size: cover;
background-position:center;
display: flex;
flex-direction:column;
align-items:center;
justify-content:center;

p{
    color: #ffffff;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
  }

  h3{
    color: #ffffff;
font-family: Montserrat;
font-size: 27px;
font-style: normal;
font-weight: 700;
line-height: normal;
  }
  h1{
    color: #ffffff;
font-family: Montserrat;
font-size: 80px;
font-style: normal;
font-weight: 700;
line-height: normal;
  }
`
export const CampingPlaces = styled.div`
display:flex;
align-items:center;
gap:30px;
margin:15px;
padding-top:60px;
img{
  width: 395px;
height: 300px;
flex-shrink: 0;
border-radius: 10px;
background: linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url(<path-to-image>) lightgray 50% / cover no-repeat;
}
div{
display:flex;
flex-direction:column;
align-items:start;
justify-content:start;
}
h1{
  color: var(--text, #373737);
font-family: Montserrat;
font-size: 22px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
p{
  color: var(--text, #373737);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
`