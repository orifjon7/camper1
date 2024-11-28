import styled from "styled-components";
import BackImg from '../assests/MotorBg.png'

export const LoginContainer = styled.div`
display: flex;
background-image:url(${BackImg}) ;
background-position:center;
background-size:cover;
background-repeat:no-repeat;
width: 100%;
height: calc(var(--vh, 1vh) * 100);
justify-content: center;
align-items: center;
`

export const LoginWrapper = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding:10px;
width: 500px;
height: 614px;
flex-shrink: 0;
border-radius: 20px;
background: #FFF;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);

h1{
    color: var(--text, #373737);
font-family: "Open Sans";
font-size: 27px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
p{
    color: rgba(55, 55, 55, 0.80);
font-family: "Open Sans";
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
`

export const ButtonWrap = styled.div`
width:200px;
height:200px;
display:flex;
flex-direction:column;
align-items:center;
justify-content: center;
padding-left:120px;
padding-top:10px;
gap:15px;

Button{
    width: 434px;
height: 50px;
}
`
export const Passwordwr = styled.div`
display:flex;

p{
    padding-left:70px;
    color: #373737;
font-family: "Open Sans";
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
`
export const RegistrateWr = styled.div`
display:flex;
flex-direction:column;


Button{
    width: 440px;
height: 50px;
border-radius: 10px;

}
`