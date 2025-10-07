import React from 'react'

function KPI({ icon, title, value }) {
  return (
    <div className="kpi">
      <div className="kpi-icon">{icon}</div>
      <div className="kpi-body">
        <div className="kpi-value">{value}</div>
        <div className="kpi-title">{title}</div>
      </div>
      <button className="kebab">⋯</button>
    </div>
  )
}

function AppointmentItem({ timeLeft = 'In 2h 16m' }) {
  return (
    <div className="card-row">
      <div className="row-meta">
        <span className="time-pill">⏺ {timeLeft}</span>
        <a className="link">view details</a>
      </div>
      <div className="row-title">Cabinet measurement visit</div>
      <div className="row-tags">
        <span className="tag danger">High</span>
        <span className="tag info">In Progress</span>
        <span className="tag violet">LumenForge</span>
        <div className="avatars">
          <div className="avatar" />
          <div className="avatar" />
          <div className="avatar" />
        </div>
      </div>
    </div>
  )
}

function OrderCard({ name = 'Benjamin Jusuf', status = 'Ready' }) {
  return (
    <div className="order-card">
      <div className="order-head">
        <div className="user">
          <div className="avatar" />
          <div className="user-meta">
            <div className="user-name">{name}</div>
            <div className="user-sub">Order #12163</div>
          </div>
        </div>
        <button className="kebab">⋯</button>
      </div>
      <div className="order-body">Titanium cabinets with metal rods</div>
      <div className="order-foot">
        <span className={`status ${status === 'Ready' ? 'success' : 'info'}`}>{status}</span>
      </div>
    </div>
  )
}

function ActivityItem({ title = 'Ali booked an appointment for 3 Sep' }) {
  return (
    <div className="activity-row">
      <div className="activity-title">{title}</div>
      <div className="activity-sub">Created at - 02:34 PM  Date - 12-07-2025</div>
    </div>
  )
}

function Dashboard() {
  return (
    <div className="dashboard-page">
      <h1 className="page-title">Good Morning, Sajibur</h1>
      <p className="page-sub">Here is an overview of your financial health and recent activity.</p>

      <div className="kpi-grid">
        <KPI icon="🗓" title="Total Appointments" value="132" />
        <KPI icon="📦" title="Active Orders" value="132" />
        <KPI icon="📝" title="Pending Designs" value="132" />
        <KPI icon="🧑‍🤝‍🧑" title="New Customers" value="132" />
      </div>

      <div className="grid-2">
        <section className="card">
          <div className="card-header">
            <div className="card-title">Upcoming Appointments</div>
            <a className="link">View all</a>
          </div>
          <div className="card-body spaced">
            <AppointmentItem />
            <AppointmentItem />
            <AppointmentItem />
          </div>
        </section>

        <section className="card">
          <div className="card-header">
            <div className="card-title">Pending Orders</div>
            <a className="link">View all</a>
          </div>
          <div className="card-body orders">
            <OrderCard />
            <OrderCard name="Alisa Brew" status="In Progress" />
            <OrderCard name="Benja" status="Ready" />
          </div>
        </section>
      </div>

      <div className="grid-1">
        <section className="card">
          <div className="card-header">
            <div className="card-title">Recent Activity</div>
            <a className="link">Show all</a>
          </div>
          <div className="card-body spaced">
            <ActivityItem />
            <ActivityItem title="Design #102 moved to ‘Approved’" />
            <ActivityItem title="Order #501 marked as Delivered" />
          </div>
        </section>
      </div>
    </div>
  )
}

export default Dashboard

