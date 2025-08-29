import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Sidebar.css'
const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    dashboard: false,
    projects: false,
    tickets: false,
    clients: false,
    employees: false,
    accounts: false,
    payroll: false,
    app: false,
    otherPages: false
  });

  // Debug: Log current state
  console.log('Current dropdown states:', dropdowns);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = (dropdownName) => {
    console.log('CLICK DETECTED on:', dropdownName);
    console.log('Before toggle - Current state:', dropdowns[dropdownName]);
    
    setDropdowns(prev => {
      const newState = {
        ...prev,
        [dropdownName]: !prev[dropdownName]
      };
      console.log('After toggle - New state:', newState[dropdownName]);
      return newState;
    });
  };

  return (
<>
<div className="header-container">
  <div className="header-left">
    <button className="mobile-toggle" onClick={toggleSidebar}>
      <i className="ri-menu-line"></i>
    </button>
    <img src="https://arawebtechnologies.com/assets/images/araweb-logo.png" alt="Logo" className="header-logo" />
  </div>

  <div className="header-right">
    <span className="icon"><i className="ri-search-line"></i></span>
    <span className="icon"><i className="ri-notification-3-fill"></i></span>
    <button className="btn-project">+ New Project</button>
    <img src="https://arawebtechnologies.com/assets/images/u1.png" alt="User" className="avatar" />
  </div>
</div>
<div className={`sidebar ${isSidebarOpen ? 'sidebar-open' : ''}`}>
  <ul className='home-links'>
    {/* Dashboard Dropdown */}
    <li className="dropdown-item">
      <div 
        className="dropdown-header" 
        onClick={() => toggleDropdown('dashboard')}
        style={{ cursor: 'pointer', userSelect: 'none' }}
      >
        <div style={{display: 'flex', alignItems: 'center'}}>
          <i className="ri-dashboard-fill"></i>
          <span>Dashboard</span>
        </div>
        <i className={`ri-arrow-${dropdowns.dashboard ? 'up' : 'down'}-s-line dropdown-arrow`}></i>
      </div>
      <ul className="dropdown-menu" style={{ display: dropdowns.dashboard ? 'block' : 'none' }}>
        <li><Link to="/admin-dashboard" className={location.pathname === "/admin-dashboard" ? "active" : ""}>Admin Dashboard</Link></li>
        <li><Link to="/hr-dashboard" className={location.pathname === "/hr-dashboard" ? "active" : ""}>HR Dashboard</Link></li>
        <li><Link to="/project-dashboard" className={location.pathname === "/project-dashboard" ? "active" : ""}>Project Dashboard</Link></li>
      </ul>
    </li>

    {/* Projects Dropdown */}
    <li className="dropdown-item">
      <div className="dropdown-header" onClick={() => toggleDropdown('projects')}>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <i className="ri-article-fill"></i>
          <span>Projects</span>
        </div>
        <i className={`ri-arrow-${dropdowns.projects ? 'up' : 'down'}-s-line dropdown-arrow`}></i>
      </div>
      <ul className="dropdown-menu" style={{ display: dropdowns.projects ? 'block' : 'none' }}>
        <li><Link to="/projects" className={location.pathname === "/projects" ? "active" : ""}>Projects</Link></li>
        <li><Link to="/tasks" className={location.pathname === "/tasks" ? "active" : ""}>Tasks</Link></li>
        <li><Link to="/timesheet" className={location.pathname === "/timesheet" ? "active" : ""}>Timesheet</Link></li>
        <li><Link to="/leaders" className={location.pathname === "/leaders" ? "active" : ""}>Leaders</Link></li>
      </ul>
    </li>

    {/* Tickets Dropdown */}
    <li className="dropdown-item">
      <div className="dropdown-header" onClick={() => toggleDropdown('tickets')}>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <i className="ri-ticket-2-fill"></i>
          <span>Tickets</span>
        </div>
        <i className={`ri-arrow-${dropdowns.tickets ? 'up' : 'down'}-s-line dropdown-arrow`}></i>
      </div>
      <ul className="dropdown-menu" style={{ display: dropdowns.tickets ? 'block' : 'none' }}>
        <li><Link to="/tickets-view" className={location.pathname === "/tickets-view" ? "active" : ""}>Tickets View</Link></li>
        <li><Link to="/ticket-detail" className={location.pathname === "/ticket-detail" ? "active" : ""}>Ticket Detail</Link></li>
      </ul>
    </li>

    {/* Our Clients Dropdown */}
    <li className="dropdown-item">
      <div className="dropdown-header" onClick={() => toggleDropdown('clients')}>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <i className="ri-user-3-fill"></i>
          <span>Our Clients</span>
        </div>
        <i className={`ri-arrow-${dropdowns.clients ? 'up' : 'down'}-s-line dropdown-arrow`}></i>
      </div>
      <ul className="dropdown-menu" style={{ display: dropdowns.clients ? 'block' : 'none' }}>
        <li><Link to="/clients" className={location.pathname === "/clients" ? "active" : ""}>Clients</Link></li>
        <li><Link to="/client-profile" className={location.pathname === "/client-profile" ? "active" : ""}>Client Profile</Link></li>
      </ul>
    </li>

    {/* Employees Dropdown */}
    <li className="dropdown-item">
      <div className="dropdown-header" onClick={() => toggleDropdown('employees')}>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <i className="ri-team-fill"></i>
          <span>Employees</span>
        </div>
        <i className={`ri-arrow-${dropdowns.employees ? 'up' : 'down'}-s-line dropdown-arrow`}></i>
      </div>
      <ul className="dropdown-menu" style={{ display: dropdowns.employees ? 'block' : 'none' }}>
        <li><Link to="/members" className={location.pathname === "/members" ? "active" : ""}>Members</Link></li>
        <li><Link to="/members-profile" className={location.pathname === "/members-profile" ? "active" : ""}>Members Profile</Link></li>
        <li><Link to="/holidays" className={location.pathname === "/holidays" ? "active" : ""}>Holidays</Link></li>
        <li><Link to="/attendance-employees" className={location.pathname === "/attendance-employees" ? "active" : ""}>Attendance Employees</Link></li>
        <li><Link to="/attendance" className={location.pathname === "/attendance" ? "active" : ""}>Attendance</Link></li>
        <li><Link to="/leave-request" className={location.pathname === "/leave-request" ? "active" : ""}>Leave Request</Link></li>
        <li><Link to="/department" className={location.pathname === "/department" ? "active" : ""}>Department</Link></li>
        <li><Link to="/loan" className={location.pathname === "/loan" ? "active" : ""}>Loan</Link></li>
      </ul>
    </li>

    {/* Accounts Dropdown */}
    <li className="dropdown-item">
      <div className="dropdown-header" onClick={() => toggleDropdown('accounts')}>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <i className="ri-money-dollar-circle-fill"></i>
          <span>Accounts</span>
        </div>
        <i className={`ri-arrow-${dropdowns.accounts ? 'up' : 'down'}-s-line dropdown-arrow`}></i>
      </div>
      <ul className="dropdown-menu" style={{ display: dropdowns.accounts ? 'block' : 'none' }}>
        <li><Link to="/invoice" className={location.pathname === "/invoice" ? "active" : ""}>Invoice</Link></li>
        <li><Link to="/payments" className={location.pathname === "/payments" ? "active" : ""}>Payments</Link></li>
      </ul>
    </li>

    {/* Payroll Dropdown */}
    <li className="dropdown-item">
      <div className="dropdown-header" onClick={() => toggleDropdown('payroll')}>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <i className="ri-wallet-3-fill"></i>
          <span>Payroll</span>
        </div>
        <i className={`ri-arrow-${dropdowns.payroll ? 'up' : 'down'}-s-line dropdown-arrow`}></i>
      </div>
      <ul className="dropdown-menu" style={{ display: dropdowns.payroll ? 'block' : 'none' }}>
        <li><Link to="/employee-salary" className={location.pathname === "/employee-salary" ? "active" : ""}>Employee Salary</Link></li>
      </ul>
    </li>

    {/* App Dropdown */}
    <li className="dropdown-item">
      <div className="dropdown-header" onClick={() => toggleDropdown('app')}>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <i className="ri-apps-2-fill"></i>
          <span>App</span>
        </div>
        <i className={`ri-arrow-${dropdowns.app ? 'up' : 'down'}-s-line dropdown-arrow`}></i>
      </div>
      <ul className="dropdown-menu" style={{ display: dropdowns.app ? 'block' : 'none' }}>
        <li><Link to="/calendar" className={location.pathname === "/calendar" ? "active" : ""}>Calendar</Link></li>
        <li><Link to="/chat-app" className={location.pathname === "/chat-app" ? "active" : ""}>Chat App</Link></li>
      </ul>
    </li>

    {/* Other Pages Dropdown */}
    <li className="dropdown-item">
      <div className="dropdown-header" onClick={() => toggleDropdown('otherPages')}>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <i className="ri-pages-fill"></i>
          <span>Other Pages</span>
        </div>
        <i className={`ri-arrow-${dropdowns.otherPages ? 'up' : 'down'}-s-line dropdown-arrow`}></i>
      </div>
      <ul className="dropdown-menu" style={{ display: dropdowns.otherPages ? 'block' : 'none' }}>
        <li><Link to="/contacts" className={location.pathname === "/contacts" ? "active" : ""}>Contacts</Link></li>
        <li><Link to="/notifications" className={location.pathname === "/notifications" ? "active" : ""}>Notifications</Link></li>
        <li><Link to="/messages" className={location.pathname === "/messages" ? "active" : ""}>Messages</Link></li>
        <li><Link to="/settings" className={location.pathname === "/settings" ? "active" : ""}>Settings</Link></li>
        <li><Link to="/profile" className={location.pathname === "/profile" ? "active" : ""}>Profile</Link></li>
        <li><Link to="/help" className={location.pathname === "/help" ? "active" : ""}>Help & Support</Link></li>
      </ul>
    </li>
  </ul>
  <div className="sidebar-section">
    <h6 className="sidebar-heading">LATEST PROJECTS</h6>
    <ul className="project-list">
      <li>
        <Link to="/projects/figma-design">
          <div className="project-item">
            <div className="project-left">
              <span className="project-dot orange"></span>
              <span className="project-name" style={{whiteSpace:"nowrap"}}>Deorags</span>
            </div>
            <span className="project-status planning">Progress</span>
          </div>
        </Link>
      </li>
      <li>
        <Link to="/projects/keep-react">
          <div className="project-item">
            <div className="project-left">
              <span className="project-dot blue"></span>
              <span className="project-name" style={{whiteSpace:"nowrap"}} >Deorags</span>
            </div>
            <span className="project-status planning">Planning</span>
          </div>
        </Link>
      </li>
      <li>
        <Link to="/projects/staticmania">
          <div className="project-item">
            <div className="project-left">
              <span className="project-dot green"></span>
              <span className="project-name">Deorags</span>
            </div>
            <span className="project-status completed">Completed</span>
          </div>
        </Link>
      </li>
    </ul>
    <Link to="/projects" className="see-all-link">See all project</Link>
  </div>
  
  <div className="sidebar-section">
    <h6 className="sidebar-heading">LATEST MESSAGE</h6>
    <ul className="message-list">
      <li>
        <Link to="/messages/alex-morgan">
          <div className="message-info">
            <div className="message-header">
              <b>Om Goyal</b>
              <span className="message-time recent">2m</span>
            </div>
            <div className="message-preview">Hey, can we review...</div>
          </div>
        </Link>
      </li>
      <li>
        <Link to="/messages/jessica-chen">
          <div className="message-info">
            <div className="message-header">
              <b>Md.Rabil</b>
              <span className="message-time">1h</span>
            </div>
            <div className="message-preview">The project the case of...</div>
          </div>
        </Link>
      </li>
      <li>
        <Link to="/messages/ryan-park">
          <div className="message-info">
            <div className="message-header">
              <b>Khusnuma</b>
              <span className="message-time">3h</span>
            </div>
            <div className="message-preview">I have a question...</div>
          </div>
        </Link>
      </li>
      <li>
        <Link to="/messages/ryan-park">
          <div className="message-info">
            <div className="message-header">
              <b>Asha Pal</b>
              <span className="message-time">3h</span>
            </div>
            <div className="message-preview">I have a question...</div>
          </div>
        </Link>
      </li>
    </ul>
    <Link to="/messages" className="see-all-link">See all message</Link>
  </div>
</div>
    




    
</>
  )
}

export default Sidebar