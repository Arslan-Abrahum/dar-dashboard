import React, { useState } from 'react'
import DesignSlideOver from './components/DesignSlideOver'
import Header from '../../layouts/Header'
import { FaArrowLeft, LuClipboardPen, FiPenTool, LuCheckCheck, GoClock } from '../../assets/icons/icons'


function KPI({ icon, title, value, sub }) {
  return (
    <div className="kpi-box">
      <div className="kpi">
        <div className="kpi-icon">{icon}</div>
        <div className="kpi-body">
          <div className="kpi-value">{value}</div>
          <div className="kpi-title">{title}</div>
        </div>
      </div>
      <div className='kpi-foot'>
        <div className="kpi-sub">{sub}</div>
        <button className="kebab">⋯</button>
      </div>
    </div>
  )
}

function RowActions({ onView }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ position: 'relative' }}>
      <button className="icon-btn" onClick={() => setOpen(v => !v)}>⋯</button>
      {open && (
        <div className="menu" onMouseLeave={() => setOpen(false)}>
          <button className="menu-item" onClick={() => { onView(); setOpen(false) }}>View Details</button>
          <button className="menu-item">Share</button>
          <button className="menu-item">Download</button>
        </div>
      )}
    </div>
  )
}

function Designs() {
  const [viewOpen, setViewOpen] = useState(false)
  return (
    <div className='pages'>
      <Header title="Designs" icon={<FaArrowLeft className='text-[#054E45] text-[15px]' />} showIcon={true} />
      <div className="projects-page">
        <div className='flex justify-between items-center mb-6'>

          <div>
            <h1 className="page-title">Good Morning, Sajibur</h1>
            <p className="page-sub">Create, manage, and track all of your project designs.</p>

          </div>
          <div className="header-actions">
            <div className="period-select bg-white px-3 py-2 border-2 border-[#E7E7E7]">This Month ▾</div>
          </div>
        </div>

        <div className="kpi-grid">
          <KPI icon={<FiPenTool />} sub="Total Designs" value="48" title="Last month" />
          <KPI icon={<GoClock />} sub="Pending" value="7" title="Last month" />
          <KPI icon={<LuCheckCheck />} sub="Approved" value="13" title="Last month" />
          <KPI icon={<LuClipboardPen />} sub="In Production" value="11" title="Last month" />
        </div>

        <section className="card" style={{ marginTop: 12 }}>
          <div className="card-header">
            <div className="card-title">Designs</div>
            <div className="table-actions">
              <input className="table-search" placeholder="Search here" />
              <button className="btn">Filter ▾</button>
            </div>
          </div>
          <div className="card-body">
            <div className="table">
              <div className="thead" style={{ gridTemplateColumns: '160px 1fr 200px 180px 200px 120px' }}>
                <div>ID</div>
                <div>Project</div>
                <div>Customer</div>
                <div>Assignee</div>
                <div>Current Stage</div>
                <div>Actions</div>
              </div>
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div className="trow" key={i} style={{ gridTemplateColumns: '160px 1fr 200px 180px 200px 120px' }}>
                  <div>DSG-2025-0{i}</div>
                  <div>Modern Kitchen Remodel</div>
                  <div>John Snow</div>
                  <div>Brandon Leo</div>
                  <div>Draft</div>
                  <div><RowActions onView={() => setViewOpen(true)} /></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <DesignSlideOver open={viewOpen} onClose={() => setViewOpen(false)} />
      </div>
    </div>
  )
}

export default Designs


