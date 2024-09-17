import React from 'react'
import { useState } from 'react'
import Card from './card'
import { Dropdown } from 'bootstrap'
import Footer from './Footer'
import  img1 from './exchange.png'
import { NavLink } from 'react-router-dom'

function Flights(){

  const [list, setList] = useState([


    {
      imageUrl:"https://media.istockphoto.com/id/184347141/photo/white-mid-sized-passenger-jet-airplane.jpg?s=612x612&w=0&k=20&c=zC3XlGIBEbvZPl5Tw5qHI--urtYc58ekHUZwuz-IYDY=",
      title:' Indigo Airlines',
      body:'Lucknow to Delhi',
    },
    {
      imageUrl:" https://media.istockphoto.com/id/626867464/photo/booking-flight-travel-traveler-search-reservation-holiday-page.jpg?s=612x612&w=0&k=20&c=8I9qa7CjVELa_Wof5z1I1r2QL6208_VnUwNIsH1_5Rk=",
      title:"Vistara",
      body:"Delhi to New York",
    },
    {
      imageUrl:"https://media.istockphoto.com/id/825417418/photo/spicejet-boeing-737.jpg?s=612x612&w=0&k=20&c=OvYsaXN-kXUY8xaMtvf2sdv0nqNyZG2f66MqSqnVLxA=",
      title:"Spice jet",
      body:"Mumbai to Dubai"
    }

  ])

  return(
    <>
    <div className='flex gap-3 h-72 ml-16  mt-10 ' >
      <Card list={list}/>
      
      
    </div>
    <div className="container w-[80vw] border-2 border-gray-400 h-40 ml-16 flex ">
      <div className="box1 w-[40vw] bg-red-500 flex justify-center items-center gap-3">
        <p className='text-black text-2xl'>FROM -</p>
   <select className='text-black w-20 h-8'>

    <option>Mumbai</option>
<option>Delhi</option>
<option>Rajasthan</option>
    
    
   </select>
   </div>
   
   <div className="box2 w-[40vw] bg-blue-300 flex justify-center items-center gap-3">
    <p className='text-black text-2xl'>TO -</p>
    <select className='text-black w-20'>
      <option>Mumbai</option>
      <option>Delhi</option>
      <option>Rajasthan</option>
      <img src={img1} className='text-white'/>
    </select>
   </div>
    </div >
   <NavLink> <button className='ml-[39vw] mt-9 bg-white text-black rounded-lg p-3 w-40 h-10 text-lg relative bottom-32 flex justify-center items-center border-black border-2'>Search</button></NavLink>
    <Footer/>
    </>
  )

}

export default Flights