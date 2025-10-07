import React, { useState } from 'react'
import DesignSlideOver from './components/DesignSlideOver'

function KPI({ icon, title, value, sub }) {
  return (
    <div className="kpi">
      <div className="kpi-icon">{icon}</div>
      <div className="kpi-body">
        <div className="kpi-value">{value}</div>
        <div className="kpi-title">{title}</div>
      </div>
      <div className="kpi-sub">{sub}</div>
      <button className="kebab">⋯</button>
    </div>
  )
}

function RowActions({ onView }){
  const [open, setOpen] = useState(false)
  return (
    <div style={{position:'relative'}}>
      <button className="icon-btn" onClick={()=>setOpen(v=>!v)}>⋯</button>
      {open && (
        <div className="menu" onMouseLeave={()=>setOpen(false)}>
          <button className="menu-item" onClick={()=>{onView();setOpen(false)}}>View Details</button>
          <button className="menu-item">Share</button>
          <button className="menu-item">Download</button>
        </div>
      )}
    </div>
  )
}

function Designs(){
  const [viewOpen, setViewOpen] = useState(false)
  return (
    <div className="projects-page">
      <div className="breadcrumb">Designs</div>
      <h1 className="page-title">Good Morning, Sajibur</h1>
      <p className="page-sub">Create, manage, and track all of your project designs.</p>

      <div className="kpi-grid">
        <KPI icon="🪄" title="Total Designs" value="48" sub="Last month" />
        <KPI icon="⏳" title="Pending" value="7" sub="Last month" />
        <KPI icon="✔️" title="Approved" value="13" sub="Last month" />
        <KPI icon="🏭" title="In Production" value="11" sub="Last month" />
      </div>

      <section className="card" style={{marginTop:12}}>
        <div className="card-header">
          <div className="card-title">Designs</div>
          <div className="table-actions">
            <input className="table-search" placeholder="Search here" />
            <button className="btn">Filter ▾</button>
          </div>
        </div>
        <div className="card-body">
          <div className="table">
            <div className="thead" style={{gridTemplateColumns:'160px 1fr 200px 180px 200px 120px'}}>
              <div>ID</div>
              <div>Project</div>
              <div>Customer</div>
              <div>Assignee</div>
              <div>Current Stage</div>
              <div>Actions</div>
            </div>
            {[1,2,3,4,5,6].map((i)=> (
              <div className="trow" key={i} style={{gridTemplateColumns:'160px 1fr 200px 180px 200px 120px'}}>
                <div>DSG-2025-0{i}</div>
                <div>Modern Kitchen Remodel</div>
                <div>John Snow</div>
                <div>Brandon Leo</div>
                <div>Draft</div>
                <div><RowActions onView={()=>setViewOpen(true)} /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DesignSlideOver open={viewOpen} onClose={()=>setViewOpen(false)} />
    </div>
  )
}

export default Designs


