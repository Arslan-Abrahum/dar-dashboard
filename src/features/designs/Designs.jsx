import React, { useState } from 'react'
import DesignSlideOver from './components/DesignSlideOver'
import Header from '../../layouts/Header'
import { useLanguage } from '../../i18n/LanguageProvider'
import { FaArrowLeft, LuClipboardPen, FiPenTool, LuCheckCheck, GoClock } from '../../assets/icons/icons'

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

function RowActions({ onView }) {
  const [open, setOpen] = useState(false)
  const { t } = useLanguage()
  return (
    <div style={{ position: 'relative' }}>
      <button className="icon-btn" onClick={() => setOpen(v => !v)}>⋯</button>
      {open && (
        <div className="menu" onMouseLeave={() => setOpen(false)}>
          <button className="menu-item" onClick={() => { onView(); setOpen(false) }}>{t('view_details')}</button>
          <button className="menu-item">{t('share')}</button>
          <button className="menu-item">{t('download')}</button>
        </div>
      )}
    </div>
  )
}

function Designs() {
  const { t } = useLanguage()
  const [viewOpen, setViewOpen] = useState(false)
  return (
    <div className='pages'>
  <Header title={t('designs')} icon={<FaArrowLeft className='text-[#054E45] text-[15px]' />} showIcon={true} />
      <div className="projects-page">
        <div className='flex justify-between items-center mb-6'>
          <div>
            <h1 className="page-title">{t('good_morning')}, Sajibur</h1>
            <p className="page-sub">{t('designs')} - {t('view_details')}</p>
          </div>
          <div className="header-actions">
            <div className="period-select bg-white px-3 py-2 border-2 border-[#E7E7E7]">{t('this_month')} ▾</div>
          </div>
        </div>
        <div className="kpi-grid">
          <KPI icon={<FiPenTool />} sub={t('total_designs') || 'Total Designs'} value="48" title={t('this_month')} />
          <KPI icon={<GoClock />} sub={t('pending') || 'Pending'} value="7" title={t('this_month')} />
          <KPI icon={<LuCheckCheck />} sub={t('approved') || 'Approved'} value="13" title={t('this_month')} />
          <KPI icon={<LuClipboardPen />} sub={t('in_production') || 'In Production'} value="11" title={t('this_month')} />
        </div>

        <section className="card" style={{ marginTop: 12 }}>
          <div className="card-header">
            <div className="card-title">{t('designs')}</div>
            <div className="table-actions">
              <input className="table-search" placeholder={t('search_placeholder')} />
              <button className="btn">{t('filter')} ▾</button>
            </div>
          </div>
          <div className="card-body">
            <div className="table">
              <div className="thead" style={{ gridTemplateColumns: '160px 1fr 200px 180px 200px 120px' }}>
                <div>{t('id')}</div>
                <div>{t('project')}</div>
                <div>{t('customer')}</div>
                <div>{t('assignee')}</div>
                <div>{t('current_stage') || 'Current Stage'}</div>
                <div>{t('actions')}</div>
              </div>
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div className="trow" key={i} style={{ gridTemplateColumns: '160px 1fr 200px 180px 200px 120px' }}>
                  <div>DSG-2025-0{i}</div>
                  <div>Modern Kitchen Remodel</div>
                  <div>John Snow</div>
                  <div>Brandon Leo</div>
                  <div>{t('draft') || 'Draft'}</div>
                  <div><RowActions onView={() => setViewOpen(true)} /></div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <DesignSlideOver open={viewOpen} onClose={() => setViewOpen(false)} />
      </div>
    </div>
  )
}

export default Designs


