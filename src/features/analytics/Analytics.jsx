import React from 'react'
import Header from '../../layouts/Header'
import { useLanguage } from '../../i18n/LanguageProvider'
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
  const { t } = useLanguage()
  return (
    <div className="pages">
      <Header title="analytics" icon={<FaArrowLeft className='text-[#054E45] text-[15px]' />} showIcon={true} />
      <div className="projects-page">
        <div className='flex items-center justify-between mb-6'>
          <div>
            <h1 className="page-title">{t('good_morning')}, Sajibur</h1>
            <p className="page-sub">{t('analytics')} - {t('view_details')}</p>
          </div>
          <div className="header-actions">
            <div className="period-select bg-white px-3 py-2 border-2 border-[#E7E7E7]">{t('this_month')} ▾</div>
            <button className="text-[#054E45] bg-white px-4 py-2 border-2 border-[#054E45] flex items-center gap-3" onClick={() => { }}>{t('view_details')} <MdArrowOutward /></button>
          </div>
        </div>
        <div className="kpi-grid">
          <KPI icon={<FaRegFolderOpen />} sub={t('total_projects')} value="124" title={t('last_month') || 'Last month'} />
          <KPI icon={<PackageCheck />} sub={t('orders_completed')} value="84" title={t('last_month') || 'Last month'} />
          <KPI icon={<LuScrollText />} sub={t('quotations_sent')} value="112" title={t('last_month') || 'Last month'} />
          <KPI icon={<UserRoundPlus />} sub={t('designs_approved')} value="124" title={t('last_month') || 'Last month'} />
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-6'>
          <div className='lg:col-span-8 bg-white rounded-2xl shadow-md p-6'>
            <Card title={t('projects_over_time')} >
              <div style={{ height: 220, background: '#f1f5f9', borderRadius: 12 }} />
            </Card>
          </div>
          <div className='lg:col-span-4 bg-white rounded-2xl shadow-md p-6'>
            <Card title={t('orders_status')}>
              <div style={{ height: 220, background: '#f1f5f9', borderRadius: 12 }} />
            </Card>
          </div>
        </div>
        <div>
          <Card title={t('top_customers')}>
            <div className="table">
              <div className="thead" style={{ gridTemplateColumns: '60px 1fr 140px 120px 160px 120px' }}>
                <div>#</div><div>{t('customer')}</div><div>{t('total_spent')}</div><div>{t('projects')}</div><div>{t('last_interaction')}</div><div>{t('status')}</div>
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
          <Card title={t('customers_growth')}><div style={{ height: 220, background: '#f1f5f9', borderRadius: 12 }} /></Card>
          <Card title={t('team_performance')}><div style={{ height: 220, background: '#f1f5f9', borderRadius: 12 }} /></Card>
        </div>
      </div>
    </div>
  )
}

export default Analytics


