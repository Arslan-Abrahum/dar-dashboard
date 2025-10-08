import React from 'react'

function Card({ title, children }){
  return (
    <section className="card" style={{marginTop:12}}>
      <div className="card-header"><div className="card-title">{title}</div></div>
      <div className="card-body">{children}</div>
    </section>
  )
}

function Analytics(){
  return (
    <div className="projects-page">
      <div className="breadcrumb">Analytics</div>
      <h1 className="page-title">Good Morning, Sajibur</h1>
      <p className="page-sub">Track performance, monitor insights, and make data-driven decisions.</p>

      <div className="kpi-grid">
        <div className="kpi"><div className="kpi-icon">📊</div><div className="kpi-body"><div className="kpi-value">124</div><div className="kpi-title">Last month</div></div><div className="kpi-sub">Total Projects</div><button className="kebab">⋯</button></div>
        <div className="kpi"><div className="kpi-icon">✅</div><div className="kpi-body"><div className="kpi-value">84</div><div className="kpi-title">Last month</div></div><div className="kpi-sub">Orders Completed</div><button className="kebab">⋯</button></div>
        <div className="kpi"><div className="kpi-icon">🧾</div><div className="kpi-body"><div className="kpi-value">112</div><div className="kpi-title">Last month</div></div><div className="kpi-sub">Quotations Sent</div><button className="kebab">⋯</button></div>
        <div className="kpi"><div className="kpi-icon">📐</div><div className="kpi-body"><div className="kpi-value">124</div><div className="kpi-title">Last month</div></div><div className="kpi-sub">Designs Approved</div><button className="kebab">⋯</button></div>
      </div>

      <Card title="Projects Over Time">
        <div style={{height:220,background:'#f1f5f9',borderRadius:12}} />
      </Card>
      <div className="grid-2">
        <Card title="Orders Status">
          <div style={{height:220,background:'#f1f5f9',borderRadius:12}} />
        </Card>
        <Card title="Top Customers">
          <div className="table">
            <div className="thead" style={{gridTemplateColumns:'60px 1fr 140px 120px 160px 120px'}}>
              <div>#</div><div>Customer</div><div>Total Spent</div><div>Projects</div><div>Last Interaction</div><div>Status</div>
            </div>
            {[1,2,3,4].map(i=> (
              <div className="trow" key={i} style={{gridTemplateColumns:'60px 1fr 140px 120px 160px 120px'}}>
                <div>{i}</div><div>Elisa Sean</div><div>$12,460</div><div>24</div><div>12/09/2025</div><div><span className="status success">Active</span></div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="grid-2">
        <Card title="Customers Growth"><div style={{height:220,background:'#f1f5f9',borderRadius:12}} /></Card>
        <Card title="Team Performance"><div style={{height:220,background:'#f1f5f9',borderRadius:12}} /></Card>
      </div>
    </div>
  )
}

export default Analytics


