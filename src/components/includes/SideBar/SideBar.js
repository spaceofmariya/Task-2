import React from 'react'
import './SideBar.css'
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
        <div className='iconContainer'><img src={Menu} alt="Menu icon" /></div>
        <div className='iconContainer'><img src={FoodSite} alt="Food site icon" /></div>
        <div className='iconContainer'><img src={Favourites} alt="Favourites icon" /></div>
        <div className='iconContainer'><img src={WhiteCard} alt="White card icon" /></div>
        <div className='iconContainer'><img src={Cart} alt="Cart icon" /></div>
        <div className='iconContainer'><img src={Settings} alt="Settings icon" /></div>
        <div className='iconContainer'><img src={Profile} alt="Profile icon" /></div>
        <div className='iconContainer'><img src={Support} alt="Support icon" /></div>
      </div>
      <div className='bottom'>
        <img src={ProfilePhoto} alt="Profile photo" />
      </div>
    </div>
  )
}

export default SideBar
