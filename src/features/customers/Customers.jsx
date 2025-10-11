import React, { useState } from 'react'
import Modal from '../../components/common/Modal'
import Header from '../../layouts/Header'
import { useLanguage } from '../../i18n/LanguageProvider'
import {
  FaArrowLeft, UserRoundCheck, UserRoundMinus, UserRoundPlus, LuUsersRound,
  Mails, Phone, House, LuUserRound, HiOutlineXMark, LuMoveUpRight,
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

function RowMenu({ onView }) {
  const [open, setOpen] = useState(false)
  const { t } = useLanguage()
  return (
    <div style={{ position: 'relative' }}>
      <button className="icon-btn" onClick={() => setOpen(v => !v)}>⋯</button>
      {open && (
        <div className="menu" onMouseLeave={() => setOpen(false)}>
          <button className="menu-item" onClick={() => { onView(); setOpen(false) }}>{t('view_details')}</button>
          <button className="menu-item" onClick={() => { alert(t('exporting') || 'Exporting...'); setOpen(false) }}>{t('export')}</button>
        </div>
      )}
    </div>
  )
}

function CustomerSlide({ open, onClose }) {
  const { t } = useLanguage()
  const [tab, setTab] = useState('personal')


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
    <Modal open={open} onClose={onClose} title="Customer Details" width={640} footer={footer}>
      <div className="tabs" style={{ marginTop: -8 }}>
        {[{key:'personal',label:t('personal_information')},{key:'current',label:t('current_orders')},{key:'history',label:t('order_history')}].map(tb => (
          <button key={tb.key} className={`tab-btn ${tab === tb.key ? 'active' : ''}`} onClick={() => setTab(tb.key)}>{tb.label}</button>
        ))}
      </div>

      {tab === 'personal' && (
        <div className='pb-[335px]'>
          <div className="section-title">{t('personal_information')}</div>
          <div className="info-grid">
            <div className='flex items-center gap-3'> <LuUserRound className='icon-order' /> {t('full_name')}</div><div>Esra al Khandari</div>
            <div className='flex items-center gap-3'> <Phone className='icon-order' /> {t('phone')}</div><div>+965 97194665</div>
            <div className='flex items-center gap-3'> <Mails className='icon-order' /> {t('email_address')}</div><div>MJaffer1@gmail.com</div>
            <div className='flex items-center gap-3'> <House className='icon-order' /> {t('delivery_address')}</div><div>Park View City, Kuwait</div>
          </div>
        </div>
      )}

      {tab === 'current' && (
        <div className="items-list pb-40">
          {[1, 2, 3, 4].map(i => (
            <div className="item-row" key={i} style={{ gridTemplateColumns: '80px 1fr 100px' }}>
              <div className="thumb" />
              <div>
                <div><b>ORD-0004563</b></div>
                <div className="item-sub">{t('delivery_eta')}: 23 Sep, 2025</div>
                <div className="item-sub">{t('items_label')}: 01  {t('status_label')}: Out for Delivery</div>
              </div>
              <div className="item-price">$6,500</div>
            </div>
          ))}
        </div>
      )}

      {tab === 'history' && (
        <div className="table pb-32">
          <div className="thead mt-6" style={{ gridTemplateColumns: '140px 1fr 120px 140px 120px' }}>
            <div>{t('order_id')}</div><div>{t('date')}</div><div>{t('items')}</div><div>{t('status')}</div><div>{t('amount')}</div>
          </div>
          {[1, 2, 3, 4].map(i => (
            <div className="trow" key={i} style={{ gridTemplateColumns: '140px 1fr 120px 140px 120px' }}>
              <div>OR-0078</div><div>Jan 12, 2025</div><div>0{i}</div><div><span className="status success">Delivered</span></div><div>$12,450</div>
            </div>
          ))}
        </div>
      )}
    </Modal>
  )
}

function Customers() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)
  return (
    <div className="pages">
      <Header title="customers" icon={<FaArrowLeft className='text-[#054E45] text-[15px]' />} showIcon={true} />
      <div className="projects-page">
        <div className='flex items-center justify-between mb-6'>
          <div>
            <h1 className="page-title">{t('good_morning')}, Sajibur</h1>
            <p className="page-sub">{t('customers')} - {t('view_details')}</p>
          </div>
          <div className="period-select bg-white px-3 py-2 border-2 border-[#E7E7E7]">This Month ▾</div>

        </div>
        <div className="kpi-grid">
          <KPI icon={<LuUsersRound />} sub={t('total_customers')} value="48" title={t('last_month') || 'Last month'} />
          <KPI icon={<UserRoundCheck />} sub={t('active')} value="7" title={t('last_month') || 'Last month'} />
          <KPI icon={<UserRoundMinus />} sub={t('inactive')} value="13" title={t('last_month') || 'Last month'} />
          <KPI icon={<UserRoundPlus />} sub={t('new_this_month')} value="11" title={t('last_month') || 'Last month'} />
        </div>

        <section className="card" style={{ marginTop: 12 }}>
          <div className="card-header">
            <div className="card-title">{t('customers')}</div>
            <div className="table-actions">
              <input className="table-search" placeholder={t('search_placeholder')} />
              <button className="btn">Filter ▾</button>
            </div>
          </div>
          <div className="card-body">
            <div className="table">
              <div className="thead" style={{ gridTemplateColumns: '1fr 1fr 160px 180px 1fr 120px' }}>
                <div>{t('customer')}</div><div>{t('email_address')}</div><div>{t('phone')}</div><div>{t('last_interaction')}</div><div>{t('projects')}</div><div>{t('actions')}</div>
              </div>
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div className="trow" key={i} style={{ gridTemplateColumns: '1fr 1fr 160px 180px 1fr 120px' }}>
                  <div>John Snow</div><div>Johnny12@mail.com</div><div>+37 123 12345</div><div>Sep 12, 2025</div><div>Modern Kitchen Remodel</div>
                  <div><RowMenu onView={() => setOpen(true)} /></div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <CustomerSlide open={open} onClose={() => setOpen(false)} />
      </div>
    </div>
  )
}

export default Customers


