import React from 'react'
import { Navbar } from './navbarStyle'
import { Link } from 'react-router-dom'
import { NavbarRight } from './navbarStyle'
import cart from './assests/clarity_shopping-cart-solid.svg'
import user from './assests/bx_bxs-user.svg'
import icon from './assests/grommet-icons_form-next.svg'
import { H1 } from './navbarStyle'
import { P } from './navbarStyle'
import Hamburger from './assests/icon-park-outline_hamburger-button.svg'
import {NavbarMiddle} from './navbarStyle'
import { Hamburgers }  from './navbarStyle'
const NavbarComponent = () => {
  return (
    <Navbar>
<NavbarRight >
<Hamburgers><img src={Hamburger} alt="Hamburger" /></Hamburgers>
<Link to={"/"}>
<H1>Camper</H1></Link>
</NavbarRight>
<NavbarMiddle>
<NavbarRight>
<Link to={"/Motor"}>
<P>Motor</P>
</Link>
<img src={icon} alt="icon" />
<Link to={"/Caravan"}> 
<P>Caravan</P>
</Link>
<img src={icon} alt="icon" />
<Link to={"/Tuning"}>
<P>Tuning</P></Link>
<img src={icon} alt="icon" />
<Link to={"/UsedCar"}>
<P>Used Car</P>
</Link>
<img src={icon} alt="icon" />
<Link to={"/CampingPlace"}>
<P>Camping Place</P></Link>
</NavbarRight></NavbarMiddle>
<NavbarRight>
<img src={cart} alt="cart" />
<img src={user} alt="user" />
<p>Eng</p>
<img src={icon} alt="icon" />
</NavbarRight>
    </Navbar>
  )
}

export default NavbarComponent