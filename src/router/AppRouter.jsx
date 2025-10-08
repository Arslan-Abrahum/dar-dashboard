import React, { useEffect, useState } from 'react'
import Dashboard from '../features/dashboard/Dashboard'
import Projects from '../features/projects/Projects'
import Designs from '../features/designs/Designs'
import Quotations from '../features/quotations/Quotations'
import Orders from '../features/orders/Orders'
import Customers from '../features/customers/Customers'
import Measurements from '../features/measurements/Measurements'
import TeamManagement from '../features/teamManagement/TeamManagement'
import Analytics from '../features/analytics/Analytics'

const routes = {
  '/dashboard': Dashboard,
  '/projects': Projects,
  '/designs': Designs,
  '/quotations': Quotations,
  '/orders': Orders,
  '/customers': Customers,
  '/measurements': Measurements,
  '/team': TeamManagement,
  '/analytics': Analytics,
}

function getRouteFromHash() {
  const hash = window.location.hash || '#/dashboard'
  const path = hash.replace('#', '')
  return routes[path] ? path : '/dashboard'
}

function AppRouter() {
  const [path, setPath] = useState(getRouteFromHash())

  useEffect(() => {
    const onChange = () => setPath(getRouteFromHash())
    window.addEventListener('hashchange', onChange)
    if (!window.location.hash) {
      window.location.hash = '#/dashboard'
    }
    return () => window.removeEventListener('hashchange', onChange)
  }, [])

  const Page = routes[path] || Dashboard
  return <Page />
}

export default AppRouter