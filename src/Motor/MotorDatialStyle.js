import styled from "styled-components";
import BackImage from '../assests/MotorBg.png';

export const BackgroundImage = styled.div`
background-image:url(${BackImage});
width: 100%;
height: 500px;
background-size: cover;
background-position:center;
display: flex;
flex-direction:column;
align-items:center;
justify-content:center;
h1{
    color: #FFF;
text-align: center;
font-family: Montserrat;
font-size: 60px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
`
export const AllWrapper = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
padding:40px;
`

export const DatailWrapper = styled.div`
display:flex;
justify-content:center;

`
export const DatailContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
width: 683px;
height: 477px;
flex-shrink: 0;
img{
    width: 683px;
    height: 477px;
flex-shrink: 0;
}
h1{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 35px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
p{
    color: #373737;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 150% */
}
`
export const DatailWrapperRight = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
padding-top:50px;
img{
    width: 626px;
height: 381px;
flex-shrink: 0;
}
h1{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 35px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
p{
    color: #373737;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 150% */
}
`
export const DatailCar = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

width: 683px;
height: 440px;
flex-shrink: 0;
border-radius: 10px;
background: #FFF;

/* btn sh */
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);



`

export const DatailFlex = styled.div`
display:flex;
justify-content:center;
align-items: center;


h1{
    color: #000;
font-family: Montserrat;
font-size: 25px;
font-style: normal;
font-weight: 700;
line-height: normal;

}
h2{
    color: #006DAB;
font-family: Montserrat;
font-size: 30px;
font-style: normal;
font-weight: 700;
line-height: normal;
padding-left:300px;
}

`
export const DatailText = styled.div`
display:flex;
flex-direction:column;


h4{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
`
export const DatailId = styled.div`
display:flex;
flex-direction: column;


p{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
`

export const DatailData = styled.div`
display:flex;
justify-content:center;
align-items:center;
gap:320px;

`
export const DatailImg = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
width: 683px;
height: 477px;
flex-shrink: 0;

img{
    width: 600px;
    height: 400px;
    border-radius:15px;
flex-shrink: 0;
}
`