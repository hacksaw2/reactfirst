import React from 'react'
import CardxTrains from './CardxTrains'
import Footer from './Footer'


const Trains = () => {
  return (
   <>
   <div className='flex justify-center items-center mt-10 w-[90vw]'>
    <label htmlFor='PNR'>
<strong className='text-2xl'>PNR ENQUIRY :</strong>
    </label>
    <input
    placeholder='Enter PNR No.'
    name='PNR'
    type='text'
className='text-black ml-10'
    
    />
       <button className='bg-red-800 p-2 rounded-md flex justify-center ml-6'>Submit</button>
       

       
       
       
    </div>
    <div className="cards justify-center w-[90vw] items-center flex  gap-6 mt-6">
    <CardxTrains/>
    <CardxTrains/>
    </div>
    <div className="footer mt-[18vh]">
    <Footer/>
    </div>
    
 </>
  )
}

export default Trains
