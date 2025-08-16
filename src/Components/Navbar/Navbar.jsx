import React from 'react' 
import './Navbar.css'
import {LuSearch} from "react-icons/lu";
import {LuUserRound} from "react-icons/lu";
import {LuShoppingCart} from "react-icons/lu";


const Navbar = () => {
  return (
    <div className='nav-bar'>
        <p>SHOPPER</p>
        <ul className="nav-menu">
            <li>About</li>
            <li>Online Fundraising</li>
            <li>Gallery</li>
            <li>Shop</li>
        </ul>
        <div> 
          <ul className="searchProfileCart">
            <li><LuSearch size={30}/></li>
            <li><LuUserRound size={30}/></li>
            <li><LuShoppingCart size={30}/></li>
          </ul>
        </div>
    </div>
  );
}

export default Navbar;