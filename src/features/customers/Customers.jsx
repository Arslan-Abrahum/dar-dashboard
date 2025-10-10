import React, { useState } from 'react'
import Modal from '../../components/common/Modal'
import Header from '../../layouts/Header'
import {
  FaArrowLeft, UserRoundCheck, UserRoundMinus, UserRoundPlus, LuUsersRound,
  Mails, Phone, House, LuUserRound, HiOutlineXMark, LuMoveUpRight,
} from '../../assets/icons/icons'

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

function RowMenu({ onView }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ position: 'relative' }}>
      <button className="icon-btn" onClick={() => setOpen(v => !v)}>⋯</button>
      {open && (
        <div className="menu" onMouseLeave={() => setOpen(false)}>
          <button className="menu-item" onClick={() => { onView(); setOpen(false) }}>View Details</button>
          <button className="menu-item" onClick={() => { alert('Exporting...'); setOpen(false) }}>Export</button>
        </div>
      )}
    </div>
  )
}

function CustomerSlide({ open, onClose }) {
  const [tab, setTab] = useState('Personal Information')


  const footer = (
    <div className="footer-actions w-full bg-white py-3">
      <button
        className="cursor-pointer flex-1 flex justify-center items-center text-[#054E45] border-2 border-[#054E45] py-2 gap-2"
      onClick={onClose}
      >
        <HiOutlineXMark /> CTA
      </button>
      <button
        className="cursor-pointer flex-1 flex justify-center items-center bg-[#054E45] py-2 text-white gap-2"
      onClick={onClose}
      >
        CTA <LuMoveUpRight />
      </button>
    </div>

  )

  return (
    <Modal open={open} onClose={onClose} title="Customer Details" width={640} footer={footer}>
      <div className="tabs" style={{ marginTop: -8 }}>
        {['Personal Information', 'Current Orders', 'Order History'].map(t => (
          <button key={t} className={`tab-btn ${tab === t ? 'active' : ''}`} onClick={() => setTab(t)}>{t}</button>
        ))}
      </div>

      {tab === 'Personal Information' && (
        <div className='pb-[335px]'>
          <div className="section-title">Personal Information</div>
          <div className="info-grid">
            <div className='flex items-center gap-3'> <LuUserRound className='icon-order' /> Full Name</div><div>Esra al Khandari</div>
            <div className='flex items-center gap-3'> <Phone className='icon-order' /> Phone Number</div><div>+965 97194665</div>
            <div className='flex items-center gap-3'> <Mails className='icon-order' /> Email</div><div>MJaffer1@gmail.com</div>
            <div className='flex items-center gap-3'> <House className='icon-order' /> Delivery Address</div><div>Park View City, Kuwait</div>
          </div>
        </div>
      )}

      {tab === 'Current Orders' && (
        <div className="items-list pb-40">
          {[1, 2, 3, 4].map(i => (
            <div className="item-row" key={i} style={{ gridTemplateColumns: '80px 1fr 100px' }}>
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

      {tab === 'Order History' && (
        <div className="table pb-32">
          <div className="thead mt-6" style={{ gridTemplateColumns: '140px 1fr 120px 140px 120px' }}>
            <div>Order ID</div><div>Date</div><div>Items</div><div>Status</div><div>Amount</div>
          </div>
          {[1, 2, 3, 4].map(i => (
            <div className="trow" key={i} style={{ gridTemplateColumns: '140px 1fr 120px 140px 120px' }}>
              <div>OR-0078</div><div>Jan 12, 2025</div><div>0{i}</div><div><span className="status success">Delivered</span></div><div>$12,450</div>
            </div>
          ))}
        </div>
      )}
    </Modal>
  )
}

function Customers() {
  const [open, setOpen] = useState(false)
  return (
    <div className="pages">
      <Header title="Customers" icon={<FaArrowLeft className='text-[#054E45] text-[15px]' />} showIcon={true} />
      <div className="projects-page">
        <div className='flex items-center justify-between mb-6'>
          <div>
            <h1 className="page-title">Good Morning, Sajibur</h1>
            <p className="page-sub">Keep customer records in one place, access quickly, and stay connected.</p>
          </div>
          <div className="period-select bg-white px-3 py-2 border-2 border-[#E7E7E7]">This Month ▾</div>

        </div>
        <div className="kpi-grid">
          <KPI icon={<LuUsersRound />} sub="Total Customers" value="48" title="Last month" />
          <KPI icon={<UserRoundCheck />} sub="Active" value="7" title="Last month" />
          <KPI icon={<UserRoundMinus />} sub="Inactive" value="13" title="Last month" />
          <KPI icon={<UserRoundPlus />} sub="New This Month" value="11" title="Last month" />
        </div>

        <section className="card" style={{ marginTop: 12 }}>
          <div className="card-header">
            <div className="card-title">Customers</div>
            <div className="table-actions">
              <input className="table-search" placeholder="Search here" />
              <button className="btn">Filter ▾</button>
            </div>
          </div>
          <div className="card-body">
            <div className="table">
              <div className="thead" style={{ gridTemplateColumns: '1fr 1fr 160px 180px 1fr 120px' }}>
                <div>Customer</div><div>Email</div><div>Phone</div><div>Last Interaction</div><div>Projects</div><div>Actions</div>
              </div>
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div className="trow" key={i} style={{ gridTemplateColumns: '1fr 1fr 160px 180px 1fr 120px' }}>
                  <div>John Snow</div><div>Johnny12@mail.com</div><div>+37 123 12345</div><div>Sep 12, 2025</div><div>Modern Kitchen Remodel</div>
                  <div><RowMenu onView={() => setOpen(true)} /></div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <CustomerSlide open={open} onClose={() => setOpen(false)} />
      </div>
    </div>
  )
}

export default Customers


