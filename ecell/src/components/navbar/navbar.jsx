import React , {useState , useRef} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
const Navbar = () => {

    const[menu,setmenu]=useState("grid");
    const menuRef= useRef();
  return (
    
    <div className ='navbar'>
        
       <ul ref={menuRef} className="nav-menu">
            <li onClick={()=>{setmenu("home")}}><Link style={{textDecoration:'none'}}to='/home'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
            <li onClick={()=>{setmenu("grid")}}><Link style={{textDecoration:'none'}}to='/'>Grid</Link>{menu==="grid"?<hr/>:<></>}</li>
            <li onClick={()=>{setmenu("linkdin")}}><a href="https://www.linkedin.com/in/sneha-chaudhary-b85a49320" target="_blank">Linkedln</a>{menu==="linkdin"?<hr/>:<></>}</li>

        </ul>
    </div>
  )
}

export default Navbar