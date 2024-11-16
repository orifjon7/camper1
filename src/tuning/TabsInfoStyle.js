import styled from "styled-components";

export const QuestionWrapper = styled.div`
display: flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
export const QAwrapper = styled.div`
display: flex ;
justify-content: space-evenly;
align-items:center;

height: 500px;
`

export const AnswerWrapper = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

width: 450px;
height: 470px;
flex-shrink: 0;
border-radius: 10px;
border: 1px solid rgba(0, 109, 171, 0.10);
background: #FFF;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);

h4{
    color: var(--text-color, #023047);
font-family: Montserrat;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 130%; /* 31.2px */
}
button{
   
    width: 390px;
height: 50px;
flex-shrink: 0;
border-radius: 10px;
background: var(--blue, #006DAB);

}
`
export const MapInfo = styled.div`
display: flex;

padding-left:20px;
width: 320px;
height: 109px;

border-radius: 8px;
background: #FFF;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
p{
    color: var(--txt-color, #1E1C1C);
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
`
export const ContactWrapper = styled.div`
display: flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
export const InfoWrapper = styled.div`
display:flex;
justify-content:space-around;
gap:20px;
padding-top:10px;
`