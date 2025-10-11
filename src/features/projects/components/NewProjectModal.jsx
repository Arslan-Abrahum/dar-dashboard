import React, { useState } from 'react'
import Modal from '../../../components/common/Modal'
import { useLanguage } from '../../../i18n/LanguageProvider'
import { LuMoveUpRight, HiOutlineXMark } from '../../../assets/icons/icons'

function Field({ label, children }) {
  return (
    <label className="field">
      <div className="field-label">{label}</div>
      {children}
    </label>
  )
}

function NewProjectModal({ open, onClose }) {
  const { t } = useLanguage()
  const [name, setName] = useState('')
  const [customer, setCustomer] = useState('')
  const [assignee, setAssignee] = useState('')
  const [notes, setNotes] = useState('')

  const footer = (
    <div className="footer-actions w-full bg-white py-3">
      <button
        className="flex-1 flex justify-center items-center text-[#054E45] border-2 border-[#054E45] py-2 gap-2"
        onClick={onClose}
      >
        <HiOutlineXMark /> CTA
      </button>
      <button
        className="flex-1 flex justify-center items-center bg-[#054E45] py-2 text-white gap-2"
        onClick={onClose}
      >
        CTA <LuMoveUpRight />
      </button>
    </div>
  );


  return (
    <Modal open={open} onClose={onClose} title="create_project" footer={footer} width={520}>
        <div className="page-sub mb-4">{t('create_project')} - {t('new_project')}</div>
        <div className="form-grid pb-28">
          <Field label={t('project_name')}>
            <input className="input" placeholder={t('project_name')} value={name} onChange={e => setName(e.target.value)} />
          </Field>
          <Field label={t('customer')}>
            <select className="input" value={customer} onChange={e => setCustomer(e.target.value)}>
              <option value="">{t('customer')}</option>
              <option>Ali Hassan</option>
              <option>Brandon Leo</option>
            </select>
          </Field>
          <Field label={t('assign_team')}>
            <select className="input" value={assignee} onChange={e => setAssignee(e.target.value)}>
              <option value="">{t('assign_team')}</option>
              <option>Sasha Cruise</option>
              <option>Alaska Miro</option>
            </select>
          </Field>
          <Field label={t('notes')}>
            <textarea className="input" rows={6} placeholder={t('notes')} value={notes} onChange={e => setNotes(e.target.value)} />
          </Field>
        </div>
    </Modal>
  )
}

export default NewProjectModal