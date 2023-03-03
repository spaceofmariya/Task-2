import React from 'react'
import '../css/Menu.css'
import { NavLink, Outlet } from 'react-router-dom'

function Menu() {
  return (
    <>
    <div className='Menu'>
      <h3>Find the menu you want</h3>
      <div className='mealsNav'>
        <nav>
          <ul>
            <li><NavLink className={({isActive}) => isActive?"active":""} to="recommended" style={{color:"#777", textDecoration:"none", fontSize:"22px"}}>Recommended</NavLink></li>
            <li><NavLink className={({isActive}) => isActive?"active":""} to="breakfast" style={{color:"#777", textDecoration:"none", fontSize:"22px"}}>Breakfast</NavLink></li>
            <li><NavLink className={({isActive}) => isActive?"active":""} to="lunch" style={{color:"#777", textDecoration:"none", fontSize:"22px"}}>Lunch</NavLink></li>
            <li><NavLink className={({isActive}) => isActive?"active":""} to="dinner" style={{color:"#777", textDecoration:"none", fontSize:"22px"}}>Dinner</NavLink></li>
            <li><NavLink className={({isActive}) => isActive?"active":""} to="iceCream" style={{color:"#777", textDecoration:"none", fontSize:"22px"}}>Ice Cream</NavLink></li>
            <li><NavLink className={({isActive}) => isActive?"active":""} to="coffee" style={{color:"#777", textDecoration:"none", fontSize:"22px"}}>Coffee</NavLink></li>
          </ul>
        </nav>
      </div>
    </div>
    <Outlet />
    </>
  )
}

export default Menu
