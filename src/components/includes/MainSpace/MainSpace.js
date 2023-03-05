import React from 'react'
import { NavLink } from 'react-router-dom'
import { MenuData } from '../Data'
import { ReactComponent as SearchIcon } from '../../../assets/images/Search.svg'
import styled from 'styled-components'

function MainSpace() {
  return (
    <Mainspace className='MainSpace'>

      <WelcomeDiv className='welcome'>
        <Title>Welcome, Epan Danis!</Title>
        <SubTitle>Don't forget to have breakfast today yeahhh!</SubTitle>
      </WelcomeDiv>
      
      <HeaderMenu className='menu'>
        <MenuContainer className='menuContainer'>
          <Menu1 className='menuBox' style={{ backgroundColor:'#f46801' }}><NavLink1 to="/" style={{ color:"#fff" }}>Menu</NavLink1></Menu1>
          <Menu2 className='menuBox' style={{ backgroundColor:'#eeeeee' }}><NavLink2 to="/" style={{ color:"#777" }}>Meal plans</NavLink2></Menu2>
          <Menu3 className='menuBox' style={{ backgroundColor:'#eeeeee' }}><NavLink3 to="/" style={{ color:"#777" }}>Delivery</NavLink3></Menu3>
        </MenuContainer>
      </HeaderMenu>
     
      <SearchBar className='search'><SearchText className='searchText'>Search your food...</SearchText><SearchIconBox className='searchIcon'><SearchIcon /></SearchIconBox></SearchBar>

    </Mainspace>
  )
}

export default MainSpace

const Mainspace = styled.div`
    height: 130px; 
    font-family: 'Inter-SemiBold';
    padding: 1.5% 0;
    display: flex;
    align-items: center;
    @media all and (max-width:1380px) {
      height: 120px;
    }
    @media all and (max-width:1080px){
      display: block;
    }
    @media all and (max-width:1080px) {
      padding-top: 3%;
    }
`;
const WelcomeDiv = styled.div`
    margin-right: 6%;
    @media all and (max-width:1380px) {
      margin-right: 5%;
      width: 30%;
    }
    @media all and (max-width:1080px){
      width: 50%;
    }
`;
const Title = styled.h1`
    margin-bottom: 13px;
    font-size: 34px;
    @media all and (max-width:1380px) {
      font-size:24px;
      margin-bottom: 8px;
    }
    @media all and (max-width:1080px){
      font-size: 27px;
      margin-bottom: 7px;
    }
`;
const SubTitle = styled.span`
    color: #777;
    font-size: 16px;
    @media all and (max-width:1380px) {
      font-size: 12px;
    }
    @media all and (max-width:1080px){
      font-size: 14px;
    }
`;
const HeaderMenu = styled.nav`
    width: 40%;
`;
const MenuContainer = styled.ul`
    display: flex;
    @media all and (max-width:1080px){
      position: absolute;
      top: 2%;
      right: 30%;
    }
`;
const Menu1 = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    padding: 3% 5%;
    margin-right: 6%;
    font-size: 18px;
    font-family: 'Inter-Regular';
    @media all and (max-width:1380px) {
      padding: 2.7% 4%;
      font-size: 16px;
    }
    @media all and (max-width:1080px){
      padding: 1% 7%;
      font-size: 16px;
    }
`;
const Menu2 = styled(Menu1)``;
const Menu3 = styled(Menu1)``;
const NavLink1 = styled(NavLink)`
      @media all and (max-width:1080px){
        // font-size: 10px;
      }
`;
const NavLink2 = styled(NavLink1)``;
const NavLink3 = styled(NavLink1)``;

const SearchBar = styled.div`
    background-color: #eee;
    border-radius: 30px;
    padding: 1% 1.8%;
    display: flex;
    align-items: center;
    font-family: 'Inter-Regular';
    @media all and (max-width:1380px) {
      padding: 0.7% 1.8%;
    }
    @media all and (max-width:1080px){
      display: inline-block;
      position: absolute;
      top: 9%;
      right:25%;
    }
    
`;
const SearchText = styled.span`
    color:#777;
    font-size: 18px;
    margin-right: 10px;
    @media all and (max-width:1380px) {
      font-size: 16px;
    }
    @media all and (max-width:1380px) {
      font-size: 16px;
    }
  
`;
const SearchIconBox = styled.span``;
