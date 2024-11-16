import styled from "styled-components";

export const QuestionWrapper = styled.div`
display: flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
export const QAwrapper = styled.div`
display: flex ;
justify-content: center;
align-items:center;
gap:100px;
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

export const ItemReviewInformation=styled.div`
display: flex;
justify-content: center;
padding: 7px 20px;
border-bottom: 1.5px solid rgba(55, 55, 55, 0.30);
`
export const Infbox1=styled.div`
flex: 1;
display: flex;
img{
    width: 135px;
    height: 80px;
}
`
export const Infbox2=styled.div`
flex: 5;

margin-left: -20px;

h1{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 15px;
font-style: normal;
font-weight: 500;
line-height: normal;

}
p{
    color: rgba(55, 55, 55, 0.80);
font-family: Montserrat;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
`
export const Infbox3=styled.div`
flex: 1;

p{
    color: rgba(55, 55, 55, 0.70);
font-family: Montserrat;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: normal;

}
`
export const Best=styled.div`
display: flex;
justify-content: space-between;
padding: 0px 20px;
align-items: center;
/* margin-top: -10px; */
h1{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
`
export const ItemReview=styled.div`

`
export const CustomTabPanel = styled.div`
`