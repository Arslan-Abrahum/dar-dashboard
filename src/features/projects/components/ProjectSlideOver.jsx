import React, { useMemo, useRef, useState } from 'react'
import Modal from '../../../components/common/Modal'

function TabButton({ label, active, onClick }) {
  return <button className={`tab-btn ${active ? 'active' : ''}`} onClick={onClick}>{label}</button>
}

function OverviewTab() {
  return (
    <div className="proj-overview">
      <div className="steps">
        {['Quotation','Design','Production','Delivery'].map((s,i)=> (
          <div className={`step ${i<3?'done':''}`} key={s}>
            <div className="step-ic">✓</div>
            <div className="step-lbl">{s}</div>
          </div>
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
          <div className="section-title">Project Summary</div>
          <div className="info-grid">
            <div>Order ID</div><div>ORD-2025-0921</div>
            <div>Items</div><div>06</div>
            <div>Total Amount</div><div>$50,000</div>
            <div>ETA</div><div>Sep 20, 2025</div>
          </div>
        </div>
      </div>

      <div className="section-title" style={{marginTop:12}}>Notes</div>
      <div className="note-box">Lorem ipsum dolor sit amet consectetur. Velit ipsum adipiscing volutpat ipsum habitant in elementum. Enim habitant congue nunc sit orci.</div>
    </div>
  )
}

function ItemsTab() {
  const items = useMemo(()=>[
    {name:'Mid-Century Modern Accent Chair', price:'$450'},
    {name:'Industrial Style Bookshelf', price:'$320'},
    {name:'Contemporary Sectional Sofa', price:'$1,250'},
    {name:'Rustic Wooden Side Table', price:'$150'},
  ],[])
  return (
    <div className="items-list">
      {items.map((it)=> (
        <div className="item-row" key={it.name}>
          <div className="thumb" />
          <div className="item-meta">
            <div className="item-title">{it.name}</div>
            <div className="item-sub">Living Room Catalog • Color: Teal • Quantity: 2</div>
          </div>
          <div className="item-price">{it.price}</div>
        </div>
      ))}
    </div>
  )
}

function FilesTab() {
  const [files, setFiles] = useState([])
  const inputRef = useRef(null)

  const onChoose = () => inputRef.current?.click()
  const onFiles = (e) => {
    const list = Array.from(e.target.files || [])
    const pdfs = list.filter(f=> f.type === 'application/pdf')
    setFiles(prev => [...prev, ...pdfs.map(f=>({name:f.name, size:f.size}))])
  }
  return (
    <div>
      <input ref={inputRef} type="file" accept="application/pdf" hidden multiple onChange={onFiles} />
      <button className="btn" onClick={onChoose}>Upload PDF</button>
      <div className="files-list">
        {files.map(f=> (
          <div className="file-row" key={f.name}>
            <div className="file-ic">PDF</div>
            <div className="file-name">{f.name}</div>
            <button className="kebab">⋯</button>
          </div>
        ))}
      </div>
    </div>
  )
}

function PaymentsTab() {
  return (
    <div className="payments">
      <div className="section-title">Payment Details</div>
      <div className="info-grid">
        <div>Order No</div><div>OR-08765</div>
        <div>Customer</div><div>Omer</div>
        <div>Total Amount</div><div>$50,000</div>
        <div>Paid Amount</div><div>$25,000</div>
        <div>Remaining Amount</div><div>$25,000</div>
      </div>
      <div className="section-title" style={{marginTop:12}}>Payment History</div>
      <div className="table payments-table">
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
  )
}

function ProjectSlideOver({ open, onClose }) {
  const [tab, setTab] = useState('Overview')
  const tabs = ['Overview','Items','Files','Payments']
  const body = {
    Overview: <OverviewTab />,
    Items: <ItemsTab />,
    Files: <FilesTab />,
    Payments: <PaymentsTab />,
  }[tab]

  const footer = (
    <div className="footer-actions">
      <button className="btn">✗ CTA</button>
      <button className="btn primary">CTA ↗</button>
    </div>
  )

  return (
    <Modal open={open} onClose={onClose} width={520}>
      <div className="slide-over">
        <div className="slide-head">
          <div className="slide-title">PRJ-2025-021</div>
          <div className="slide-sub">Below are all the details about this project.</div>
          <div className="tabs">
            {tabs.map(t=> (
              <TabButton key={t} label={t} active={t===tab} onClick={()=>setTab(t)} />
            ))}
          </div>
        </div>
        <div className="slide-body">
          {body}
        </div>
        <div className="slide-footer">{footer}</div>
      </div>
    </Modal>
  )
}

export default ProjectSlideOver


