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
export const CampingSites=styled.div`
display: grid;
grid-template-areas: 'a a a';
gap: 15px;
justify-content: center;
background-color: #FAFAFA;
padding-top: 80px;
`
export const SitesBox=styled.div`
padding-bottom: 15px;
h3{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 20px;
font-style: normal;
font-weight: 600;
}
p{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-top: -15px;
}
`
export const SitesBackgroundImg = styled.div`
width: 365px;
height: 275px;
flex-shrink: 0;
border-radius: 10px;
margin-bottom: -10px;
img{
    width: 365px;
height: 275px;
flex-shrink: 0;
border-radius: 10px;
}
`