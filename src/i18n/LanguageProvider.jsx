import React, { createContext, useContext, useState, useEffect } from 'react'
import translations from './translations'

const LanguageContext = createContext()

export function LanguageProvider({ children }){
  const [locale, setLocale] = useState(() => {
    try { return localStorage.getItem('locale') || 'en' } catch(e){ return 'en' }
  })

  useEffect(() => {
    try { localStorage.setItem('locale', locale) } catch(e){}
  }, [locale])

  const toggleLocale = () => setLocale(l => l === 'en' ? 'ar' : 'en')

  const t = (key) => {
    return (translations[locale] && translations[locale][key]) || translations['en'][key] || key
  }

  return (
    <LanguageContext.Provider value={{ locale, toggleLocale, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(){
  return useContext(LanguageContext)
}
