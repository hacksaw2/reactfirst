import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {NavLink,Link} from 'react-router-dom'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import Signup from './LoginComponents/Signup'

function App() {
  const [count, setCount] = useState(0)
  const relativeRef = useRef()
  const visibilityRef = useRef()
  const invisibilityRef = useRef()
  const relativesRef =useRef()
  function handleClick1(){
   
    visibilityRef.current.style.visibility='hidden'
    invisibilityRef.current.style.visibility='visible'


    if(relativeRef.current.style.right='20'){

    
     relativeRef.current.style.right='0'
    }else if( relativeRef.current.style.right='0'){
    relativeRef.current.style.right='20'
}

   
    
  }
 
 
  

  return (
    <>
      <div className=' container  text-white  w-[100vw]  bg-black overflow-x-hidden'>


       <div className="navbar bg-gray-800 w-[100vw] h-12 text-white  ">
        <ul className='flex justify-around items-center w-screen'>
          {/* <li><NavLink to='/home' >Home </NavLink></li> */}
          {/* <button className="button bg-pink-500" onClick={handleClick1} ref={visibilityRef} >0</button> */}
          {/* <button className="button2 bg-pink-500 relative right-8 " onClick={handleClick1} ref={invisibilityRef} >X</button> */}
          
          <li className='bg-gray-500 text-black p-1 rounded-xl mt-1'>PlumbCorp</li>
          <NavLink to='/about'><li>About</li></NavLink>
          <NavLink to='/contact'><li>Contact Us</li></NavLink>
          <NavLink to='/register' className='bg-red-800 rounded-md p-2'>Signup</NavLink>
        </ul>
       </div>




       <div className="components flex">

<div className="sidenav  bg-gray-600 h-[95vh]    " >
 <Sidebar/>
</div>

<div className="w-[100vw]  " >
  <Outlet/>
</div>

       </div>





      </div>
    </>
  )
}

export default App
