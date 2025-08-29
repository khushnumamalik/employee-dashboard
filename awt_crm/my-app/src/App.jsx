import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; 
import Sidebar from './Sidebar/Sidebar';
import Dashboard from './pages/Dashboard';
import HRDashboard from './pages/HRDashboard';
import ProjectDashboard from './pages/ProjectDashboard';

// Dashboard Components
const AdminDashboard = () => <Dashboard />;

// Project Components
const Projects = () => <div style={{marginLeft: '270px', padding: '20px'}}><h2>Projects</h2><p>Manage your projects here</p></div>;
const Tasks = () => <div style={{marginLeft: '270px', padding: '20px'}}><h2>Tasks</h2><p>View and manage your tasks</p></div>;
const Timesheet = () => <div style={{marginLeft: '270px', padding: '20px'}}><h2>Timesheet</h2><p>Track your time</p></div>;
const Leaders = () => <div style={{marginLeft: '270px', padding: '20px'}}><h2>Leaders</h2><p>Project leaders and managers</p></div>;

// Ticket Components
const TicketsView = () => <div style={{marginLeft: '270px', padding: '20px'}}><h2>Tickets View</h2><p>View all tickets</p></div>;
const TicketDetail = () => <div style={{marginLeft: '270px', padding: '20px'}}><h2>Ticket Detail</h2><p>Detailed ticket information</p></div>;

// Client Components
const Clients = () => <div style={{marginLeft: '270px', padding: '20px'}}><h2>Clients</h2><p>Manage your clients</p></div>;
const ClientProfile = () => <div style={{marginLeft: '270px', padding: '20px'}}><h2>Client Profile</h2><p>Client profile details</p></div>;

// Employee Components
const Members = () => <div style={{marginLeft: '270px', padding: '20px'}}><h2>Members</h2><p>Team members</p></div>;
const MemberProfile = () => <div style={{marginLeft: '270px', padding: '20px'}}><h2>Member Profile</h2><p>Member profile details</p></div>;
const Holidays = () => <div style={{marginLeft: '270px', padding: '20px'}}><h2>Holidays</h2><p>Holiday calendar</p></div>;
const AttendanceEmployees = () => <div style={{marginLeft: '270px', padding: '20px'}}><h2>Attendance Employees</h2><p>Employee attendance records</p></div>;
const Attendance = () => <div style={{marginLeft: '270px', padding: '20px'}}><h2>Attendance</h2><p>Attendance tracking</p></div>;
const LeaveRequest = () => <div style={{marginLeft: '270px', padding: '20px'}}><h2>Leave Request</h2><p>Leave requests management</p></div>;
const Department = () => <div style={{marginLeft: '270px', padding: '20px'}}><h2>Department</h2><p>Department management</p></div>;
const Loan = () => <div style={{marginLeft: '270px', padding: '20px'}}><h2>Loan</h2><p>Employee loans</p></div>;

// Account Components
const Invoice = () => <div style={{marginLeft: '270px', padding: '20px'}}><h2>Invoice</h2><p>Invoice management</p></div>;
const Payments = () => <div style={{marginLeft: '270px', padding: '20px'}}><h2>Payments</h2><p>Payment tracking</p></div>;

// Payroll Components
const EmployeeSalary = () => <div style={{marginLeft: '270px', padding: '20px'}}><h2>Employee Salary</h2><p>Salary management</p></div>;

// App Components
const Calendar = () => <div style={{marginLeft: '270px', padding: '20px'}}><h2>Calendar</h2><p>Schedule and events</p></div>;
const ChatApp = () => <div style={{marginLeft: '270px', padding: '20px'}}><h2>Chat App</h2><p>Team communication</p></div>;

// Other Pages
const Contacts = () => <div style={{marginLeft: '270px', padding: '20px'}}><h2>Contacts</h2><p>Manage your contacts</p></div>;
const Notifications = () => <div style={{marginLeft: '270px', padding: '20px'}}><h2>Notifications</h2><p>View your notifications</p></div>;
const Messages = () => <div style={{marginLeft: '270px', padding: '20px'}}><h2>Messages</h2><p>View all messages</p></div>;
const Settings = () => <div style={{marginLeft: '270px', padding: '20px'}}><h2>Settings</h2><p>Application settings and preferences</p></div>;
const Profile = () => <div style={{marginLeft: '270px', padding: '20px'}}><h2>Profile</h2><p>User profile management</p></div>;
const Help = () => <div style={{marginLeft: '270px', padding: '20px'}}><h2>Help & Support</h2><p>Get help and support</p></div>;

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
        <Route path="/member-profile" element={<MemberProfile />} />
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
