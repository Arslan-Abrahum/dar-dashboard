import React from 'react'
import {LuBell} from '../assets/icons/icons'
import { useLanguage } from '../i18n/LanguageProvider'

function Header({ title = "dashboard", icon = null, showIcon = false }) {
  const { locale, toggleLocale, t } = useLanguage()

  const displayTitle = t(title) || title

  return (
    <div className="header">
      <div className="breadcrumb flex items-center gap-5">
        {showIcon ? icon : null} {displayTitle}
      </div>
      <div className="header-actions">
        <button className="icon-btn icon-bell-btn" aria-label="notifications"><LuBell /></button>
        <button className="icon-btn" onClick={toggleLocale} aria-label="toggle-language">{locale === 'en' ? 'AR' : 'EN'}</button>
      </div>
    </div>
  )
}

export default Header


