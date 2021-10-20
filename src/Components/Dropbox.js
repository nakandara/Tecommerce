import React from 'react';
import  {useState} from  'react';
import '../style/Dropdown.css';

function Dropbox({selected,setSelected}) {
    const [ isActive,setIsActive] =useState(false);
    return (
        <div className="dropdown">
           <div className="dropdown-btn" onClick={(e) => setIsActive (!isActive)}>Choose One</div> 
            <div className ="dropdown-content">
        <span className = "fas fa-create-down"> </span>

            </div>
           {isActive && (
               <div className ="dropdown-content">
        <div onClick = {e => setSelected(e.target.textContent)} className = "dropdown-item">  React    </div>        
        <div className = "dropdown-item"> Outfits & Sets </div>
         <div className = "dropdown-item">  Activewear </div>
          <div className = "dropdown-item">  Coats, Jackets & Vests  </div>
           <div className = "dropdown-item">  Pants </div>
            <div className = "dropdown-item">Shorts </div>
             <div className = "dropdown-item"> Skirts </div>
              <div className = "dropdown-item">Suits & Suit Separates </div>
               <div className = "dropdown-item">Swimwear </div>
            
             
            </div>  
           )}
        </div>
    )
}

export default Dropbox






