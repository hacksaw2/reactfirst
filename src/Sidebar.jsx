import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className=''> 
       <ul className='p-5     '>
    <li className='mb-3 bg-gray-400 text-black text-center rounded-md '><NavLink to='/flights'  >Flights</NavLink></li>
    <li className='mb-3  bg-gray-400 text-black text-center rounded-md'><NavLink to='/trains'>Trains</NavLink> </li>     
    <li className='mb-3  bg-gray-400 text-black text-center rounded-md'><NavLink to='/hotels'>Hotels</NavLink></li>
    <li className='mb-3  bg-gray-400 text-black text-center rounded-md'><NavLink to='/destination'>Destinations</NavLink> </li> 
  
    
  </ul>
    </div>
  )
}

export default Sidebar
