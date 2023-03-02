import React from 'react'
import './MainSpace.css'
import { Link } from 'react-router-dom'
import { MenuData } from '../Data'
import { ReactComponent as SearchIcon } from '../../../assets/images/Search.svg'

function MainSpace() {
  return (
    <div className='MainSpace'>

      <div className='welcome'>
        <h1>Welcome, Epan Danis!</h1>
        <span>Don't forget to have breakfast today yeahhh!</span>
      </div>

      <nav className='menuBox'>
            <ul className="menu">
              <li style={{ backgroundColor:'#f46801' }}><a href="/" style={{ color:"#fff" }} >Menu</a></li>
              <li style={{ backgroundColor:'#eeeeee' }}><a href="/" style={{ color:'#777' }}>Meal plans</a></li>
              <li style={{ backgroundColor:'#eeeeee' }}><a href="/" style={{ color:'#777' }}>Delivery</a></li>
            </ul> 
            </nav> 
     
      <div className='search'><span className='searchText'>Search your food...</span><span className='searchIcon'><SearchIcon /></span></div>

    </div>
  )
}

export default MainSpace
