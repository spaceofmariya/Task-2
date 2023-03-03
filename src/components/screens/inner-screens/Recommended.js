import React from 'react'
import '../../css/Meals.css'
import Image from '../../../assets/images/Recommended1.jpg'
import Dollar from '../../../assets/images/Dollar.svg'
import { RecommendedData } from '../../includes/Data'

function Recommended() {
  return (
    <div class='Recommended'>
        {RecommendedData.map((item) => {
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
                    {/* <span className='dollarBox'></span> */}
                </div>
            )
        })}
    </div>
  )
}

export default Recommended
