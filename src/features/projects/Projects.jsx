import React, { useState } from 'react'
import ProjectSlideOver from './components/ProjectSlideOver'
import NewProjectModal from './components/NewProjectModal'
import {
  LuFolderCog, LuFolderCheck, LuCheckCheck,
  HiOutlineFolderArrowDown, HiMiniCube,
  FaArrowLeft, FaTruck,
  FiPenTool, FaRegFolderOpen, MdArrowOutward, CiFilter,
} from "../../assets/icons/icons";
import Header from '../../layouts/Header';
import { useLanguage } from '../../i18n/LanguageProvider'

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

function Stage({ title, desc, icon, isActive }) {
  return (
    <div className={`w-full border-2 ${isActive ? 'border-[#064E45]' : 'border-[#F7F7F7]'}  rounded-lg`}>
      <div className="stage-title mb-2 text-center">{title}</div>
      <div className='flex gap-3 stage'>
        <div className="stage-icon kpi-icon">
          {icon}
        </div>
        <div className="stage-meta">
          <div className="stage-desc">{desc}</div>
        </div>
      </div>
    </div>
  )
}

function Projects() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)
  const [newOpen, setNewOpen] = useState(false)
  const [activeStatus, setActiveStatus] = useState(2)

  const stages = [
    {
      title: t('quotation'),
      desc: t('quotation_approved'),
      icon: <LuCheckCheck />,
      active: true,
    },
    {
      title: t('order'),
      desc: t('order_confirmed'),
      icon: <LuCheckCheck />,
      active: true,
    },
    {
      title: t('designs'),
      desc: t('design_pending_review'),
      icon: <FiPenTool />,
      active: true,
      current: true,
    },
    {
      title: t('production'),
      desc: t('manufacturing_progress'),
      icon: <HiMiniCube />,
      active: false,
    },
    {
      title: t('delivery'),
      desc: t('scheduled_delivery', { date: 'March 24, 2025' }) || 'Scheduled for March 24, 2025',
      icon: <FaTruck />,
      active: false,
    },
  ];

  return (
    <div className="pages">
      <Header title="projects" icon={<FaArrowLeft className='text-[#054E45] text-[15px]' />} showIcon={true} />
      <div className="projects-page">
        <div className='flex items-center justify-between mb-6'>
          <div>
            <h1 className="page-title">{t('good_morning')}, Sajibur</h1>
            <p className="page-sub">{t('project_status')} - {t('recent_activity')}</p>
          </div>
          <div className="header-actions">
            <div className="period-select bg-white px-3 py-2 border-2 border-[#E7E7E7]">{t('this_month')} ▾</div>
            <button className="text-[#054E45] bg-white px-4 py-2 border-2 border-[#054E45] flex items-center gap-3" onClick={() => window.dispatchEvent(new CustomEvent('open-new-project'))}>{t('new_project')} <MdArrowOutward /></button>
          </div>
        </div>
        <div className="kpi-grid">
          <KPI icon={<FaRegFolderOpen />} sub={t('projects')} value="132" title="Last month" />
          <KPI icon={<LuFolderCog />} sub={t('active') || 'Active'} value="12" title="Last month" />
          <KPI icon={<LuFolderCheck />} sub={t('completed') || 'Completed'} value="114" title="Last month" />
          <KPI icon={<HiOutlineFolderArrowDown />} sub={t('archived') || 'Archived'} value="16" title="Last month" />
        </div>
        <section className="card" style={{ marginTop: 12 }}>
          <div className="card-header">
              <div className="card-title">{t('project_status')}</div>
            </div>
          <div className="card-body">
            <div className="stage-row grid grid-cols-1  lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-5">
              {
                stages && stages.map(
                  (ele, index) => {
                    const isActive = index == activeStatus
                    return (
                      <Stage key={index} title={ele.title} desc={ele.desc} icon={ele.icon} isActive={isActive} />
                    )
                  }
                )
              }
            </div>
          </div>
        </section>

        <section className="card" style={{ marginTop: 12 }}>
          <div className="card-header">
            <div className="card-title">{t('projects')}</div>
            <div className="table-actions">
              <input className="table-search" placeholder={t('search_placeholder')} />
              <button className="btn flex items-center gap-3">{t('filter')} <CiFilter/></button>
            </div>
          </div>
          <div className="card-body">
            <div className="table">
              <div className="thead">
                <div>{t('id')}</div>
                <div>{t('project')}</div>
                <div>{t('customer')}</div>
                <div>{t('status')}</div>
                <div>{t('current_stage')}</div>
                <div>{t('actions')}</div>
              </div>
              {[1, 2, 3, 4, 5].map((i) => (
                <div className="trow" key={i}>
                  <div>PRJ-2025-021</div>
                  <div>Modern Kitchen Remodel</div>
                  <div>Ali Hassan</div>
                  <div><span className="status success">{t('completed')}</span></div>
                  <div>{t('designs')}</div>
                  <div><button className="link flex items-center gap-1" onClick={() => setOpen(true)}>{t('view_details')} <MdArrowOutward /></button></div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <ProjectSlideOver open={open} onClose={() => setOpen(false)} />
        <NewProjectModal open={newOpen} onClose={() => setNewOpen(false)} />
      </div>
    </div>
  )
}

export default Projects


