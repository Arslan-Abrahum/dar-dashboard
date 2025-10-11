import React, { useEffect } from 'react'
import { useLanguage } from '../../i18n/LanguageProvider'

function Modal({ open, onClose, children, width = 520, title, footer }) {
  const { t } = useLanguage()
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose?.()
    }
    if (open) document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" style={{width}} onClick={(e)=>e.stopPropagation()}>
        {title ? <div className="modal-header"><div className="modal-title">{t(title) || title}</div><button className="icon-btn" onClick={onClose}>✕</button></div> : null}
        <div className="modal-body">{children}</div>
        {footer ? <div className="modal-footer">{footer}</div> : null}
      </div>
    </div>
  )
}

export default Modal


