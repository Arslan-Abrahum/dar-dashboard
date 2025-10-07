import React from 'react'

function Header() {
  return (
    <div className="header">
      <div className="breadcrumb">Dashboard</div>
      <div className="header-actions">
        <div className="period-select">This Month ▾</div>
        <button className="btn primary" onClick={()=>window.dispatchEvent(new CustomEvent('open-new-project'))}>New Project ↗</button>
        <button className="icon-btn">🔔</button>
        <button className="icon-btn">⋯</button>
      </div>
    </div>
  )
}

export default Header


