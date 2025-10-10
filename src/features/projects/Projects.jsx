import React, { useState } from 'react'
import ProjectSlideOver from './components/ProjectSlideOver'
import NewProjectModal from './components/NewProjectModal'
import {
  LuFolderCog, LuFolderCheck, LuCheckCheck,
  HiOutlineFolderArrowDown, HiMiniCube,
  FaArrowLeft, FaTruck,
  FiPenTool, FaRegFolderOpen, MdArrowOutward, CiFilter,
} from "../../assets/icons/icons";
import Header from '../../layouts/Header';

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

function Stage({ title, desc, icon, isActive }) {
  return (
    <div className={`w-full border-2 ${isActive ? 'border-[#064E45]' : 'border-[#F7F7F7]'}  rounded-lg`}>
      <div className="stage-title mb-2 text-center">{title}</div>
      <div className='flex gap-3 stage'>
        <div className="stage-icon kpi-icon">
          {icon}
        </div>
        <div className="stage-meta">
          <div className="stage-desc">{desc}</div>
        </div>
      </div>
    </div>
  )
}

function Projects() {
  const [open, setOpen] = useState(false)
  const [newOpen, setNewOpen] = useState(false)
  const [activeStatus, setActiveStatus] = useState(2)

  const stages = [
    {
      title: "Quotation",
      desc: "Quotation approved by customer",
      icon: <LuCheckCheck />,
      active: true,
    },
    {
      title: "Order",
      desc: "Order confirmed and created",
      icon: <LuCheckCheck />,
      active: true,
    },
    {
      title: "Design",
      desc: "Design pending customer review",
      icon: <FiPenTool />,
      active: true,
      current: true,
    },
    {
      title: "Production",
      desc: "Manufacturing in progress",
      icon: <HiMiniCube />,
      active: false,
    },
    {
      title: "Delivery",
      desc: "Scheduled for March 24, 2025",
      icon: <FaTruck />,
      active: false,
    },
  ];

  return (
    <div className="pages">
      <Header title="Projects" icon={<FaArrowLeft className='text-[#054E45] text-[15px]' />} showIcon={true} />
      <div className="projects-page">
        <div className='flex items-center justify-between mb-6'>
          <div>
            <h1 className="page-title">Good Morning, Sajibur</h1>
            <p className="page-sub">Manage and track all customer projects from quotation to delivery.</p>
          </div>
          <div className="header-actions">
            <div className="period-select bg-white px-3 py-2 border-2 border-[#E7E7E7]">This Month ▾</div>
            <button className="text-[#054E45] bg-white px-4 py-2 border-2 border-[#054E45] flex items-center gap-3" onClick={() => window.dispatchEvent(new CustomEvent('open-new-project'))}>New Project <MdArrowOutward /></button>
          </div>
        </div>
        <div className="kpi-grid">
          <KPI icon={<FaRegFolderOpen />} sub="Total Projects" value="132" title="Last month" />
          <KPI icon={<LuFolderCog />} sub="Active" value="12" title="Last month" />
          <KPI icon={<LuFolderCheck />} sub="Completed" value="114" title="Last month" />
          <KPI icon={<HiOutlineFolderArrowDown />} sub="Archived" value="16" title="Last month" />
        </div>
        <section className="card" style={{ marginTop: 12 }}>
          <div className="card-header">
            <div className="card-title">Project Status</div>
          </div>
          <div className="card-body">
            <div className="stage-row grid grid-cols-1  lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-5">
              {
                stages && stages.map(
                  (ele, index) => {
                    const isActive = index == activeStatus
                    return (
                      <Stage key={index} title={ele.title} desc={ele.desc} icon={ele.icon} isActive={isActive} />
                    )
                  }
                )
              }
            </div>
          </div>
        </section>

        <section className="card" style={{ marginTop: 12 }}>
          <div className="card-header">
            <div className="card-title">Projects</div>
            <div className="table-actions">
              <input className="table-search" placeholder="Search here" />
              <button className="btn flex items-center gap-3">Filter <CiFilter/></button>
            </div>
          </div>
          <div className="card-body">
            <div className="table">
              <div className="thead">
                <div>ID</div>
                <div>Project</div>
                <div>Customer</div>
                <div>Status</div>
                <div>Current Stage</div>
                <div>Actions</div>
              </div>
              {[1, 2, 3, 4, 5].map((i) => (
                <div className="trow" key={i}>
                  <div>PRJ-2025-021</div>
                  <div>Modern Kitchen Remodel</div>
                  <div>Ali Hassan</div>
                  <div><span className="status success">Completed</span></div>
                  <div>Design</div>
                  <div><button className="link flex items-center gap-1" onClick={() => setOpen(true)}>View Details <MdArrowOutward /></button></div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <ProjectSlideOver open={open} onClose={() => setOpen(false)} />
        <NewProjectModal open={newOpen} onClose={() => setNewOpen(false)} />
      </div>
    </div>
  )
}

export default Projects


