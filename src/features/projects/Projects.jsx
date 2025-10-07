import React, { useState } from 'react'
import ProjectSlideOver from './components/ProjectSlideOver'
import NewProjectModal from './components/NewProjectModal'
// import { FaCalendarDays } from "react-icons/fa6";
import { LuFolderCog, LuFolderCheck } from "react-icons/lu";
// import { FiPenTool } from "react-icons/fi";
import { HiOutlineFolderArrowDown } from "react-icons/hi2";


import { FaRegFolderOpen } from "react-icons/fa";


function KPI({ icon, title, value, sub }) {
  return (
    <div className="kpi">
      <div className="kpi-icon">{icon}</div>
      <div className="kpi-body">
        <div className="kpi-value">{value}</div>
        <div className="kpi-title">{title}</div>
      </div>
      <div className='kpi-foot'>
        <div className="kpi-sub">{sub}</div>
        <button className="kebab">⋯</button>
      </div>
    </div>
  )
}

function Stage({ title, desc }) {
  return (
    <div className="stage">
      <div className="stage-icon">✅</div>
      <div className="stage-meta">
        <div className="stage-title">{title}</div>
        <div className="stage-desc">{desc}</div>
      </div>
    </div>
  )
}

function Projects() {
  const [open, setOpen] = useState(false)
  const [newOpen, setNewOpen] = useState(false)
  return (
    <div className="projects-page">
      <div className="breadcrumb">Projects</div>
      <h1 className="page-title">Good Morning, Sajibur</h1>
      <p className="page-sub">Manage and track all customer projects from quotation to delivery.</p>

      <div className="kpi-grid">
        <KPI icon={<FaRegFolderOpen />} title="Total Projects" value="132" sub="Last month" />
        <KPI icon={<LuFolderCog />} title="Active" value="12" sub="Last month" />
        <KPI icon={<LuFolderCheck />} title="Completed" value="114" sub="Last month" />
        <KPI icon={<HiOutlineFolderArrowDown />} title="Archived" value="16" sub="Last month" />
      </div>

      <section className="card" style={{ marginTop: 12 }}>
        <div className="card-header">
          <div className="card-title">Project Status</div>
        </div>
        <div className="card-body">
          <div className="stage-row">
            <Stage title="Quotation" desc="Quotation approved by customer" />
            <Stage title="Order" desc="Order confirmed and created" />
            <Stage title="Design" desc="Design pending customer review" />
            <Stage title="Production" desc="Manufacturing in progress" />
            <Stage title="Delivery" desc="Scheduled for March 24, 2025" />
          </div>
        </div>
      </section>

      <section className="card" style={{ marginTop: 12 }}>
        <div className="card-header">
          <div className="card-title">Projects</div>
          <div className="table-actions">
            <input className="table-search" placeholder="Search here" />
            <button className="btn" onClick={() => setNewOpen(true)}>New Project ↗</button>
            <button className="btn">Filter ▾</button>
          </div>
        </div>
        <div className="card-body">
          <div className="table">
            <div className="thead">
              <div>ID</div>
              <div>Project</div>
              <div>Customer</div>
              <div>Status</div>
              <div>Current Stage</div>
              <div>Actions</div>
            </div>
            {[1, 2, 3, 4, 5].map((i) => (
              <div className="trow" key={i}>
                <div>PRJ-2025-021</div>
                <div>Modern Kitchen Remodel</div>
                <div>Ali Hassan</div>
                <div><span className="status success">Completed</span></div>
                <div>Design</div>
                <div><button className="link" onClick={() => setOpen(true)}>View Details ↗</button></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProjectSlideOver open={open} onClose={() => setOpen(false)} />
      <NewProjectModal open={newOpen} onClose={() => setNewOpen(false)} />
    </div>
  )
}

export default Projects


