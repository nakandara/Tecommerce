import React from 'react';
///import {Link} from "react-router-dom";
import {MenuList} from "../helpers/MenuList";
import MenuItem from "../Components/MenuItem";
import "../style/Menu.css";


function Menu() {
    return (
        <div className ="menu" >
            <h1 className ="menuTitle">Our Menu</h1>
            <div className ='menuList'>{ MenuList.map((menuItem,key)=>{
                return  (
                    <MenuItem
                        key={key}
                        image={menuItem.image}
                        name = {menuItem.name}
                        price ={menuItem.price}
                    
                    />
                )
            })}
            </div>
           
        </div>
    )
}

export default Menu;
