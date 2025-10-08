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
          <button className="menu-item" onClick={()=>{alert('Exporting...');setOpen(false)}}>Export</button>
        </div>
      )}
    </div>
  )
}

function CustomerSlide({ open, onClose }){
  const [tab,setTab]=useState('Personal Information')
  return (
    <Modal open={open} onClose={onClose} title="Customer Details" width={640} footer={<div className="footer-actions"><button className="btn">✗ CTA</button><button className="btn primary">CTA ↗</button></div>}>
      <div className="tabs" style={{marginTop:-8}}>
        {['Personal Information','Current Orders','Order History'].map(t=> (
          <button key={t} className={`tab-btn ${tab===t?'active':''}`} onClick={()=>setTab(t)}>{t}</button>
        ))}
      </div>

      {tab==='Personal Information' && (
        <div>
          <div className="section-title">Personal Information</div>
          <div className="info-grid">
            <div>Full Name</div><div>Esra al Khandari</div>
            <div>Phone Number</div><div>+965 97194665</div>
            <div>Email</div><div>MJaffer1@gmail.com</div>
            <div>Delivery Address</div><div>Park View City, Kuwait</div>
          </div>
        </div>
      )}

      {tab==='Current Orders' && (
        <div className="items-list">
          {[1,2,3,4].map(i=> (
            <div className="item-row" key={i} style={{gridTemplateColumns:'80px 1fr 100px'}}>
              <div className="thumb" />
              <div>
                <div><b>ORD-0004563</b></div>
                <div className="item-sub">Delivery ETA: 23 Sep, 2025</div>
                <div className="item-sub">Items: 01  Status: Out for Delivery</div>
              </div>
              <div className="item-price">$6,500</div>
            </div>
          ))}
        </div>
      )}

      {tab==='Order History' && (
        <div className="table">
          <div className="thead" style={{gridTemplateColumns:'140px 1fr 120px 140px 120px'}}>
            <div>Order ID</div><div>Date</div><div>Items</div><div>Status</div><div>Amount</div>
          </div>
          {[1,2,3,4].map(i=> (
            <div className="trow" key={i} style={{gridTemplateColumns:'140px 1fr 120px 140px 120px'}}>
              <div>OR-0078</div><div>Jan 12, 2025</div><div>0{i}</div><div><span className="status success">Delivered</span></div><div>$12,450</div>
            </div>
          ))}
        </div>
      )}
    </Modal>
  )
}

function Customers(){
  const [open,setOpen]=useState(false)
  return (
    <div className="projects-page">
      <div className="breadcrumb">Customers</div>
      <h1 className="page-title">Good Morning, Sajibur</h1>
      <p className="page-sub">Keep customer records in one place, access quickly, and stay connected.</p>

      <div className="kpi-grid">
        <KPI icon="🧍" title="Total Customers" value="48" sub="Last month" />
        <KPI icon="✅" title="Active" value="7" sub="Last month" />
        <KPI icon="🛑" title="Inactive" value="13" sub="Last month" />
        <KPI icon="✨" title="New This Month" value="11" sub="Last month" />
      </div>

      <section className="card" style={{marginTop:12}}>
        <div className="card-header">
          <div className="card-title">Customers</div>
          <div className="table-actions">
            <input className="table-search" placeholder="Search here" />
            <button className="btn">Filter ▾</button>
          </div>
        </div>
        <div className="card-body">
          <div className="table">
            <div className="thead" style={{gridTemplateColumns:'1fr 1fr 160px 180px 1fr 120px'}}>
              <div>Customer</div><div>Email</div><div>Phone</div><div>Last Interaction</div><div>Projects</div><div>Actions</div>
            </div>
            {[1,2,3,4,5,6].map(i=> (
              <div className="trow" key={i} style={{gridTemplateColumns:'1fr 1fr 160px 180px 1fr 120px'}}>
                <div>John Snow</div><div>Johnny12@mail.com</div><div>+37 123 12345</div><div>Sep 12, 2025</div><div>Modern Kitchen Remodel</div>
                <div><RowMenu onView={()=>setOpen(true)} /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CustomerSlide open={open} onClose={()=>setOpen(false)} />
    </div>
  )
}

export default Customers


