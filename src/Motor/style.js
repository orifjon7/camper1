
import styled from "styled-components";
import BgImage from '../assests/MotorBg.png'
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style>

export const BackImage = styled.div`
background-image:url(${BgImage});
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

export const CarWrapper = styled.div`
display:flex;
flex-direction:column;
padding:20px;
width: 250px;
height: 330px;

flex-shrink: 0;
border-radius: 20px;
background: #FFF;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);

h1{
  color: var(--text, #373737);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
p{
  color: var(--text, #373737);
font-family: Montserrat;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
}

h2{
  color: var(--blue, #006DAB);
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
button{
  width: 94px;
height: 35px;
flex-shrink: 0;
border-radius: 10px;
background-color:#FFF;
border: 1px solid var(--blue, #006DAB);

/* btn sh */
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
}
  

`
export const Img1 =styled.div`
display:flex;
img{

border-radius:20px;
width: 240px;
height: 137.433px;

}
`

export const CarWrText =styled.div`
display:flex;
justify-content:space-between


`
export const StarTextR = styled.div`
display:flex;
`
export const ButtonWrR = styled.div`
display:flex;
justify-content:space-around;
padding-left:20px;
gap:30px;




button{
  width: 94px;
height: 35px;
flex-shrink: 0;
  border-radius: 10px;
border: 1px solid var(--blue, #006DAB);
background-color:white;

 color: var(--blue, #006DAB);
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: normal;
}

`
export const CarWrapperAll = styled.div`
display:flex;
width:100%;
margin-top: 20px;
margin-bottom:30px;


display: grid;
gap:15px;
grid-template-areas:"1 1 1 1";
@media only screen and (max-width: 834px){display:flex;
  width:100%;
margin-top: 20px;

margin-bottom:20px;
display: grid;
gap:7px;
grid-template-areas:"1 1";
};
@media only screen and (max-width: 414px){display:flex;
width:100%;
margin-top: 20px;

margin-bottom:20px;
display: grid;
gap:7px;
}

`
export const CarWrapperRight = styled.div`
display:flex;
width:100%;
margin-top: 20px;

margin-bottom:20px;
display: grid;
gap:7px;

@media only screen and (max-width: 834px){display:flex;
  width:100%;
margin-top: 20px;

margin-bottom:20px;
display: grid;
gap:7px;

};
@media only screen and (max-width: 414px){display:flex;
width:100%;
margin-top: 20px;

margin-bottom:20px;
display: grid;
gap:7px;
}
`
export const CarWrapperR = styled.div`
display:flex;
padding:15px;
width: 955px;
height: 180px;


flex-shrink: 0;
border-radius: 20px;
background: #FFF;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);

h1{
  color: var(--text, #373737);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
p{
  color: var(--text, #373737);
font-family: Montserrat;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
h2{
  color: var(--blue, #006DAB);
font-family: Montserrat;
font-size: 22px;
font-style: normal;
font-weight: 700;
line-height: normal;
}

h3{
  text-align:center;
  color: var(--blue, #006DAB);
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
button{
  width: 260px;
  height: 35px;
flex-shrink: 0;
  border-radius: 10px;
border: 1px solid var(--blue, #006DAB);

/* btn sh */
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
}
  
@media only screen and (max-width: 834px){display:flex;
  width:100%;}

  @media only screen and (max-width: 414px){display:flex;
    width:100%;}
`

export const CarColumn = styled.div`
display:flex;
justify-content:space-between;
padding:20px;

`
export const CarWrTextR = styled.div`
display:flex;
flex-direction:column;
`
export const StarTextS = styled.div`
display:flex;

`
export const StarText = styled.div`
display:flex;
flex-direction:column;
`
export const ButtonWr = styled.div`
display:flex;
gap:20px;
`


export const MainWrapper = styled.div`
display:flex;
flex-direction:column;

`
export const Filter = styled.div`
display:flex;
flex-direction:column;
align-items: center;
width: 242px;
height: 1700px;
justify-content:start;
margin-left:20px;
justify-content:flex-start;
p{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 100%; /* 18px */
}
input{
    border-radius: 10px;
border: 1px solid rgba(55, 55, 55, 0.60);
width: 91px;
height: 36px;
flex-shrink: 0;
}
@media only screen and (max-width: 834px){display: none;
    
};
@media only screen and (max-width: 414px){display:none;}
`
export const SideText = styled.div`
display:flex;
justify-content:center;
gap:15px;
`

export const Leftnavinput = styled.div`
display:flex;
flex-direction:column;
height:172px;
width:100%;
justify-content:center;
gap: 10px;
label {display: flex;
    align-items:center;
    gap: 10px;

}
input {width: 22px;
height: 22px;
flex-shrink: 0;
border-radius: 5px;
border: 1px solid #666;
background: #FFF;

};
p{color: var(--text, #373737);
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 100%; /* 14px */

};  `
export const ButtonLast = styled.div`
display:flex;
justify-content:end;
padding-top:20px;
button{
  width: 115.804px;
height: 38.968px;
flex-shrink: 0;
border-radius: 60px;
background: var(--blue, #006DAB);

/* btn sh */
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
}
`

export const MainFilter = styled.div`
display:flex;
justify-content:center;
margin-top:20px;
`
export const LeftBar = styled.div`
display: flex;
justify-content:space-between;

`
export const LeftBarText = styled.div`
display:flex;
align-items:center;
justify-content:space-evenly;

span{
  color: var(--blue, #006DAB);
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 100%;
}
`



export const RightBarText = styled.div`
display:flex;
align-items:center;


p{
  text-align:center;
  color: rgba(55, 55, 55, 0.60);
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 100%; /* 14px */
}
button{

  width: 40px;
height: 30px;
}
input{
  width: 227px;
height: 26px;
flex-shrink: 0;

border: 1px solid rgba(55, 55, 55, 0.30);
}
`
export const DivBetween = styled.div`
display:flex;
padding-left:10px;
padding-right:10px;

input{
  display:flex;
  align-items:center;
  width: 80px;
height: 26px;
flex-shrink: 0;
border: 1px solid rgba(55, 55, 55, 0.30);
}
`
export const Button = styled.button`
width: 115.804px;
height: 38.968px;
flex-shrink: 0;
border-radius: 60px;
background-color: ${props=>(props.$deleteBtn ? "#FF7A00" : "#006DAB")};

/* btn sh */
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);


`
export const CarWr = styled.div`
display:flex;

img{
  width: 76px;
height: 90px;
flex-shrink: 0;
border-radius: 10px;
background: #FFF;
box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.10);
}

`
export const YoutubeCar = styled.div`
padding-top:20px;
padding-bottom:50px;
display:flex;
justify-content:center;
display: grid;
gap:15px;
grid-template-areas:"1 1 1 1"


`
export const YoutubeCarText = styled.div`
display:flex;
flex-direction:column;
justify-content: center;
align-items: center;
padding:20px;

img{
 
  margin-top:-30px;
}

p{  color: var(--text, #373737);
font-family: Gilroy;
font-size: 28px;
font-style: normal;
font-weight: 700;
line-height: normal;
}

`
export const CamperWrapper = styled.div`
display:flex;
justify-content:center;
flex:1;
padding:70px;

h1{
  color: #000;
font-family: Montserrat;
font-size: 28px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
h5{
  color: var(--sariq, #FF7A00);
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
p{
  color: #000;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
`
 
export const YoutubeImage= styled.div`
padding-left:50px;
padding-top:20px;
padding-bottom:50px;
display:flex;
justify-content:center;
display: grid;
gap:15px;
grid-template-areas:"1 1 1"
`

export const MultiWrapper = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content: center;
img{
  width: 290px;
height: 167px;
flex-shrink: 0;
}
p{
  color: var(--text, #373737);
text-align: center;
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
button{
  width: 259px;
height: 45px;
flex-shrink: 0;
transform: skew(-18deg);
background-color:#006DAB;
color: #FFF;
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
`
export const SelectButton=styled.div`
display: flex;
align-items: center;
gap: 10px;
label{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 100%; /* 16px */
}
select{
    width: 227px;
height: 30px;
flex-shrink: 0;
border-radius: 5px;
border: 1px solid rgba(55, 55, 55, 0.30);
color: rgba(55, 55, 55, 0.60);
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 100%; /* 14px */
}
@media only screen and (max-width:680px) {
   order: 3;
    }
`
export const ClickButtons=styled.div`
display: flex;
align-items: center;

button{
    width: 50px;
height: 45px;
flex-shrink: 0;
border-radius: 5px 0px 0px 5px;
border: 1px solid rgba(55, 55, 55, 0.30);
background-color: white;
}
@media only screen and (max-width:680px) {
   order: 2;
    }
`
export const CheckBox = styled.div`
display: flex;
flex-direction: column;
width: 210px;

margin: 15px;
gap: 5px;


button {width:100%;
    height:33px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    border: none;
    border-bottom: solid 1px rgba(55, 55, 55, 0.30);
    background-color: white;
    
}
h1{color: #000;
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 100%; /* 18px */

}
`