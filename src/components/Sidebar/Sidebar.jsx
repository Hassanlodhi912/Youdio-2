import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SideBarData } from "./SidebarData";
import "./Sidebar.css";
import { IconContext } from "react-icons";
const Sidebar = () => {
    const {sidebar,setSidebar}= useState(false)
    const showSidebar=()=>setSidebar(!sidebar)

  return (
    <>
    <IconContext.Provider value={{color:"red"}}>

      <div className="navbar">
        <NavLink to="#" className="menu-bars">
          <FaIcons.FaBars  onClick={showSidebar}/>
        </NavLink>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-men-item">
            <li className="navbar-toggle">
                <NavLink to="#" className="menu-bars">
                  <AiIcons.AiOutlineClose/>
                    </NavLink> 
            </li>
            {SideBarData.map((item,index)=>{
                return(
                    <li key={index} className={item.cName}>
                      <NavLink to ={item.path}>
                        {item.icon}
                        <span>
                            {item.title}
                        </span>

                      </NavLink>
                        </li>
                )

            })}
        </ul>
      </nav>
    </IconContext.Provider>

    </>
  );
};

export default Sidebar;
