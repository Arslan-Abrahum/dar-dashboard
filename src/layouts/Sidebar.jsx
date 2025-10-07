import React from 'react'

function Sidebar() {
  return (
    <div className="sidebar-inner">
      <div className="logo">DARJI</div>
      <div className="search">
        <input placeholder="Search here..." />
      </div>
      <nav className="nav">
        <a className="nav-item" href="#/dashboard">Dashboard</a>
        <a className="nav-item" href="#/projects">Projects</a>
        <a className="nav-item">Designs</a>
        <a className="nav-item">Quotations</a>
        <a className="nav-item">Orders</a>
        <a className="nav-item">Customers</a>
        <a className="nav-item">Measurements</a>
        <a className="nav-item">Team Management</a>
        <a className="nav-item">Analytics</a>
        <a className="nav-item">Support</a>
      </nav>
      <div className="sidebar-footer">
        <div className="user">
          <div className="avatar">S</div>
          <div className="meta">
            <div className="name">Sajibur</div>
            <div className="email">sajibur20@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar


