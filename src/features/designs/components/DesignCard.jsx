import React from 'react'
import { useLanguage } from '../../../i18n/LanguageProvider'

function DesignCard({ icon, titleKey, value, subKey }){
  const { t } = useLanguage()
  return (
    <div className="kpi-box">
      <div className="kpi">
        <div className="kpi-icon">{icon}</div>
        <div className="kpi-body">
          <div className="kpi-value">{value}</div>
          <div className="kpi-title">{t(titleKey)}</div>
        </div>
      </div>
      <div className='kpi-foot'>
        <div className="kpi-sub">{t(subKey)}</div>
      </div>
    </div>
  )
}

export default DesignCard
