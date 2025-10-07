import React, { useState } from 'react'
import Modal from '../../../components/common/Modal'

function Field({ label, children }){
  return (
    <label className="field">
      <div className="field-label">{label}</div>
      {children}
    </label>
  )
}

function NewProjectModal({ open, onClose }){
  const [name, setName] = useState('')
  const [customer, setCustomer] = useState('')
  const [assignee, setAssignee] = useState('')
  const [notes, setNotes] = useState('')

  const footer = (
    <div className="footer-actions">
      <button className="btn" onClick={onClose}>✗ CTA</button>
      <button className="btn primary" onClick={onClose}>CTA ↗</button>
    </div>
  )

  return (
    <Modal open={open} onClose={onClose} title="Create Project" footer={footer} width={560}>
      <div className="page-sub">Quickly create a new project and start collaborating instantly.</div>
      <div className="form-grid">
        <Field label="Project name">
          <input className="input" placeholder="e.g., Modern Kitchen Redesign" value={name} onChange={e=>setName(e.target.value)} />
        </Field>
        <Field label="Customer">
          <select className="input" value={customer} onChange={e=>setCustomer(e.target.value)}>
            <option value="">Select customer</option>
            <option>Ali Hassan</option>
            <option>Brandon Leo</option>
          </select>
        </Field>
        <Field label="Assign Team">
          <select className="input" value={assignee} onChange={e=>setAssignee(e.target.value)}>
            <option value="">Select team member</option>
            <option>Sasha Cruise</option>
            <option>Alaska Miro</option>
          </select>
        </Field>
        <Field label="Notes">
          <textarea className="input" rows={6} placeholder="Add notes" value={notes} onChange={e=>setNotes(e.target.value)} />
        </Field>
      </div>
    </Modal>
  )
}

export default NewProjectModal


