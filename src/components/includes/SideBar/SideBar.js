import React from 'react'
import './SideBar.css'
import { Link } from 'react-router-dom'
import Logo from '../../../assets/images/Logo.svg'
import Menu from '../../../assets/images/Menu.svg'
import FoodSite from '../../../assets/images/Food-Site.svg'
import Favourites from '../../../assets/images/Favourites.svg'
import WhiteCard from '../../../assets/images/White-Card.svg'
import Cart from '../../../assets/images/Cart.svg'
import Settings from '../../../assets/images/Settings.svg'
import Profile from '../../../assets/images/Profile.svg'
import Support from '../../../assets/images/Support.svg'
import ProfilePhoto from '../../../assets/images/Profile-Photo.jpg'

function SideBar() {
  return (
    <div className='SideBar'>
      <div className='top'>
        <img src={Logo} alt="Logo" />
      </div>
      <div className='middle'>
        <Link to="/menu" className='iconContainer'><img src={Menu} alt="Menu icon" /></Link>
        <Link to="/foodSite" className='iconContainer'><img src={FoodSite} alt="Food site icon" /></Link>
        <Link to="/favourites" className='iconContainer'><img src={Favourites} alt="Favourites icon" /></Link>
        <Link to="/whiteCard" className='iconContainer'><img src={WhiteCard} alt="White card icon" /></Link>
        <Link to="/cart" className='iconContainer'><img src={Cart} alt="Cart icon" /></Link>
        <Link to="/settings" className='iconContainer'><img src={Settings} alt="Settings icon" /></Link>
        <Link to="/profile" className='iconContainer'><img src={Profile} alt="Profile icon" /></Link>
        <Link to="/support" className='iconContainer'><img src={Support} alt="Support icon" /></Link>
      </div>
      <div className='bottom'>
        <img src={ProfilePhoto} alt="Profile photo" />
      </div>
    </div>
  )
}

export default SideBar
