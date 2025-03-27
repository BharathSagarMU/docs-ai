import React from "react";
import { NavLink,Link,Outlet } from "react-router-dom";


export default function Navbar(){

    return(
        <>
            <nav className="navbar">
                <ul>
                    <li><NavLink to='/' >MyDocs</NavLink></li>
                    <li><NavLink to='/login'>Login</NavLink></li>
                    <li><NavLink to ='/register'>Register</NavLink></li>
                </ul>
            </nav>
            <Outlet/>
            </>
        
    )
}