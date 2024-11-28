import styled from "styled-components";
import CampingBag from '../assests/CampingBg.svg'

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style>
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
export const CampingWr = styled.div`
display: flex;
align-items: center;
overflow-x: scroll;
gap: 10px;
img{
    width: 215px;
height: 167px;
border-radius: 10px;
background: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url(<path-to-image>) lightgray 50% / cover no-repeat;
}
`
export const CamperText = styled.div`
display: flex;
flex-direction: column;
background-color: #FAFAFA;
margin-top: 15px;
border-bottom: 1.5px solid rgba(55, 55, 55, 0.20);
h1{
    color: #000;
font-family: Montserrat;
font-size: 25px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-top: -1px;
}
.location{
    display: flex;
    align-items: center;
    margin-top: -15px;
    gap: 20px;

    p{
        color: var(--blue, #006DAB);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
    };
    button{
        width: 120px;
height: 25px;
flex-shrink: 0;
border-radius: 5px;
border: 1px solid var(--sariq, #FF7A00);
color: var(--sariq, #FF7A00);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
background-color: #FAFAFA;
    }
}
`
export const PlaceNumber =styled.div`
display: flex;
gap: 80px;
margin-top: 10px;

`

export const PlaceNumberLeft = styled.div`
display: flex;
flex-direction: column;
.location2{
    display: flex;
    gap: 10px;
    align-items: center;
    p{
        color: var(--text, #373737);
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;}}
`

export const PlaceNumberRight = styled.div`
display: flex;
flex-direction: column;
.location2{
    display: flex;
    align-items: center;
    gap: 10px;
    p{
        color: var(--text, #373737);
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
    }
}
`
export const Description=styled.div`
h1{
    color: var(--blue, #006DAB);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
p{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
`