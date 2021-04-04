import React from 'react';
import c from './Navbar.module.css';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return <nav className={c.nav}>
        <div className={c.item}>
            <NavLink to="/profile" activeClassName={c.active}>Profile</NavLink>
        </div>
        <div className={`${c.item} ${c.active}`}>
            <NavLink to="/dialogs" activeClassName={c.active}>Messages</NavLink>
        </div>
        <div className={c.item}>
            <NavLink to="/navbar" activeClassName={c.active}>News</NavLink>
        </div>
        <div className={c.item}>
            <NavLink to="/header" activeClassName={c.active}>Music</NavLink>
        </div>
        <div className={c.item}>
            <NavLink to="/settings" activeClassName={c.active}>Settings</NavLink>
        </div>
        <div className={c.item}>
        <NavLink to="/friends" activeClassName={c.active}><h1>Friends</h1></NavLink>
        </div>
    
    <div className={c.kolo}>
       <div className={c.kolo} activeClassName={c.active}>
        <NavLink to="/anya">Anya</NavLink>
         </div>
        <div className={c.kolo} activeClassName={c.active}>
        <NavLink to="/petya">Petya</NavLink>
        </div>
        <div className={c.kolo} activeClassName={c.active}>
        <NavLink to="/vasya">Vasya</NavLink>
        </div>
</div>
    
    </nav>
}

export default Navbar;
