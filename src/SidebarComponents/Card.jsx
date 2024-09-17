import React from 'react'
import { NavLink } from 'react-router-dom'

const Card = ({list}) => {
  return (
    <>
    {list.map(todo=>{

        return <div key={todo.id} className='border mb-10 p-2 w-[26vw] '>
       
<img className='h-40 w-[25vw] border-2 border-gray-400' src={todo.imageUrl} alt={todo.title}/>
<div className="x flex gap-32 mt-4">
  <div className="y">
            <div className='title bg-gray-400 text-black rounded-md text-center mb-1'>{todo.title}</div>
            <div className='body'>{todo.body}</div>
            </div>
          <NavLink to='/register'>  <div className="button bg-red-800 rounded-md p-1 h-8 mt-2">Book Now  </div></NavLink>
            </div>
            
            
        </div>

    })}
    
  
    
    
    </>
  )
}

export default Card
