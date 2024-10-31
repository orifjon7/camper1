import React from "react";
import styled from "styled-components";
import backgroundimage from "./assests/image 5.svg";

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style>

export const HomeWr = styled.div `
width: 100%;
height: 350px;
background-color: gray;
background-image: url(${backgroundimage});
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

export const HomeWrapper = styled.div `
display:flex;
`

export const SideBar = styled.div`
display: flex;
width: 242px;
height: 1700px;
flex-direction: column;
align-items: center;
padding:10px;

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
`
export const SideText = styled.div`
display:flex;
gap:15px;
`
export const CheckBox = styled.div`
display: flex;
flex-direction:column;
align-items:center;

label{
    display:flex;
    align-items:center;
    margin-left: -120px;
    text-align:center;
}
p{
    margin-left: -70px;
 
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

`

export const LeftBar = styled.div`
display: flex;
flex-direction:column;
flex:1;

`
export const LeftBarText = styled.div`
display:flex;
align-items:center;
justify-content:space-evenly
`

export const LeftText = styled.div`
display :flex;
justify-content:left;
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

select{

  width: 200px;
height: 25px;
flex-shrink: 0;
  border-radius: 5px;
border: 1px solid rgba(55, 55, 55, 0.30);
}

p{
  text-align:center;
  color: rgba(55, 55, 55, 0.60);
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 100%; /* 14px */
}

`
