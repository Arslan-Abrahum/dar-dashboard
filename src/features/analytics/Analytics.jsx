import React from 'react'
import Header from '../../layouts/Header'
import {
  FaArrowLeft, MdArrowOutward,
  FaRegFolderOpen, PackageCheck, LuScrollText, UserRoundPlus
} from '../../assets/icons/icons';

function KPI({ icon, value, title, sub }) {
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

function Card({ title, children }) {
  return (
    <section className="card" style={{ marginTop: 12 }}>
      <div className="card-header"><div className="card-title">{title}</div></div>
      <div className="card-body">{children}</div>
    </section>
  )
}

function Analytics() {
  return (
    <div className="pages">
      <Header title="Analytics" icon={<FaArrowLeft className='text-[#054E45] text-[15px]' />} showIcon={true} />
      <div className="projects-page">
        <div className='flex items-center justify-between mb-6'>
          <div>
            <h1 className="page-title">Good Morning, Sajibur</h1>
            <p className="page-sub">Manage and track all customer projects from quotation to delivery.</p>
          </div>
          <div className="header-actions">
            <div className="period-select bg-white px-3 py-2 border-2 border-[#E7E7E7]">This Month ▾</div>
            <button className="text-[#054E45] bg-white px-4 py-2 border-2 border-[#054E45] flex items-center gap-3" onClick={() => { }}>Export <MdArrowOutward /></button>
          </div>
        </div>
        <div className="kpi-grid">
          <KPI icon={<FaRegFolderOpen />} sub="Total Projects" value="124" title="Last month" />
          <KPI icon={<PackageCheck />} sub="Orders Completed" value="84" title="Last month" />
          <KPI icon={<LuScrollText />} sub="Quotations Sent" value="112" title="Last month" />
          <KPI icon={<UserRoundPlus />} sub="Designs Approved" value="124" title="Last month" />
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-6'>
          <div className='lg:col-span-8 bg-white rounded-2xl shadow-md p-6'>
            <Card title="Projects Over Time" >
              <div style={{ height: 220, background: '#f1f5f9', borderRadius: 12 }} />
            </Card>
          </div>
          <div className='lg:col-span-4 bg-white rounded-2xl shadow-md p-6'>
            <Card title="Orders Status">
              <div style={{ height: 220, background: '#f1f5f9', borderRadius: 12 }} />
            </Card>
          </div>
        </div>
        <div>
          <Card title="Top Customers">
            <div className="table">
              <div className="thead" style={{ gridTemplateColumns: '60px 1fr 140px 120px 160px 120px' }}>
                <div>#</div><div>Customer</div><div>Total Spent</div><div>Projects</div><div>Last Interaction</div><div>Status</div>
              </div>
              {[1, 2, 3, 4].map(i => (
                <div className="trow" key={i} style={{ gridTemplateColumns: '60px 1fr 140px 120px 160px 120px' }}>
                  <div>{i}</div><div>Elisa Sean</div><div>$12,460</div><div>24</div><div>12/09/2025</div><div><span className="status success">Active</span></div>
                </div>
              ))}
            </div>
          </Card>
        </div>
        <div className="grid-2">
          <Card title="Customers Growth"><div style={{ height: 220, background: '#f1f5f9', borderRadius: 12 }} /></Card>
          <Card title="Team Performance"><div style={{ height: 220, background: '#f1f5f9', borderRadius: 12 }} /></Card>
        </div>
      </div>
    </div>
  )
}

export default Analytics


