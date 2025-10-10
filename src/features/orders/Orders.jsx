import React, { useMemo, useState } from 'react'
import Modal from '../../components/common/Modal'
import Header from '../../layouts/Header'
import pdfIcon from '../../assets/images/pdf.png'
import {
  FaArrowLeft, Package, PackageCheck, PackageX, PackageOpen,
  Mails, Phone, House, Menu, Link, LuUserRound, FaRegFolderOpen, FaTruck,
  LuCheckCheck, HiOutlineXMark, LuMoveUpRight, LuCircleDollarSign, FaCheck, LuHourglass
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
        </div>
      )}
    </div>
  )
}

function DetailsSlide({ open, onClose }) {
  const [tab, setTab] = useState('Overview')

  const [activeTab, setActiveTab] = useState(2)

  const footer = (
    // <div className="slide-footer">
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
    <Modal open={open} onClose={onClose} width={640} footer={footer}>
      <div className="slide-over pb-10">
        <div className="slide-head">
          <div className="slide-title">ORD-2025-0921</div>
          <div className="slide-sub">Below are all the details about this order</div>
          <div className="tabs">
            {['Overview', 'Files', 'Payment'].map(t => (
              <button key={t} className={`tab-btn ${tab === t ? 'active' : ''}`} onClick={() => setTab(t)}>{t}</button>
            ))}
          </div>
        </div>
        <div className="slide-body">
          {tab === 'Overview' && (
            <div>
              <div className="steps" style={{ gridTemplateColumns: 'repeat(4,1fr)' }}>
                {['Quotation', 'Design', 'Production', 'Delivery'].map((s, i) => {
                  const activeTabs = activeTab == i
                  const iconText = 'Production' == s

                  return (
                    <div className={`rounded-md step ${i < 3 ? 'done' : ''}`} key={s} onClick={() => setActiveTab(i)}>
                      <div className="step-lbl mb-1">{s}</div>
                      <div className={`rounded-md h-[56px] w-[56px] bg-[#F9FFDE] flex justify-center border-2 items-center ${activeTabs ? 'border-[#064E45]' : 'border-transparent'}`}>
                        <div className="step-ic">
                          {iconText ? (
                            <PackageOpen className='text-[#E0FF63]' />
                          ) : (
                            s === 'Delivery' ? (
                              <FaTruck className='text-[#E0FF63]' />
                            ) : (
                              <LuCheckCheck className='text-[#E0FF63]' />
                            )
                          )}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
              <div>
                <div>
                  <div className="section-title">Customer Information</div>
                  <div className="info-grid">
                    <div className='flex items-center gap-3'> <LuUserRound className='icon-order' /> Customer Name</div><div>Esra al Khandari</div>
                    <div className='flex items-center gap-3'> <Phone className='icon-order' /> Customer Number</div><div>+965 97194665</div>
                    <div className='flex items-center gap-3'> <Mails className='icon-order' /> Email</div><div>MJaffer1@gmail.com</div>
                    <div className='flex items-center gap-3'> <House className='icon-order' /> Delivery Address</div><div>Park View City, Kuwait</div>
                  </div>
                </div>
                <div>
                  <div className="section-title">Order Summary</div>
                  <div className="info-grid">
                    {/* Mails, Phone, House, Menu, Link, LuUserRound, LuFolderCog */}

                    <div className='flex items-center gap-3'> <Menu className='icon-order' /> Order no.</div><div>ORD-2025-0921</div>
                    <div className='flex items-center gap-3'> <FaRegFolderOpen className='icon-order' /> Linked Project</div><div>Office Fit-out</div>
                    <div className='flex items-center gap-3'> <Link className='icon-order' /> Source</div><div>DAR Designer</div>
                    <div className='flex items-center gap-3'> <FaTruck className='icon-order' /> Est. Delivery</div><div>Oct 20, 2025</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {tab === 'Files' && (
            <div className='pb-40'>
              {/* <input id="order-files" type="file" accept="application/pdf" hidden multiple /> */}
              {/* <label htmlFor="order-files" className="h-12 my-3 block">Upload PDF</label> */}
              <div className="files-list" style={{ marginTop: 10 }}>
                {['Design_file.pdf', 'File_info_320.pdf', 'Invoice_final.pdf'].map(n => (
                  <div className="file-row" key={n}>
                    <div className="file-ic">
                      <img src={pdfIcon} alt="pdf Icons" />
                    </div>
                    <div className="file-name">{n}<div className="muted text-gray-400">pdf</div></div>
                    <button className="kebab">⋯</button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tab === 'Payment' && (
            <div>
              <div className="section-title">Payment Details</div>
              <div className="info-grid">
                <div className='flex items-center gap-3'> <Menu className='icon-order' /> Order No</div><div>OR-08765</div>
                <div className='flex items-center gap-3'> <LuUserRound className='icon-order' /> Customer</div><div>Omer</div>
                <div className='flex items-center gap-3'> <LuCircleDollarSign className='icon-order' /> Total Amount</div><div>$50,000</div>
                <div className='flex items-center gap-3'> <FaCheck className='icon-order' /> Paid Amount</div><div>$25,000</div>
                <div className='flex items-center gap-3'> <LuHourglass className='icon-order' /> Remaining Amount</div><div>$25,000</div>
              </div>
              <div className="section-title" style={{ marginTop: 12 }}>Payment History</div>
              <div className="table">
                <div className="thead" style={{ gridTemplateColumns: '80px 1fr 160px 140px 120px' }}>
                  <div>No</div><div>Services</div><div>Amount</div><div>Status</div><div>Actions</div>
                </div>
                {[1, 2, 3, 4].map(i => (
                  <div className="trow" key={i} style={{ gridTemplateColumns: '80px 1fr 160px 140px 120px' }}>
                    <div>0{i}</div><div>Measurement</div><div>$25,000</div><div><span className="status info">Paid</span></div><div>⋯</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

    </Modal>
  )
}

function Orders() {
  const [open, setOpen] = useState(false)
  return (
    <div className="pages">
      <Header title="Orders" icon={<FaArrowLeft className='text-[#054E45] text-[15px]' />} showIcon={true} />
      <div className="projects-page">
        <div className='flex items-center justify-between mb-6'>
          <div>
            <h1 className="page-title">Good Morning, Sajibur</h1>
            <p className="page-sub">Manage all orders, monitor their status, and ensure smooth delivery.</p>
          </div>
          <div className="period-select bg-white px-3 py-2 border-2 border-[#E7E7E7]">This Month ▾</div>

        </div>

        <div className="kpi-grid">
          <KPI icon={<Package />} sub="Total Orders" value="7" title="Last month" />
          <KPI icon={<PackageOpen />} sub="Active" value="13" title="Last month" />
          <KPI icon={<PackageCheck />} sub="Completed" value="13" title="Last month" />
          <KPI icon={<PackageX />} sub="Cancelled" value="11" title="Last month" />
        </div>

        <section className="card" style={{ marginTop: 12 }}>
          <div className="card-header">
            <div className="card-title">Orders</div>
            <div className="table-actions">
              <input className="table-search" placeholder="Search here" />
              <button className="btn">Filter ▾</button>
            </div>
          </div>
          <div className="card-body">
            <div className="table">
              <div className="thead" style={{ gridTemplateColumns: '160px 1fr 160px 160px 160px 120px' }}>
                <div>Order #</div>
                <div>Project</div>
                <div>Customer</div>
                <div>Source</div>
                <div>Status</div>
                <div>Actions</div>
              </div>
              {[1, 2, 3, 4, 5].map((i) => (
                <div className="trow" key={i} style={{ gridTemplateColumns: '160px 1fr 160px 160px 160px 120px' }}>
                  <div>ORD-2025-0921</div>
                  <div>Modern Kitchen</div>
                  <div>Tim Bronze</div>
                  <div>DAR Configurator</div>
                  <div><span className="status info">In Progress</span></div>
                  <div><RowMenu onView={() => setOpen(true)} /></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <DetailsSlide open={open} onClose={() => setOpen(false)} />
      </div>
    </div>
  )
}

export default Orders


