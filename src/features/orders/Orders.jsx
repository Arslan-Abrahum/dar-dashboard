import React, { useMemo, useState } from 'react'
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
          <div className="slide-title">ORD-2025-0921</div>
          <div className="slide-sub">Below are all the details about this order</div>
          <div className="tabs">
            {['Overview','Files','Payment'].map(t=> (
              <button key={t} className={`tab-btn ${tab===t?'active':''}`} onClick={()=>setTab(t)}>{t}</button>
            ))}
          </div>
        </div>
        <div className="slide-body">
          {tab==='Overview' && (
            <div>
              <div className="steps" style={{gridTemplateColumns:'repeat(4,1fr)'}}>
                {['Quotation','Design','Production','Delivery'].map((s,i)=>(
                  <div className={`step ${i<3?'done':''}`} key={s}><div className="step-ic">✓</div><div className="step-lbl">{s}</div></div>
                ))}
              </div>
              <div className="two-col">
                <div>
                  <div className="section-title">Customer Information</div>
                  <div className="info-grid">
                    <div>Customer Name</div><div>Esra al Khandari</div>
                    <div>Customer Number</div><div>+965 97194665</div>
                    <div>Email</div><div>MJaffer1@gmail.com</div>
                    <div>Delivery Address</div><div>Park View City, Kuwait</div>
                  </div>
                </div>
                <div>
                  <div className="section-title">Order Summary</div>
                  <div className="info-grid">
                    <div>Order no.</div><div>ORD-2025-0921</div>
                    <div>Linked Project</div><div>Office Fit-out</div>
                    <div>Source</div><div>DAR Designer</div>
                    <div>Est. Delivery</div><div>Oct 20, 2025</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {tab==='Files' && (
            <div>
              <input id="order-files" type="file" accept="application/pdf" hidden multiple />
              <label htmlFor="order-files" className="btn">Upload PDF</label>
              <div className="files-list" style={{marginTop:10}}>
                {['Design_file.pdf','File_info_320.pdf','Invoice_final.pdf'].map(n=> (
                  <div className="file-row" key={n}>
                    <div className="file-ic">PDF</div>
                    <div className="file-name">{n}<div className="muted">pdf</div></div>
                    <button className="kebab">⋯</button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tab==='Payment' && (
            <div>
              <div className="section-title">Payment Details</div>
              <div className="info-grid">
                <div>Order No</div><div>OR-08765</div>
                <div>Customer</div><div>Omer</div>
                <div>Total Amount</div><div>$50,000</div>
                <div>Paid Amount</div><div>$25,000</div>
                <div>Remaining Amount</div><div>$25,000</div>
              </div>
              <div className="section-title" style={{marginTop:12}}>Payment History</div>
              <div className="table">
                <div className="thead" style={{gridTemplateColumns:'80px 1fr 160px 140px 120px'}}>
                  <div>No</div><div>Services</div><div>Amount</div><div>Status</div><div>Actions</div>
                </div>
                {[1,2,3,4].map(i=> (
                  <div className="trow" key={i} style={{gridTemplateColumns:'80px 1fr 160px 140px 120px'}}>
                    <div>0{i}</div><div>Measurement</div><div>$25,000</div><div><span className="status info">Paid</span></div><div>⋯</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="slide-footer">
          <div className="footer-actions"><button className="btn">✗ CTA</button><button className="btn primary">CTA ↗</button></div>
        </div>
      </div>
    </Modal>
  )
}

function Orders(){
  const [open,setOpen]=useState(false)
  return (
    <div className="projects-page">
      <div className="breadcrumb">Orders</div>
      <h1 className="page-title">Good Morning, Sajibur</h1>
      <p className="page-sub">Manage all orders, monitor their status, and ensure smooth delivery.</p>

      <div className="kpi-grid">
        <KPI icon="📦" title="Total Orders" value="7" sub="Last month" />
        <KPI icon="✅" title="Active" value="13" sub="Last month" />
        <KPI icon="✔️" title="Completed" value="13" sub="Last month" />
        <KPI icon="🗑" title="Cancelled" value="11" sub="Last month" />
      </div>

      <section className="card" style={{marginTop:12}}>
        <div className="card-header">
          <div className="card-title">Orders</div>
          <div className="table-actions">
            <input className="table-search" placeholder="Search here" />
            <button className="btn">Filter ▾</button>
          </div>
        </div>
        <div className="card-body">
          <div className="table">
            <div className="thead" style={{gridTemplateColumns:'160px 1fr 160px 160px 160px 120px'}}>
              <div>Order #</div>
              <div>Project</div>
              <div>Customer</div>
              <div>Source</div>
              <div>Status</div>
              <div>Actions</div>
            </div>
            {[1,2,3,4,5].map((i)=> (
              <div className="trow" key={i} style={{gridTemplateColumns:'160px 1fr 160px 160px 160px 120px'}}>
                <div>ORD-2025-0921</div>
                <div>Modern Kitchen</div>
                <div>Tim Bronze</div>
                <div>DAR Configurator</div>
                <div><span className="status info">In Progress</span></div>
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

export default Orders


