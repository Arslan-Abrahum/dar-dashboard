import React, { useState } from 'react'
import Modal from '../../../components/common/Modal'
import {HiOutlineXMark, LuMoveUpRight} from '../../../assets/icons/icons'
import { useLanguage } from '../../../i18n/LanguageProvider'

function Tab({ label, active, onClick }) {
  return <button className={`tab-btn ${active ? 'active' : ''}`} onClick={onClick}>{label}</button>
}

function Overview() {
  const { t } = useLanguage()
  return (
    <div>
      <div className="section-title">{t('customer_information')}</div>
      <div className="info-grid">
        <div>{t('full_name')}</div><div>Esra al Khandari</div>
        <div>{t('phone')}</div><div>+965 97194665</div>
        <div>{t('email_address')}</div><div>MJaffer1@gmail.com</div>
        <div>{t('delivery_address')}</div><div>Park View City, Kuwait</div>
      </div>

      <div className="section-title" style={{ marginTop: 12 }}>{t('design_summary')}</div>
      <div className="info-grid">
        <div>{t('design_id')}</div><div>ORD-2025-0921</div>
        <div>{t('project_name')}</div><div>Villa Kitchen Upgrade</div>
        <div>{t('designer')}</div><div>Abdol Feghali</div>
        <div>{t('revisions')}</div><div>4 Rounds</div>
      </div>

      <div className="section-title" style={{ marginTop: 12 }}>{t('assignees')}</div>
      <div className="info-grid">
        <div>{t('assignee')} 1</div><div>Abdol Feghali</div>
        <div>{t('assignee')} 2</div><div>Lisa Wong</div>
        <div>{t('assignee')} 3</div><div>Mohammed Ali</div>
      </div>
    </div>
  )
}

function DesignTab() {
  const { t } = useLanguage()
  const [comments, setComments] = useState([
    { id: 1, author: 'Emilia Joseph', time: '2 days ago', text: 'Design is fine but it lacks spacing for breathing space in the room.' },
    { id: 2, author: 'Try StewardS', time: '40 minutes ago', text: 'Design is fine but it lacks spacing for breathing space in the room.' },
  ])
  const [newText, setNewText] = useState('')

  const add = () => {
    if (!newText.trim()) return
    setComments(prev => [...prev, { id: Date.now(), author: 'You', time: 'just now', text: newText.trim() }])
    setNewText('')
  }

  return (
    <div>
      <div className="section-title">{t('design_preview')}</div>
      <div className="thumb" style={{ height: 180, borderRadius: 12 }} />

      <div className="section-title" style={{ marginTop: 12 }}>{t('comments')}</div>
      <div className="comments">
        {comments.map(c => (
          <div className="comment" key={c.id}>
            <div className="avatar" />
            <div className="comment-body">
              <div className="comment-meta"><b>{c.author}</b> <span className="muted">({c.time})</span></div>
              <div className="comment-text">{c.text}</div>
            </div>
          </div>
        ))}
        <div className="comment new">
          <div className="avatar" />
          <input className="input" placeholder={t('add_comment')} value={newText} onChange={e => setNewText(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') add() }} />
        </div>
      </div>
    </div>
  )
}

function DesignSlideOver({ open, onClose }) {
  const { t } = useLanguage()
  const [tab, setTab] = useState('Overview')
  return (
    <Modal open={open} onClose={onClose} width={520}>
      <div className="slide-over">
        <div className="slide-head">
          <div className="slide-title">DSG-2025-011</div>
          <div className="slide-sub">{t('design_details_subtitle')}</div>
          <div className="tabs">
            <Tab label={t('overview')} active={tab === 'Overview'} onClick={() => setTab('Overview')} />
            <Tab label={t('design_tab')} active={tab === 'Design'} onClick={() => setTab('Design')} />
          </div>
        </div>
        <div className="slide-body">
          {tab === 'Overview' ? <Overview /> : <DesignTab />}
        </div>
        <div className="slide-footer">

          {/* Footer */}
          <div className="footer-actions w-full bg-white py-3">
            <button
              className="flex-1 flex justify-center items-center text-[#054E45] border-2 border-[#054E45] py-2 gap-2"
              onClick={onClose}
            >
              <HiOutlineXMark /> {t('close')}
            </button>
            <button
              className="flex-1 flex justify-center items-center bg-[#054E45] py-2 text-white gap-2"
              onClick={onClose}
            >
              {t('open_design')} <LuMoveUpRight />
            </button>
          </div>
          {/* Footer */}
        </div>
      </div>
    </Modal>
  )
}

export default DesignSlideOver


