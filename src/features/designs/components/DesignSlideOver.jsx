import React, { useState } from 'react'
import Modal from '../../../components/common/Modal'
import {HiOutlineXMark, LuMoveUpRight} from '../../../assets/icons/icons'

function Tab({ label, active, onClick }) {
  return <button className={`tab-btn ${active ? 'active' : ''}`} onClick={onClick}>{label}</button>
}

function Overview() {
  return (
    <div>
      <div className="section-title">Customer Information</div>
      <div className="info-grid">
        <div>Customer Name</div><div>Esra al Khandari</div>
        <div>Customer Number</div><div>+965 97194665</div>
        <div>Email</div><div>MJaffer1@gmail.com</div>
        <div>Delivery Address</div><div>Park View City, Kuwait</div>
      </div>

      <div className="section-title" style={{ marginTop: 12 }}>Design Summary</div>
      <div className="info-grid">
        <div>Design ID</div><div>ORD-2025-0921</div>
        <div>Project Name</div><div>Villa Kitchen Upgrade</div>
        <div>Designer</div><div>Abdol Feghali</div>
        <div>Revisions</div><div>4 Rounds</div>
      </div>

      <div className="section-title" style={{ marginTop: 12 }}>Assignees</div>
      <div className="info-grid">
        <div>Assignee 1</div><div>Abdol Feghali</div>
        <div>Assignee 2</div><div>Lisa Wong</div>
        <div>Assignee 3</div><div>Mohammed Ali</div>
      </div>
    </div>
  )
}

function DesignTab() {
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
      <div className="section-title">Design Preview</div>
      <div className="thumb" style={{ height: 180, borderRadius: 12 }} />

      <div className="section-title" style={{ marginTop: 12 }}>Comments</div>
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
          <input className="input" placeholder="Add Comment" value={newText} onChange={e => setNewText(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') add() }} />
        </div>
      </div>
    </div>
  )
}

function DesignSlideOver({ open, onClose }) {
  const [tab, setTab] = useState('Overview')
  return (
    <Modal open={open} onClose={onClose} width={520}>
      <div className="slide-over">
        <div className="slide-head">
          <div className="slide-title">DSG-2025-011</div>
          <div className="slide-sub">Below are all the details about this design.</div>
          <div className="tabs">
            <Tab label="Overview" active={tab === 'Overview'} onClick={() => setTab('Overview')} />
            <Tab label="Design" active={tab === 'Design'} onClick={() => setTab('Design')} />
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
              <HiOutlineXMark /> CTA
            </button>
            <button
              className="flex-1 flex justify-center items-center bg-[#054E45] py-2 text-white gap-2"
              onClick={onClose}
            >
              CTA <LuMoveUpRight />
            </button>
          </div>
          {/* Footer */}
        </div>
      </div>
    </Modal>
  )
}

export default DesignSlideOver


