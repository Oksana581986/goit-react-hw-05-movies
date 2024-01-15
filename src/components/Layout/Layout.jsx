import React from 'react';
import { NavLink, Outlet  } from 'react-router-dom';
import css from "components/App.module.css";


const Layout = ({ children} ) => {
  return (
    <div>
    <header className={css.header}>
      <NavLink className={({ isActive }) =>`${css.navLink} ${isActive ? css.active : ''}`} to="/"> Home</NavLink>
      <NavLink className={({ isActive }) =>`${css.navLink} ${isActive ? css.active : ''}`} to="/movies">Movies</NavLink>
    </header>

<main> 
  {children}
  <Outlet/>
</main>
   </div>
  )
}


export { Layout };