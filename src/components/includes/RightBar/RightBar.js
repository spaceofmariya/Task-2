import React from 'react'
import './RightBar.css'
import CalenderIcon from '../../../assets/images/Calender-Icon.svg'
import DownArrow from '../../../assets/images/Down-Arrow.svg'
import Dollar from '../../../assets/images/Dollar.svg'
import { Breakfast, Lunch, Dinner } from '../Data'

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
        <div className='breakfast'>
          <div className='title'>
            <h5>Breakfast</h5>
            <span className='purchased'>Purchased</span>
          </div> 
          <span className='time'>06.30AM</span>
          <ul className='food'>
            {Breakfast.map((item) => {
              return(
                <li key={item.id}>
                  <div className='foodBox'><img src={item.image} alt="food" /></div>
                  <div className='textBox'>
                    <h6>Nasi Padang Patikraja</h6>
                    <div className='price'>
                      <span className='currentPrice'><span className='dollarBox'><img src={Dollar} alt="dollar icon" /></span>8,10</span>
                      <span className='initialPrice'>$10,10</span>
                    </div>
                  </div>
                </li>
              )
            })}  
          </ul>
        </div>

        <div className='lunch'>
          <div className='title'>
            <h5>Lunch</h5>
            <span className='ordered'>Being ordered</span>
          </div> 
          <span className='time'>01.30PM</span>
          <ul className='food'>
            {Lunch.map((item) => {
              return(
                <li key={item.id}>
                  <div className='foodBox'><img src={item.image} alt="food" /></div>
                  <div className='textBox'>
                    <h6>Nasi Padang Patikraja</h6>
                    <div className='price'>
                      <span className='currentPrice'><span className='dollarBox'><img src={Dollar} alt="dollar icon" /></span>8,10</span>
                      <span className='initialPrice'>$10,10</span>
                    </div>
                  </div>
                </li>
              )
            })}  
          </ul>
        </div>

        <div className='dinner'>
          <div className='title'>
            <h5>Dinner</h5>
            <span className='not_ordered'>Haven't ordered yet</span>
          </div> 
          <span className='time'>08.30PM</span>
          <ul className='food'>
            {Dinner.map((item) => {
              return(
                <li key={item.id}>
                  <div className='foodBox'><img src={item.image} alt="food" /></div>
                  <div className='textBox'>
                    <h6>Nasi Padang Patikraja</h6>
                    <div className='price'>
                      <span className='currentPrice'><span className='dollarBox'><img src={Dollar} alt="dollar icon" /></span>8,10</span>
                      <span className='initialPrice'>$10,10</span>
                    </div>
                  </div>
                </li>
              )
            })}  
          </ul>
        </div>
      </div>
      
      <div className='add'>
        <a href='#'>Drop here to add</a>
      </div>
    </div>
  )
}

export default RightBar
