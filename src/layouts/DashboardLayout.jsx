import React from 'react'
import Sidebar from './Sidebar'
// import Header from './Header'

function DashboardLayout({ children }) {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <Sidebar />
      </aside>
      <div className="main-area">
        {/* <Header /> */}
        <main className="content-area">
          {children}
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout


