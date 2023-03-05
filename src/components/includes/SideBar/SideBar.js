import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Logo from '../../../assets/images/Logo.svg'
import { ReactComponent as Menu } from '../../../assets/images/Menu.svg'
import { ReactComponent as FoodSite } from '../../../assets/images/Food-Site.svg'
import { ReactComponent as Favourites } from '../../../assets/images/Favourites.svg'
import { ReactComponent as WhiteCard } from '../../../assets/images/White-Card.svg'
import { ReactComponent as Cart } from '../../../assets/images/Cart.svg'
import { ReactComponent as Settings } from '../../../assets/images/Settings.svg'
import { ReactComponent as Profile } from '../../../assets/images/Profile.svg'
import { ReactComponent as Support } from '../../../assets/images/Support.svg'
import ProfilePhoto from '../../../assets/images/Profile-Photo.jpg'

function SideBar() {
  return (
    <Sidebar className='SideBar'>
      <Top className='top'>
        <LogoImage src={Logo} alt="Logo" />
      </Top>
      <Middle className='middle'>
        <MidItem1><Link to="/menu" className='iconContainer'><Menu /></Link></MidItem1>
        <MidItem2><Link to="/foodSite" className='iconContainer'><FoodSite /></Link></MidItem2>
        <MidItem3><Link to="/favourites" className='iconContainer'><Favourites /></Link></MidItem3>
        <MidItem4><Link to="/whiteCard" className='iconContainer'><WhiteCard /></Link></MidItem4>
        <MidItem5><Link to="/cart" className='iconContainer'><Cart /></Link></MidItem5>
        <MidItem6><Link to="/settings" className='iconContainer'><Settings /></Link></MidItem6>
        <MidItem7><Link to="/profile" className='iconContainer'><Profile /></Link></MidItem7>
        <MidItem8><Link to="/support" className='iconContainer'><Support /></Link></MidItem8>
      </Middle>
      <Bottom className='bottom'>
        <PersonImage src={ProfilePhoto} alt="Profile photo" />
      </Bottom>
    </Sidebar>
  )
}

export default SideBar

const Sidebar = styled.div`
    height:100vh;
    padding: 20% 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    @media all and (max-width:1380px) {
       padding: 25% 0;
  }
`;
const Top = styled.div`
    width: 52%;
`;
const LogoImage = styled.img`
    width: 100%;
`;
const Middle = styled.ul`
    background-color: #F46801;
    width: 60%;
    padding: 13% 0;
    margin: auto;
    border-radius: 50px;
    display: flex;
    align-items: center;
    flex-direction: column;
`;
const MidItem1 = styled.li`
    padding: 20%;
    @media all and (max-width:1380px) {
      padding: 25%;
    }
`;
const MidItem2 = styled(MidItem1)``;
const MidItem3 = styled(MidItem1)``;
const MidItem4 = styled(MidItem1)``;
const MidItem5 = styled(MidItem1)``;
const MidItem6 = styled(MidItem1)``;
const MidItem7 = styled(MidItem1)``;
const MidItem8 = styled(MidItem1)``;
const Bottom = styled.div`
    width: 52%;
    margin: 0 auto;
`;
const PersonImage = styled.img`
    width: 100%;
    border-radius: 50%;
`;