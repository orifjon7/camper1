import styled from "styled-components";
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style>

export const Navbar = styled.div`
display:flex;
justify-content:space-evenly;

align-items: center;
width:100%;
@media only screen and (max-width: 834px){display:flex;

};
@media only screen and (max-width: 414px){display:none;

};
`
export const H1 =styled.h1`
color: var(--blue, #006DAB);
font-family: Montserrat;
font-size: 38px;
font-style: normal;
font-weight: 600;
line-height: normal;
`
export const P = styled.p`
color: var(--text, #373737);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;


`

export const NavbarRight = styled.div`
display:flex;
gap:20px;
align-items:center;

`
export const NavbarMiddle = styled.div`
display:flex;
align-items:center;

@media only screen and (max-width: 834px){display:none;

};
@media only screen and (max-width: 414px){display:none;

};
`
export const Hamburgers = styled.div`
display:none;
align-items:center;


@media only screen and (max-width: 834px){display:flex;

};
@media only screen and (max-width: 414px){display:none;

};
`