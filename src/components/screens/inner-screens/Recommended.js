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
            {/* <div className='price'>
                <h5 className='currentPrice'><span className='dollar'><img src={Dollar} alt="dollar sign" />8,10</span></h5><h6 className='initialPrice'><span>$10,10</span></h6>
            </div> */}
            <div className='price'>
                <span className='currentPrice'><span className='dollarBox'><img src={Dollar} alt="dollar icon" /></span>{item.value1}</span>
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

export default Recommended
