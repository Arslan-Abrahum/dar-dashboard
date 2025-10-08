import React from 'react'
// import { LuBell } from "react-icons/lu";
import {LuBell} from '../assets/icons/icons'


function Header({ title = "Dashboard", icon = null, showIcon = false }) {
  return (
    <div className="header">
      <div className="breadcrumb flex items-center gap-5">
        {showIcon ? icon : null} {title}
      </div>
      <div className="header-actions">
        <button className="icon-btn icon-bell-btn"><LuBell /></button>
        <button className="icon-btn">⋯</button>
      </div>
    </div>
  )
}

export default Header


