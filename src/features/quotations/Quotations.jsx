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

function RowMenu({ onView, onEdit, onExport }){
  const [open,setOpen] = useState(false)
  return (
    <div style={{position:'relative'}}>
      <button className="icon-btn" onClick={()=>setOpen(v=>!v)}>⋯</button>
      {open && (
        <div className="menu" onMouseLeave={()=>setOpen(false)}>
          <button className="menu-item" onClick={()=>{onView();setOpen(false)}}>View Details</button>
          <button className="menu-item" onClick={()=>{onEdit();setOpen(false)}}>Edit</button>
          <button className="menu-item" onClick={()=>{onExport();setOpen(false)}}>Export</button>
        </div>
      )}
    </div>
  )
}

function DetailsSlide({ open, onClose }){
  const [tab,setTab]=useState('Overview')
  const items = useMemo(()=>[
    {item:'Shelves', material:'Plywood', qty:'09', unit:'$120', total:'$12,450'},
    {item:'Drawers', material:'Soft MDF', qty:'09', unit:'$120', total:'$12,450'},
    {item:'Doors', material:'Titanium', qty:'09', unit:'$120', total:'$12,450'},
  ],[])
  return (
    <Modal open={open} onClose={onClose} width={640}>
      <div className="slide-over">
        <div className="slide-head">
          <div className="slide-title">Q-2025-014</div>
          <div className="slide-sub">Below are all the details about this quotation.</div>
          <div className="tabs">
            {['Overview','Items','Files','Payments'].map(t=> (
              <button key={t} className={`tab-btn ${tab===t?'active':''}`} onClick={()=>setTab(t)}>{t}</button>
            ))}
          </div>
        </div>
        <div className="slide-body">
          {tab==='Overview' && (
            <div>
              <div className="section-title">Customer Information</div>
              <div className="info-grid">
                <div>Customer Name</div><div>Esra al Khandari</div>
                <div>Customer Number</div><div>+965 97194665</div>
                <div>Email</div><div>MJaffer1@gmail.com</div>
                <div>Delivery Address</div><div>Park View City, Kuwait</div>
              </div>

              <div className="section-title" style={{marginTop:12}}>Quotation Summary</div>
              <div className="info-grid">
                <div>Quotation ID</div><div>Q-2025-014</div>
                <div>Total Value</div><div>$12,360</div>
                <div>Payed</div><div>$7,455</div>
                <div>Date Issued</div><div>Sep 20, 2025</div>
                <div>Est. Delivery</div><div>Oct 20, 2025</div>
              </div>

              <div className="section-title" style={{marginTop:12}}>Each Unit:</div>
              <div className="info-grid" style={{gridTemplateColumns:'1fr 1fr'}}>
                <div>Subtotal:</div><div>$5,500</div>
                <div>Taxes (10%):</div><div>$360</div>
                <div>Total Price:</div><div><b>$6,050</b></div>
              </div>
            </div>
          )}

          {tab==='Items' && (
            <div className="table">
              <div className="thead" style={{gridTemplateColumns:'1fr 1fr 120px 120px 140px'}}>
                <div>Item</div><div>Material</div><div>Quantity</div><div>Unit Price</div><div>Total Value</div>
              </div>
              {items.map(row=> (
                <div className="trow" key={row.item} style={{gridTemplateColumns:'1fr 1fr 120px 120px 140px'}}>
                  <div>{row.item}</div><div>{row.material}</div><div>{row.qty}</div><div>{row.unit}</div><div>{row.total}</div>
                </div>
              ))}
            </div>
          )}

          {tab==='Files' && (
            <div>
              <input id="q-files" type="file" accept="application/pdf" hidden multiple onChange={(e)=>{ /* no-op for now */ }} />
              <label htmlFor="q-files" className="btn">Upload PDF</label>
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

          {tab==='Payments' && (
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

function MultiSelect({ options, value, onChange, placeholder }){
  const toggle = (opt) => {
    onChange(value.includes(opt) ? value.filter(v=>v!==opt) : [...value, opt])
  }
  return (
    <div>
      <div className="input" style={{display:'flex',flexWrap:'wrap',gap:6,minHeight:42,alignItems:'center'}}>
        {value.length===0 && <span className="muted">{placeholder}</span>}
        {value.map(v=> (
          <span key={v} className="chip">{v}</span>
        ))}
      </div>
      <div className="options-grid">
        {options.map(opt=> (
          <label key={opt} className="option">
            <input type="checkbox" checked={value.includes(opt)} onChange={()=>toggle(opt)} />
            <span>{opt}</span>
          </label>
        ))}
      </div>
    </div>
  )
}

function NewQuotation({ open, onClose }){
  const projects = ['Luxury Wardrobe Build','Modern Kitchen Redesign','Villa Kitchen Upgrade']
  const items = ['Shelves','Drawers','Frames','Doors','Cabins']
  const itemNumbers = ['Shelves 1','Drawers 2','Frames 1','Doors 2','Cabins 1']
  const [selProjects, setSelProjects] = useState([])
  const [selItems, setSelItems] = useState([])
  const [selNumbers, setSelNumbers] = useState([])
  const footer = (<div className="footer-actions"><button className="btn" onClick={onClose}>✗ CTA</button><button className="btn primary" onClick={onClose}>CTA ↗</button></div>)
  return (
    <Modal open={open} onClose={onClose} title="New Quotation" footer={footer} width={720}>
      <div className="page-sub">Quickly create a new quotation and start collaborating instantly.</div>
      <div className="two-col" style={{alignItems:'start'}}>
        <div>
          <div className="section-title">Customer Information</div>
          <label className="field"><div className="field-label">Full Name</div><input className="input" placeholder="Enter Customer Name" /></label>
          <label className="field"><div className="field-label">Phone</div><input className="input" placeholder="Enter Phone Number" /></label>
          <label className="field"><div className="field-label">Email Address</div><input className="input" placeholder="Enter Email Address" /></label>
          <div className="section-title" style={{marginTop:12}}>Quotation Details</div>
          <label className="field"><div className="field-label">Linked Project</div><MultiSelect options={projects} value={selProjects} onChange={setSelProjects} placeholder="Select Project" /></label>
          <label className="field"><div className="field-label">Items</div><MultiSelect options={items} value={selItems} onChange={setSelItems} placeholder="Select Items" /></label>
          <label className="field"><div className="field-label">Items Number</div><MultiSelect options={itemNumbers} value={selNumbers} onChange={setSelNumbers} placeholder="Enter Items Number" /></label>
          <label className="field"><div className="field-label">Total Value</div><input className="input" placeholder="Enter Total Value" /></label>
          <label className="field"><div className="field-label">Delivery ETA</div><input className="input" placeholder="Select Date" /></label>
        </div>
        <div>
          <div className="section-title">Page Content</div>
          <input className="input" placeholder="Search projects" />
          <div className="list-box">{projects.map(p=> <div key={p}>{p}</div>)}</div>
          <div className="section-title" style={{marginTop:12}}>Search items</div>
          <input className="input" placeholder="Search items" />
          <div className="list-box">{items.map(p=> <div key={p}>{p}</div>)}</div>
          <div className="section-title" style={{marginTop:12}}>Item numbers</div>
          <input className="input" placeholder="Item numbers" />
          <div className="list-box">{itemNumbers.map(p=> <div key={p}>{p}</div>)}</div>
        </div>
      </div>
    </Modal>
  )
}

function EditQuotation({ open, onClose }){
  const projects = ['Luxury Wardrobe Build']
  const items = ['Sofa','Armchair','Table','Coffee Table']
  const [selItems, setSelItems] = useState(items)
  const footer = (<div className="footer-actions"><button className="btn" onClick={onClose}>✗ CTA</button><button className="btn primary" onClick={onClose}>CTA ↗</button></div>)
  return (
    <Modal open={open} onClose={onClose} title="Edit Quotation" footer={footer} width={520}>
      <div className="page-sub">Lorem ipsum dolor sit amet consectetur. Nunc tincidunt sed.</div>
      <div className="form-grid">
        <label className="field"><div className="field-label">Full Name</div><input className="input" defaultValue="Daniel Casio" /></label>
        <label className="field"><div className="field-label">Phone</div><input className="input" defaultValue="+123 1234 12345" /></label>
        <label className="field"><div className="field-label">Email Address</div><input className="input" defaultValue="Daniel.casio@email.com" /></label>
        <label className="field"><div className="field-label">Linked Project</div><MultiSelect options={projects} value={projects} onChange={()=>{}} placeholder="Select Project" /></label>
        <label className="field"><div className="field-label">Items</div><MultiSelect options={items} value={selItems} onChange={setSelItems} placeholder="Select Items" /></label>
        <label className="field"><div className="field-label">Items Number</div><div className="input" style={{display:'flex',flexWrap:'wrap',gap:6}}>{['Sofa x1','Armchair x2','Table x1','Coffee Table x3'].map(v=> <span key={v} className="chip">{v}</span>)}</div></label>
        <label className="field"><div className="field-label">Total Value</div><input className="input" defaultValue="$12,360" /></label>
        <label className="field"><div className="field-label">Est. Delivery</div><input className="input" defaultValue="Jan 12, 2025" /></label>
      </div>
    </Modal>
  )
}

function Quotations(){
  const [detailOpen,setDetailOpen]=useState(false)
  const [newOpen,setNewOpen]=useState(false)
  const [editOpen,setEditOpen]=useState(false)
  return (
    <div className="projects-page">
      <div className="breadcrumb">Quotations</div>
      <h1 className="page-title">Good Morning, Sajibur</h1>
      <p className="page-sub">Manage all quotations, convert them to orders, and track order progress.</p>

      <div className="kpi-grid">
        <KPI icon="🧾" title="Total Quotations" value="48" sub="Last month" />
        <KPI icon="🗂" title="To Be Generated" value="7" sub="Last month" />
        <KPI icon="✔️" title="Approved" value="13" sub="Last month" />
        <KPI icon="📦" title="Rejected" value="11" sub="Last month" />
      </div>

      <section className="card" style={{marginTop:12}}>
        <div className="card-header">
          <div className="card-title">Quotations</div>
          <div className="table-actions">
            <input className="table-search" placeholder="Search here" />
            <button className="btn" onClick={()=>setNewOpen(true)}>New Quotation ↗</button>
            <button className="btn">Filter ▾</button>
          </div>
        </div>
        <div className="card-body">
          <div className="table">
            <div className="thead" style={{gridTemplateColumns:'160px 1fr 200px 160px 160px 120px'}}>
              <div>ID</div>
              <div>Project</div>
              <div>Customer</div>
              <div>Date</div>
              <div>Total Value</div>
              <div>Actions</div>
            </div>
            {[1,2,3,4,5,6].map((i)=> (
              <div className="trow" key={i} style={{gridTemplateColumns:'160px 1fr 200px 160px 160px 120px'}}>
                <div>Q-2025-014</div>
                <div>Modern Kitchen Remodel</div>
                <div>John Snow</div>
                <div>Sep 12, 2025</div>
                <div>$1,200</div>
                <div><RowMenu onView={()=>setDetailOpen(true)} onEdit={()=>setEditOpen(true)} onExport={()=>alert('Exporting...')} /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DetailsSlide open={detailOpen} onClose={()=>setDetailOpen(false)} />
      <NewQuotation open={newOpen} onClose={()=>setNewOpen(false)} />
      <EditQuotation open={editOpen} onClose={()=>setEditOpen(false)} />
    </div>
  )
}

export default Quotations


