import React, { useState, useEffect } from 'react';
import Image from './home.jpg';
import Image2 from './flight.jpg';
import axios from 'axios';

function Home() {
  const [employees, setEmployees] = useState([]);
  
  useEffect(() => {
    const loggedInUserEmail = localStorage.getItem('loggedInUserEmail');
    // console.log('Logged In User Email from localStorage:', loggedInUserEmail);

    if (!loggedInUserEmail) {
      console.log('No logged-in user found');
      return;
    }

    axios.get('http://localhost:3001/home')
      .then(response => {
        const allEmployees = response.data;
        // console.log('All Employees:', allEmployees); // Debugging

        // Filter to get the logged-in user's data directly using localStorage value
        const loggedInEmployee = allEmployees.filter(user => 
          user.email.trim().toLowerCase() === loggedInUserEmail.trim().toLowerCase()
        );
        // console.log('Logged In Employee:', loggedInEmployee); // Debugging

        // Set the filtered employee data
        setEmployees(loggedInEmployee);
      })
      .catch(err => console.error('Error fetching data:', err));
  }, []);

  return (
    <>
      <div className='flex'>
        <img className='w-60 rounded-3xl border-dotted border-gray-500 border-[3px] ml-10 mt-10' src={Image} alt='home' />
        <div className="welcome">
          <h1 className='font-bold text-4xl ml-48 mt-2'>Welcome to CorpPLuck</h1>
          <p className='w-[45vw] ml-16 mt-5 text-center'>
            Discover the world one adventure at a time.<br />
            Let us guide you to breathtaking destinations, unforgettable experiences, and the journey of a lifetime.<br />
            Your adventure starts here!<br />
            Feel free to personalize it further to match the tone and style of your website!
          </p>
          <div className="line bg-white w-[40vw] h-[1px] ml-24 mt-10"></div>
        </div>
        <img className='w-60 rounded-3xl border-dotted border-gray-500 border-[3px] ml-8 mt-10' src={Image2} alt='home' />
      </div>
      <h2 className='ml-[39vw] text-2xl mb-2'>User's Profile</h2>
      <div className="box flex  text-white  justify-center items-center border-white w-[25vw] border-[2px] h-48 ml-[31vw]  rounded-md ">
        
        {employees.length > 0 ? (
          employees.map((user, index) => (
            
            <div className=' rounded-md gap-1 flex' key={index}>
             <div className="container1 bg-blue-300 w-[10vw] h-20 rounded-md text-black break-words justify-center p-2
              "  ><p className='mt-2'>{user.email}</p></div>
             <div className="container2 bg-red-500 w-[10vw] h-20 rounded-md text-black flex justify-center items-start "><p className='mt-4'> {user.name}</p></div>
            </div>
          ))
        ) : (
          <p>No data available for the logged-in user.</p>
        )}
      </div>
    </>
  );
}

export default Home;