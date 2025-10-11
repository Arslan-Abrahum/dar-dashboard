import React, { useState } from 'react'
import Header from '../../layouts/Header'
import { useLanguage } from '../../i18n/LanguageProvider'
import Modal from '../../components/common/Modal'
import {
  LuMoveUpRight, HiOutlineXMark, UserRoundPen,
  UserRoundCheck, UserRoundPlus, LuUsersRound, FaArrowLeft,
  GoPlus, MdArrowOutward,
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

function InviteMember({ open, onClose }) {
  const { t } = useLanguage()

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
    <Modal open={open} onClose={onClose} title={t('invite_new_member')} footer={footer} width={560}>
      <div className="page-sub">{t('invite_member_sub')}</div>
      <div className="form-grid">
        <label className="field"><div className="field-label">{t('full_name')}</div><input className="input" placeholder={t('enter_name') || 'Enter Name'} /></label>
        <label className="field"><div className="field-label">{t('phone')}</div><input className="input" placeholder={t('enter_phone') || 'Enter Phone Number'} /></label>
        <label className="field"><div className="field-label">{t('email_address')}</div><input className="input" placeholder={t('enter_email') || 'Enter Email Address'} /></label>
        <label className="field"><div className="field-label">{t('assign_role')}</div><select className="input"><option>{t('select_role') || 'Select Role'}</option></select></label>
        <label className="field"><div className="field-label">{t('department')}</div><select className="input"><option>{t('select_department') || 'Select department'}</option></select></label>
        <label className="field"><div className="field-label">{t('invitation_message')}</div><textarea className="input" rows={5} defaultValue={t('invite_default_message') || "Hello [Full Name],\n\nYou've been invited to join the DAR Platform as a [Role Name].\nPlease click the link below to set up your account and get started..."} /></label>
      </div>
    </Modal>
  )
}

function AddRole({ open, onClose }) {
  const roles = ['Designer', 'Operations Manager', 'Project Manager', 'Finance Officer', 'Sales']
  const { t } = useLanguage()
  const permissions = [
    t('perm_view_dashboard') || 'View Dashboard Stats',
    t('perm_access_analytics') || 'Access Analytics',
    t('perm_view_projects') || 'View All Projects',
    t('perm_create_edit_projects') || 'Create / Edit Projects',
    t('perm_approve_reject_designs') || 'Approve / Reject Designs',
    t('perm_create_edit_designs') || 'Create / Edit Designs',
  ]

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
  )
  return (
    <Modal open={open} onClose={onClose} title={t('add_new_role')} footer={footer} width={720}>
      <div className="page-sub">{t('add_role_sub')}</div>
      <div className='pb-11' style={{ alignItems: 'start' }}>
        <div>
          <label className="field"><div className="field-label">{t('role_name')}</div><select className="input"><option>{t('enter_role_name') || 'Enter Role Name'}</option>{roles.map(r => <option key={r}>{r}</option>)}</select></label>
          <label className="field"><div className="field-label">{t('role_description')}</div><input className="input" placeholder={t('enter_role_description') || 'Enter Role Description'} /></label>
          <label className="field"><div className="field-label">{t('email_address')}</div><input className="input" placeholder={t('enter_email') || 'Enter Email Address'} /></label>
          <label className="field"><div className="field-label">{t('permission_access')}</div><div className="list-box">{permissions.map(p => <label key={p} className="option"><input type="checkbox" /> {p}</label>)}</div></label>
        </div>
      </div>
    </Modal>
  )
}

function TeamManagement() {
  const { t } = useLanguage()
  const [inviteOpen, setInviteOpen] = useState(false)
  const [roleOpen, setRoleOpen] = useState(false)
  return (
    <div className="pages">
      <Header title="team_management" icon={<FaArrowLeft className='text-[#054E45] text-[15px]' />} showIcon={true} />
      <div className="projects-page">
        <div className='flex items-center justify-between mb-6'>
          <div>
            <h1 className="page-title">{t('good_morning')}, Sajibur</h1>
            <p className="page-sub">{t('team_management')} - {t('view_details')}</p>
          </div>
          <div className="header-actions">
            <button className="text-[#054E45] bg-white px-3 py-2 border-2 border-[#E7E7E7] flex items-center gap-3" onClick={() => setRoleOpen(true)}> <GoPlus /> {t('add_new_role')}</button>
            <button className="text-[#054E45] bg-white px-4 py-2 border-2 border-[#054E45] flex items-center gap-3" onClick={() => setInviteOpen(true)}>{t('invite_new_member')} <MdArrowOutward /></button>
          </div>
        </div>
        <div className="kpi-grid">
          <KPI icon={<LuUsersRound />} sub={t('team_management')} value="84" title={t('last_month') || 'Last month'} />
          <KPI icon={<UserRoundCheck />} sub={t('active') || 'Active'} value="56" title={t('last_month') || 'Last month'} />
          <KPI icon={<UserRoundPen />} sub={t('roles_assigned') || 'Roles Assigned'} value="84" title={t('last_month') || 'Last month'} />
          <KPI icon={<UserRoundPlus />} sub={t('pending_invites') || 'Pending Invites'} value="14" title={t('last_month') || 'Last month'} />
        </div>

        <section className="card" style={{ marginTop: 12 }}>
          <div className="card-header">
            <div className="card-title">{t('team_members')}</div>
            <div className="table-actions">
              <input className="table-search" placeholder={t('search_placeholder')} />
              <button className="btn">Filter ▾</button>
            </div>
          </div>
          <div className="card-body">
            <div className="table">
              <div className="thead" style={{ gridTemplateColumns: '1fr 1fr 1fr 140px 120px' }}>
                <div>{t('name')}</div><div>{t('role')}</div><div>{t('email_address')}</div><div>{t('status')}</div><div>{t('actions')}</div>
              </div>
              {[1, 2, 3, 4, 5].map(i => (
                <div className="trow" key={i} style={{ gridTemplateColumns: '1fr 1fr 1fr 140px 120px' }}>
                  <div>Sarah Ahmed</div><div>{t('role_admin')}</div><div>sarah.adam2@mail.com</div><div><span className="status success">{t('active')}</span></div><div>⋯</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <InviteMember open={inviteOpen} onClose={() => setInviteOpen(false)} />
        <AddRole open={roleOpen} onClose={() => setRoleOpen(false)} />
      </div>
    </div>
  )
}

export default TeamManagement


