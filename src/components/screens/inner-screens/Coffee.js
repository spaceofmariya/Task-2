import React from 'react'
import '../../css/Meals.css'
import { CoffeeData } from '../../includes/Data'
import Dollar from '../../../assets/images/Dollar.svg'

function Coffee() {
  return (
    <div class='Breakfast'>
    {CoffeeData.map((item) => {
        return(
            <div className='foodItem'>
                <div className='foodImage'>
                    <img src={item.image} alt="Food image" />
                </div>
                <h4>Nasi Goreng Pak Parjo</h4>
                <div className='foodBoxBottom'>
                    <div className='price'>
                        <span className='currentPrice'><img src={Dollar} alt="dollar icon" />{item.value1}</span>
                        <span className='initialPrice'>${item.value2}</span>
                    </div>
                    <button className='order'>Order</button>
                </div>
            </div>
        )
    })}
</div>
  )
}

export default Coffee
