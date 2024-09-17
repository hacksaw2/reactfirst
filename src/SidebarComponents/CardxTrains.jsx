import React from 'react'
import { NavLink } from 'react-router-dom'

const CardxTrains = () => {
  return (
    <>


         <div  className='border mb-10 p-2 w-[35vw] h-[40vh] mt-[10vh] '>
       <div className="n flex justify-center p-4">
<img  src='https://media.gettyimages.com/id/600190566/photo/new-delhi-india-february-11-railway-train-engines-on-the-tracks-at-new-delhi-station-on.jpg?s=612x612&w=0&k=20&c=4uiThxksIzV2_hHkPenLCP5FI7uqRjidVKGdDlauDKY='  className='h-48 w-[25vw] border-2 border-gray-400  ' />
</div>
<div className="x flex gap-32  justify-center items-center">
         
 
          <NavLink to='/register'>  <div className="button bg-red-800 rounded-md p-1 h-8 mt-2">Book Now  </div></NavLink>
            </div>
            
            
        </div>

    
    
  
    
    
    </>
  )
}

export default CardxTrains
