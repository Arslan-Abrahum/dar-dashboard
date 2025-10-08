import React, { useState } from 'react'
import Modal from '../../components/common/Modal'

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

function RowMenu({ onView }){
  const [open,setOpen]=useState(false)
  return (
    <div style={{position:'relative'}}>
      <button className="icon-btn" onClick={()=>setOpen(v=>!v)}>⋯</button>
      {open && (
        <div className="menu" onMouseLeave={()=>setOpen(false)}>
          <button className="menu-item" onClick={()=>{onView();setOpen(false)}}>View Details</button>
        </div>
      )}
    </div>
  )
}

function DetailsSlide({ open, onClose }){
  const [tab,setTab]=useState('Overview')
  return (
    <Modal open={open} onClose={onClose} width={640}>
      <div className="slide-over">
        <div className="slide-head">
          <div className="slide-title">#MJHG - 123</div>
          <div className="slide-sub">Below are all the details about this measurement.</div>
          <div className="tabs">
            {['Overview','Files'].map(t=> (
              <button key={t} className={`tab-btn ${tab===t?'active':''}`} onClick={()=>setTab(t)}>{t}</button>
            ))}
          </div>
        </div>
        <div className="slide-body">
          {tab==='Overview' && (
            <div>
              <div className="section-title">Customer Information</div>
              <div className="info-grid">
                <div>Full Name</div><div>Esra al Khandari</div>
                <div>Phone Number</div><div>+965 97194665</div>
                <div>Email</div><div>MJaffer1@gmail.com</div>
              </div>
              <div className="section-title" style={{marginTop:12}}>Measurement Summary</div>
              <div className="info-grid">
                <div>Measurement no.</div><div>#MJHG - 123</div>
                <div>Date</div><div>12 Mar, 2025</div>
                <div>Time</div><div>12:30 PM</div>
                <div>Address</div><div>Park View City, Kuwait</div>
              </div>
              <div className="section-title" style={{marginTop:12}}>Notes</div>
              <div className="note-box">Lorem ipsum dolor sit amet consectetur. Non in elit ultrices a facilisis etiam...</div>
            </div>
          )}
          {tab==='Files' && (
            <div className="files-list">
              {['Room Layout_ file.pdf','File_info_ 320.pdf','Invoice_ final.pdf'].map(n=> (
                <div className="file-row" key={n}>
                  <div className="file-ic">PDF</div>
                  <div className="file-name">{n}<div className="muted">pdf</div></div>
                  <button className="kebab">⋯</button>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="slide-footer"><div className="footer-actions"><button className="btn">Reject</button><button className="btn primary">Assign Task ↗</button></div></div>
      </div>
    </Modal>
  )
}

function Measurements(){
  const [open,setOpen]=useState(false)
  return (
    <div className="projects-page">
      <div className="breadcrumb">Measurements</div>
      <h1 className="page-title">Good Morning, Sajibur</h1>
      <p className="page-sub">Manage all measurements, track progress, and ensure accurate project planning.</p>

      <div className="kpi-grid">
        <KPI icon="📏" title="Total Measurements" value="17" sub="Last month" />
        <KPI icon="✅" title="Completed" value="12" sub="Last month" />
        <KPI icon="⏳" title="Pending" value="4" sub="Last month" />
        <KPI icon="📅" title="Upcoming" value="5" sub="Last month" />
      </div>

      <section className="card" style={{marginTop:12}}>
        <div className="card-header">
          <div className="card-title">Measurements</div>
          <div className="table-actions">
            <input className="table-search" placeholder="Search here" />
            <button className="btn">Filter ▾</button>
          </div>
        </div>
        <div className="card-body">
          <div className="table">
            <div className="thead" style={{gridTemplateColumns:'200px 1fr 200px 160px 160px 120px'}}>
              <div>Measurement ID</div><div>Title</div><div>Customer</div><div>Phone</div><div>Status</div><div>Actions</div>
            </div>
            {[1,2,3,4,5].map(i=> (
              <div className="trow" key={i} style={{gridTemplateColumns:'200px 1fr 200px 160px 160px 120px'}}>
                <div>#MJHG123</div><div>Living Room</div><div>Tim Bronze</div><div>+965 76556782</div><div><span className="status success">Completed</span></div>
                <div><RowMenu onView={()=>setOpen(true)} /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DetailsSlide open={open} onClose={()=>setOpen(false)} />
    </div>
  )
}

export default Measurements


