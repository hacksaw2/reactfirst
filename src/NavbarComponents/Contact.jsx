import React from 'react';

const Contact = () => {
  return (
    <div className='text-white w-[90vw] h-[95vh] bg-blue-400 flex items-center justify-center border-dashed border-2 border-red-400'>
      <div className="content bg-red-400 w-[50vw] h-[60vh] text-black p-10 border-black border-1  rounded-3xl text-2xl   ">
      <h className=' text-3xl text-center '>Contact Details:</h>
      <div className="details border-2 mt-10 p-6 rounded-lg">
    <div className="number mb-2">
        Phone Nummber:+916388023485
         
         </div>

         <div className="email mb-2">
            Email:wesaurabhverma@gmail.com
         </div>

         <div className="insta mb-2">
            Instagram Id : saurabhverma@gmail.com
         </div>
         <div className="address mb-2">
            Address: RAJKIYA ENZINEERING COLLEGE , NAUPUR , DEOGAON ,  AZAMGARH 
         </div>
     
         </div>
      </div>
    </div>
  );
};

export default Contact;
