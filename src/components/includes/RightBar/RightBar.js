import React from 'react'
import './RightBar.css'
import CalenderIcon from '../../../assets/images/Calender-Icon.svg'
import DownArrow from '../../../assets/images/Down-Arrow.svg'

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
    </div>
  )
}

export default RightBar
