import React, { useState } from 'react'
import Modal from '../../components/common/Modal'

function KPI({ icon, title, value, sub }){
  return (
    <div className="kpi">
      <div className="kpi-icon">{icon}</div>
      <div className="kpi-body"><div className="kpi-value">{value}</div><div className="kpi-title">{title}</div></div>
      <div className="kpi-sub">{sub}</div>
      <button className="kebab">⋯</button>
    </div>
  )
}

function InviteMember({ open, onClose }){
  const footer = (<div className="footer-actions"><button className="btn" onClick={onClose}>✗ CTA</button><button className="btn primary" onClick={onClose}>CTA ↗</button></div>)
  return (
    <Modal open={open} onClose={onClose} title="Invite New Member" footer={footer} width={560}>
      <div className="page-sub">Easily add a new team member and streamline collaboration.</div>
      <div className="form-grid">
        <label className="field"><div className="field-label">Full Name</div><input className="input" placeholder="Enter Name" /></label>
        <label className="field"><div className="field-label">Phone</div><input className="input" placeholder="Enter Phone Number" /></label>
        <label className="field"><div className="field-label">Email Address</div><input className="input" placeholder="Enter Email Address" /></label>
        <label className="field"><div className="field-label">Assign Role</div><select className="input"><option>Select Role</option><option>Designer</option><option>Operations Manager</option><option>Project Manager</option><option>Finance Officer</option><option>Sales</option></select></label>
        <label className="field"><div className="field-label">Department</div><select className="input"><option>Select department</option></select></label>
        <label className="field"><div className="field-label">Invitation Message</div><textarea className="input" rows={5} defaultValue={"Hello [Full Name],\n\nYou've been invited to join the DAR Platform as a [Role Name].\nPlease click the link below to set up your account and get started..."} /></label>
      </div>
    </Modal>
  )
}

function AddRole({ open, onClose }){
  const roles = ['Designer','Operations Manager','Project Manager','Finance Officer','Sales']
  const permissions = ['View Dashboard Stats','Access Analytics','View All Projects','Create / Edit Projects','Approve / Reject Designs','Create / Edit Designs']
  return (
    <Modal open={open} onClose={onClose} title="Add New Role" footer={<div className="footer-actions"><button className="btn" onClick={onClose}>✗ CTA</button><button className="btn primary" onClick={onClose}>CTA ↗</button></div>} width={720}>
      <div className="page-sub">Create custom roles with the right access.</div>
      <div className="two-col" style={{alignItems:'start'}}>
        <div>
          <label className="field"><div className="field-label">Role Name</div><select className="input"><option>Enter Role Name</option>{roles.map(r=> <option key={r}>{r}</option>)}</select></label>
          <label className="field"><div className="field-label">Role Description</div><input className="input" placeholder="Enter Role Description" /></label>
          <label className="field"><div className="field-label">Email Address</div><input className="input" placeholder="Enter Email Address" /></label>
          <label className="field"><div className="field-label">Permission & Access</div><div className="list-box">{permissions.map(p=> <label key={p} className="option"><input type="checkbox" /> {p}</label>)}</div></label>
        </div>
        <div>
          <div className="section-title">Roles - Dropdown Menu</div>
          <input className="input" placeholder="Search roles"/>
          <div className="list-box">{roles.map(r=> <div key={r}>{r}</div>)}</div>
          <div className="section-title" style={{marginTop:12}}>Permissions - Dropdown Menu</div>
          <input className="input" placeholder="Search permissions"/>
          <div className="list-box">
            <div className="section-title">Dashboard Access</div>
            {permissions.map(p=> <label key={p} className="option"><input type="checkbox"/> {p}</label>)}
          </div>
        </div>
      </div>
    </Modal>
  )
}

function TeamManagement(){
  const [inviteOpen,setInviteOpen]=useState(false)
  const [roleOpen,setRoleOpen]=useState(false)
  return (
    <div className="projects-page">
      <div className="breadcrumb">Team Management</div>
      <h1 className="page-title">Good Morning, Sajibur</h1>
      <p className="page-sub">Manage your team, assign roles, and keep collaboration seamless.</p>

      <div className="kpi-grid">
        <KPI icon="🧍" title="Total Members" value="84" sub="Last month" />
        <KPI icon="✅" title="Active" value="56" sub="Last month" />
        <KPI icon="🧩" title="Roles Assigned" value="84" sub="Last month" />
        <KPI icon="✉️" title="Pending Invites" value="14" sub="Last month" />
      </div>

      <div className="card" style={{padding:12,display:'flex',gap:10,justifyContent:'flex-end'}}>
        <button className="btn" onClick={()=>setRoleOpen(true)}>+ Add New Role</button>
        <button className="btn primary" onClick={()=>setInviteOpen(true)}>Invite New Member ↗</button>
      </div>

      <section className="card" style={{marginTop:12}}>
        <div className="card-header">
          <div className="card-title">Team Members</div>
          <div className="table-actions">
            <input className="table-search" placeholder="Search here" />
            <button className="btn">Filter ▾</button>
          </div>
        </div>
        <div className="card-body">
          <div className="table">
            <div className="thead" style={{gridTemplateColumns:'1fr 1fr 1fr 140px 120px'}}>
              <div>Name</div><div>Role</div><div>Email</div><div>Status</div><div>Actions</div>
            </div>
            {[1,2,3,4,5].map(i=> (
              <div className="trow" key={i} style={{gridTemplateColumns:'1fr 1fr 1fr 140px 120px'}}>
                <div>Sarah Ahmed</div><div>Admin</div><div>sarah.adam2@mail.com</div><div><span className="status success">Active</span></div><div>⋯</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InviteMember open={inviteOpen} onClose={()=>setInviteOpen(false)} />
      <AddRole open={roleOpen} onClose={()=>setRoleOpen(false)} />
    </div>
  )
}

export default TeamManagement


