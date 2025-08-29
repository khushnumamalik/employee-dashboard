import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; 
import Sidebar from './Sidebar/Sidebar';
import Dashboard from './pages/Dashboard';
import HRDashboard from './pages/HRDashboard';
import ProjectDashboard from './pages/ProjectDashboard';
import Projects from './pages/Projects';
import Tasks from './pages/Tasks';
import Timesheet from './pages/Timesheet';
import Leaders from './pages/Leaders';
import TicketsView from './pages/TicketsView';
import TicketDetail from './pages/TicketDetail';
import Clients from './pages/Clients';
import ClientProfile from './pages/ClientProfile';
import Members from './pages/Members';
import MemberProfile from './pages/MemberProfile';
import Holidays from './pages/Holidays';
import AttendanceEmployees from './pages/AttendanceEmployees';
import Attendance from './pages/Attendance';
import LeaveRequest from './pages/LeaveRequest';
import Department from './pages/Department';
import Loan from './pages/Loan';
import Invoice from './pages/Invoice';
import Payments from './pages/Payments';
import EmployeeSalary from './pages/EmployeeSalary';
import Calendar from './pages/Calendar';
import ChatApp from './pages/ChatApp';
import Contacts from './pages/Contacts';
import Notifications from './pages/Notifications';
import Messages from './pages/Messages';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import Help from './pages/Help';
// Dashboard Components
const AdminDashboard = () => <Dashboard />;
function App() {
  return (
    <>
      <Sidebar/>
      <Routes>
        {/* Dashboard Routes */}
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/hr-dashboard" element={<HRDashboard />} />
        <Route path="/project-dashboard" element={<ProjectDashboard />} />
        
        {/* Project Routes */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:projectId" element={<Projects />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/timesheet" element={<Timesheet />} />
        <Route path="/leaders" element={<Leaders />} />
        
        {/* Ticket Routes */}
        <Route path="/tickets-view" element={<TicketsView />} />
        <Route path="/ticket-detail" element={<TicketDetail />} />
        
        {/* Client Routes */}
        <Route path="/clients" element={<Clients />} />
        <Route path="/client-profile" element={<ClientProfile />} />
        
        {/* Employee Routes */}
        <Route path="/members" element={<Members />} />
        <Route path="/members-profile" element={<MemberProfile />} />
        <Route path="/holidays" element={<Holidays />} />
        <Route path="/attendance-employees" element={<AttendanceEmployees />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/leave-request" element={<LeaveRequest />} />
        <Route path="/department" element={<Department />} />
        <Route path="/loan" element={<Loan />} />
        
        {/* Account Routes */}
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/payments" element={<Payments />} />
        
        {/* Payroll Routes */}
        <Route path="/employee-salary" element={<EmployeeSalary />} />
        
        {/* App Routes */}
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/chat-app" element={<ChatApp />} />
        
        {/* Other Pages Routes */}
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/messages/:userId" element={<Messages />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/help" element={<Help />} />
      </Routes>

      
    </>
  )
}


export default App
