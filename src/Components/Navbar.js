import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate()
    const loggingOut = () => {
        alert("You sure, want to logout?")
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        navigate("/")
    }
  return (
    <div className='w-100 navbar_container'>
       
       <div>
           <button className='btn btn-danger my-5' onClick={loggingOut}>Logout</button>
       </div>
    </div>
  )
}

export default Navbar