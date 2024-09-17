


import { useState} from "react";
import {Link} from "react-router-dom"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Signup(){
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()


    const navigate = useNavigate()


    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/register',{name,email,password})
        .then(result=>{ console.log(result)
            
                navigate('/login')
            
           
        })
        .catch(err=> console.log(err))

        
    }

    function handleClick(){
        alert("You have successfully signed in");
    }
    

        
    

    return(  
        <div className="container flex justify-center items-center w-[84vw] h-[90vh]">
        <div className= "d-flex justify-content-center align-items-center bg-secondary  text-black w-[30vw] ">
            <div className="bg-blue-300 rounded w-25 p-8">
                <h2 className="text-3xl mb-4 text-center">Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong className="text-xl ">Name:</strong>
                        </label>
                        <input
                        type="text"
                        placeholder="Enter Name"
                        autoComplete="off"
                        name="email"
                        className="form-control rounded-md w-60 ml-10 text-center border-2 border-black"
                        onChange={(e)=> setName(e.target.value)}
                        />
                        
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong className="text-xl">Email:</strong>
                        </label>
                        <input
                        type="email"
                        placeholder="Enter email"
                        autoComplete="off"
                        name="email"
                        className="form-control ml-10  rounded-md text-center border-2 border-black"
                        onChange={(e)=> setEmail(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email">
                                <strong className="text-xl ">Password :</strong>
                            </label>
                            <input
                            type="password"
                            placeholder="Enter Password"
                            name="password"
                            className="form-control  ml-10 rounded-md text-center border-2 border-black"
                            onChange={(e)=> setPassword(e.target.value)}
                            />

                            </div>

                            <button onClick={handleClick} type="submit" className="btn btn-success w-100 rounded-md bg-red-600 mb-2 p-1">
                                Register
                            </button>
                            </form>
                            <p className="mb-2 ">Already Have an Account</p>
                            <NavLink   to='./login' className="btn  border    bg-red-600 p-1 rounded-md ">
                                Login
                            </NavLink>
                            
                            

                            </div>

                    </div>
            
                    </div>
    
    );
}

export default Signup;
