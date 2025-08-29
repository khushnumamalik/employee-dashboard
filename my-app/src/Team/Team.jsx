import React, { useState } from 'react'
import './Team.css'

const Team = () => {
  const [activeDropdown, setActiveDropdown] = useState(null)

  const toggleDropdown = (memberId) => {
    setActiveDropdown(activeDropdown === memberId ? null : memberId)
  }

  const handleAction = (action, memberId) => {
    console.log(`${action} action for member ${memberId}`)
    setActiveDropdown(null)
  }
  return (
    <div className="team-container">
      {/* Team Members Section */}
      <div className="team-members-section">
        <div className="section-header">
          <h3>Team Members</h3>
          <button className="view-all-btn">
            <i className="ri-group-line"></i>
            View All
          </button>
        </div>
        <p className="section-subtitle">Performance overview of team members</p>
        
        <div className="team-table">
          <div className="table-header">
            <span>Name</span>
            <span>Role</span>
            <span>Performance</span>
            <span>Actions</span>
          </div>
          
          <div className="team-member">
            <div className="member-info">
              <img src="https://arawebtechnologies.com/assets/images/u1.png" alt="Alex Morgan" className="member-avatar" />
              <div className="member-details">
                <span className="member-name">Alex Morgan</span>
                <span className="member-email">alex.morgan@example.com</span>
              </div>
            </div>
            <span className="member-role">UI/UX Designer</span>
            <span className="performance-badge positive">+12% this week</span>
            <div className="action-dropdown">
              <button className="action-btn" onClick={() => toggleDropdown('alex')}>
                <i className="ri-more-2-fill"></i>
              </button>
              {activeDropdown === 'alex' && (
                <div className="dropdown-menu">
                  <button onClick={() => handleAction('edit', 'alex')}>
                    <i className="ri-edit-line"></i>
                    Edit
                  </button>
                  <button onClick={() => handleAction('save', 'alex')}>
                    <i className="ri-save-line"></i>
                    Save
                  </button>
                  <button onClick={() => handleAction('delete', 'alex')}>
                    <i className="ri-delete-bin-line"></i>
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="team-member">
            <div className="member-info">
              <img src="https://arawebtechnologies.com/assets/images/u2.png" alt="Jessica Chen" className="member-avatar" />
              <div className="member-details">
                <span className="member-name">Jessica Chen</span>
                <span className="member-email">jessica.chen@example.com</span>
              </div>
            </div>
            <span className="member-role">Frontend Developer</span>
            <span className="performance-badge positive">+8% this week</span>
            <div className="action-dropdown">
              <button className="action-btn" onClick={() => toggleDropdown('jessica')}>
                <i className="ri-more-2-fill"></i>
              </button>
              {activeDropdown === 'jessica' && (
                <div className="dropdown-menu">
                  <button onClick={() => handleAction('edit', 'jessica')}>
                    <i className="ri-edit-line"></i>
                    Edit
                  </button>
                  <button onClick={() => handleAction('save', 'jessica')}>
                    <i className="ri-save-line"></i>
                    Save
                  </button>
                  <button onClick={() => handleAction('delete', 'jessica')}>
                    <i className="ri-delete-bin-line"></i>
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="team-member">
            <div className="member-info">
              <img src="https://arawebtechnologies.com/assets/images/u3.png" alt="Ryan Park" className="member-avatar" />
              <div className="member-details">
                <span className="member-name">Ryan Park</span>
                <span className="member-email">ryan.park@example.com</span>
              </div>
            </div>
            <span className="member-role">Product Manager</span>
            <span className="performance-badge positive">+15% this week</span>
            <div className="action-dropdown">
              <button className="action-btn" onClick={() => toggleDropdown('ryan')}>
                <i className="ri-more-2-fill"></i>
              </button>
              {activeDropdown === 'ryan' && (
                <div className="dropdown-menu">
                  <button onClick={() => handleAction('edit', 'ryan')}>
                    <i className="ri-edit-line"></i>
                    Edit
                  </button>
                  <button onClick={() => handleAction('save', 'ryan')}>
                    <i className="ri-save-line"></i>
                    Save
                  </button>
                  <button onClick={() => handleAction('delete', 'ryan')}>
                    <i className="ri-delete-bin-line"></i>
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="team-member">
            <div className="member-info">
              <img src="https://arawebtechnologies.com/assets/images/u4.png" alt="Sarah Johnson" className="member-avatar" />
              <div className="member-details">
                <span className="member-name">Sarah Johnson</span>
                <span className="member-email">sarah.johnson@example.com</span>
              </div>
            </div>
            <span className="member-role">Backend Developer</span>
            <span className="performance-badge negative">-3% this week</span>
            <div className="action-dropdown">
              <button className="action-btn" onClick={() => toggleDropdown('sarah')}>
                <i className="ri-more-2-fill"></i>
              </button>
              {activeDropdown === 'sarah' && (
                <div className="dropdown-menu">
                  <button onClick={() => handleAction('edit', 'sarah')}>
                    <i className="ri-edit-line"></i>
                    Edit
                  </button>
                  <button onClick={() => handleAction('save', 'sarah')}>
                    <i className="ri-save-line"></i>
                    Save
                  </button>
                  <button onClick={() => handleAction('delete', 'sarah')}>
                    <i className="ri-delete-bin-line"></i>
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Tomorrow Notes Section */}
      <div className="tomorrow-notes-section">
        <div className="section-header">
          <h3>Tomorrow Note</h3>
          <button className="private-btn">
            <i className="ri-lock-line"></i>
            Private
          </button>
        </div>
        <p className="section-subtitle">Your personal notes for tomorrow</p>
        
        <div className="notes-list">
          <div className="note-item">
            <span className="note-bullet">•</span>
            <span className="note-text">Team meeting at 10:00 AM with design department</span>
          </div>
          <div className="note-item">
            <span className="note-bullet">•</span>
            <span className="note-text">Review design system updates for Figma components</span>
          </div>
          <div className="note-item">
            <span className="note-bullet">•</span>
            <span className="note-text">Finalize project timeline for Keep React development</span>
          </div>
          <div className="note-item">
            <span className="note-bullet">•</span>
            <span className="note-text">Prepare presentation for client meeting at 2:00 PM</span>
          </div>
          <div className="note-item">
            <span className="note-bullet">•</span>
            <span className="note-text">Follow up with marketing team on campaign assets</span>
          </div>
        </div>

        <div className="notes-actions">
          <button className="add-note-btn">
            <i className="ri-add-line"></i>
            Add Note
          </button>
          <button className="edit-notes-btn">Edit Notes</button>
        </div>
      </div>
    </div>
  )
}

export default Team