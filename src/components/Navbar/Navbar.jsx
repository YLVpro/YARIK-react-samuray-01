import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/navbar" activeClassName={s.active}>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/header" activeClassName={s.active}>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
        </div>
        <div className={s.item}>
        <NavLink to="/friends" activeClassName={s.active}><h1>Friends</h1></NavLink>
        </div>
    
    <div className={s.kolo}>
       <div className={s.kolo} activeClassName={s.active}>
        <NavLink to="/anya">Anya</NavLink>
         </div>
        <div className={s.kolo} activeClassName={s.active}>
        <NavLink to="/petya">Petya</NavLink>
        </div>
        <div className={s.kolo} activeClassName={s.active}>
        <NavLink to="/vasya">Vasya</NavLink>
        </div>
</div>
    
    </nav>
}

export default Navbar;
