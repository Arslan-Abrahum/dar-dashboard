import React, { useEffect, useState } from 'react'
import DashboardLayout from './layouts/DashboardLayout'
import AppRouter from './router/AppRouter'
import NewProjectModal from './features/projects/components/NewProjectModal'

function App() {
  const [newOpen, setNewOpen] = useState(false)

  useEffect(()=>{
    const open = () => setNewOpen(true)
    window.addEventListener('open-new-project', open)
    return () => window.removeEventListener('open-new-project', open)
  },[])

  return (
    <DashboardLayout>
      <AppRouter />
      <NewProjectModal open={newOpen} onClose={()=>setNewOpen(false)} />
    </DashboardLayout>
  )
}

export default App