import React,{useState} from 'react';
import Logo from '../assets/t12.jpg';
import { Link } from 'react-router-dom';
import "../style/Navbar.css";
import ReorderIcon from '@mui/icons-material/Reorder';
import Dropbox from './Dropbox';






function Navbar() {

 const [ selected ,setSelected]  = useState("");

const [openLinks,setOpenLinks] = useState(false);

const toggleNavbar = () =>{
    setOpenLinks(!openLinks);
}


    return (
        <div className="navbar">
            <div className="leftSide" id ={openLinks ? "open" : "close"}>
            
            <img src ={Logo}/>
            
            <div className="hiddenLinks">
               
            <Link to="/">Home</Link>
            
             <Link to ="/menu">Menu</Link>
             <Link to ="/about"> About</Link>  
            <Link to ="/contact">Contact</Link>
           
            
            </div>
                
            </div>
               
            <div className="rightSide">
             <Link to="/">Home</Link> 
             <Link to ="/menu">Menu</Link>
             <Link to ="/about"> About</Link>  
            <Link to ="/contact">Contact</Link>
              <Dropbox selected = {selected} setSelected = {setSelected}/>
            <button onClick={toggleNavbar} >
                <ReorderIcon/>
            </button>
            
            </div>

           
        </div>
        
    )
}

export default Navbar
