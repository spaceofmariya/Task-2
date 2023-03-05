import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Menudata } from '../includes/Data';
import styled from 'styled-components';

function Menu() {
  const [activeId, setActiveId] = useState();
  return (
    <>
    <MenuBox className='Menu'>
      <MenuHeading>Find the menu you want</MenuHeading>
      <MealsNavBox className='mealsNav'>
        <MealsNavBar>
          <ListBox>
            <ListItem><NavLink className={({isActive}) => isActive?"active":""} to="/menu/recommended" style={{color:"#777", textDecoration:"none", fontSize:"20px"}}>Recommended</NavLink></ListItem>
            <ListItem><NavLink className={({isActive}) => isActive?"active":""} to="/menu/breakfast" style={{color:"#777", textDecoration:"none", fontSize:"20px"}}>Breakfast</NavLink></ListItem>
            <ListItem><NavLink className={({isActive}) => isActive?"active":""} to="/menu/lunch" style={{color:"#777", textDecoration:"none", fontSize:"20px"}}>Lunch</NavLink></ListItem>
            <ListItem><NavLink className={({isActive}) => isActive?"active":""} to="/menu/dinner" style={{color:"#777", textDecoration:"none", fontSize:"20px"}}>Dinner</NavLink></ListItem>
            <ListItem><NavLink className={({isActive}) => isActive?"active":""} to="/menu/iceCream" style={{color:"#777", textDecoration:"none", fontSize:"20px"}}>Icecream</NavLink></ListItem>
            <ListItem><NavLink className={({isActive}) => isActive?"active":""} to="/menu/coffee" style={{color:"#777", textDecoration:"none", fontSize:"20px"}}>Coffee</NavLink></ListItem> 
          </ListBox>
        </MealsNavBar>
      </MealsNavBox>
    </MenuBox>
    <Outlet />
    </>
  );
};

export default Menu;

const MenuBox = styled.div`
    position: absolute;
    top: 17%;
    left: 9%;
    font-size: 50px;
    width: 67.5%;
    @media all and (max-width:1380px) {
      top: 15%;
    }
`;
const MenuHeading = styled.h3`
    font-family: 'Inter-SemiBold';
    font-size: 32px;
    margin-bottom: 1.5%;
    @media all and (max-width:1380px) {
      font-size: 24px;
    }
`;
const MealsNavBox = styled.div`
    font-size: 0;
`;
const MealsNavBar = styled.nav`
    width: 100%;
`;
const ListBox = styled.ul`
    display: flex;
    width: 100%;
    border-bottom: 2px solid #ddd;
`;
const ListItem = styled.li`
    margin-right: 5%;
    padding: 0.6% 1% 0.6%;
`;
