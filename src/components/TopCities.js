import React from 'react'


function TopCities({setQuery}) {
    const cities=[
        {
            id:1,
            title:'Bengaluru'
        },
        {
            id:2,
            title:'Mumbai'
        },
        {
            id:3,
            title:'Delhi'
        },
        {
            id:4,
            title:'Chennai'
        },
        {
            id:5,
            title:'Hyderabad'
        }
    ]
    return (
        <div className="flex items-center justify-around my-6">
            {cities.map((city)=>(
               <button key={city.id} className="text-white text-lg font-medium" onClick={()=>setQuery({q:city.title})}>{city.title}</button>
            ))}
        </div>
  )
}

export default TopCities