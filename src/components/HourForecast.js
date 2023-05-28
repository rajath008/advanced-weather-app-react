import React from 'react'
import { iconUrlFromCode } from '../service/WeatherService'

function HourForecast({title,items}) {
  return (
    <div>
        <div className="flex items-center justify-center mt-12">
            <p className="text-white font-medium uppercase">{title}</p>
        </div>
        <hr className="my-2" />

        <div className="flex flex-row items-center justify-between text-white">
          {items.map((item)=>{
            return(
              <div className="flex flex-col items-center justify-center">
              <p className="fonr-light text-sm">{item.title}</p>
              <img src={iconUrlFromCode(item.icon)} alt="" className='w-12'/>
              <p className="fonr-light text-sm">{`${item.temp.toFixed()}°`}</p>
              </div>
            )
          })}
           
            
        </div>
    </div>
  )
}

export default HourForecast