import React from 'react'
import './RightBar.css'
import CalenderIcon from '../../../assets/images/Calender-Icon.svg'
import DownArrow from '../../../assets/images/Down-Arrow.svg'
import BreakFast1 from '../../../assets/images/Breakfast1.jpg'
import Dollar from '../../../assets/images/Dollar.svg'

function RightBar() {
  return (
    <div className="RightBar">
      <h4>Your meal plan</h4>
      <div className='daySelector'>
        <div className='iconBox'>
          <img src={CalenderIcon} alt="Calender icon" />
        </div>
        <div className='day'>Today, 08 Aug 2022</div>
        <div className='arrowBox'>
          <img src={DownArrow} alt="Down arrow" />
        </div>
      </div>

      <div className='meal'>
        <div className='title'>
          <h5>Breakfast</h5>
          <span className='purchased'>Purchased</span>
        </div> 
        <span className='time'>06.30AM</span>
        <ul className='foodItem'>
          <li>
            <div className='foodBox'><img src={BreakFast1} alt="food" /></div>
            <div className='textBox'>
              <h6>Nasi Padang Patikraja</h6>
              <div className='price'>
                <span className='currentPrice'><span className='dollarBox'><img src={Dollar} alt="dollar icon" /></span>8,10</span>
                <span className='initialPrice'>$10,10</span>
                </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default RightBar
