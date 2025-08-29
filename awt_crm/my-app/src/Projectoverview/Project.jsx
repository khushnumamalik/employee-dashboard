import React from 'react'
import './project.css'

const Project = () => {
  return (
    <div className="project-overview">
      <div className="project-header">
        <h3>Project Overview</h3>
        <div className="project-actions">
          <button className="filter-btn">
            <i className="ri-filter-line"></i>
            Filter
          </button>
          <button className="view-all-btn">View All</button>
        </div>
      </div>

      <div className="project-cards-container">
        <div className="project-card">
          <div className="project-card-header">
            <div className="project-info">
              <div className="project-title">
                <span className="project-name">Deorags</span>
                <i className="ri-star-fill star-icon"></i>
              </div>
              <p className="project-description">UI component library for design system</p>
            </div>
            <div className="project-status in-progress">In Progress</div>
          </div>

          <div className="project-details">
            <div className="project-deadline">
              <i className="ri-calendar-line"></i>
              <span>Deadline: Nov 15, 2023</span>
            </div>
            <button className="project-menu">
              <i className="ri-more-2-line"></i>
            </button>
          </div>

          <div className="project-progress">
            <div className="progress-info">
              <span>Progress</span>
              <span className="progress-percentage">65%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{width: '65%'}}></div>
            </div>
          </div>

          <div className="project-footer">
            <div className="project-avatars">
              <img src="https://arawebtechnologies.com/assets/images/u1.png" alt="User 1" className="avatar-sm" />
              <img src="https://arawebtechnologies.com/assets/images/u1.png" alt="User 2" className="avatar-sm" />
              <img src="https://arawebtechnologies.com/assets/images/u1.png" alt="User 3" className="avatar-sm" />
            </div>
            <div className="project-stats">
              <span><i className="ri-file-list-line"></i> 24 tasks</span>
              <span><i className="ri-bar-chart-line"></i> 128 activities</span>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-card-header">
            <div className="project-info">
              <div className="project-title">
                <span className="project-name">Force Strike</span>
                <i className="ri-star-fill star-icon"></i>
              </div>
              <p className="project-description">UI component library for design system</p>
            </div>
            <div className="project-status planning">Planning</div>
          </div>

          <div className="project-details">
            <div className="project-deadline">
              <i className="ri-calendar-line"></i>
              <span>Deadline: Nov 15, 2023</span>
            </div>
            <button className="project-menu">
              <i className="ri-more-2-line"></i>
            </button>
          </div>

          <div className="project-progress">
            <div className="progress-info">
              <span>Progress</span>
              <span className="progress-percentage">65%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill blue" style={{width: '65%'}}></div>
            </div>
          </div>

          <div className="project-footer">
            <div className="project-avatars">
              <img src="https://arawebtechnologies.com/assets/images/u1.png" alt="User 1" className="avatar-sm" />
              <img src="https://arawebtechnologies.com/assets/images/u1.png" alt="User 2" className="avatar-sm" />
              <img src="https://arawebtechnologies.com/assets/images/u1.png" alt="User 3" className="avatar-sm" />
            </div>
            <div className="project-stats">
              <span><i className="ri-file-list-line"></i> 24 tasks</span>
              <span><i className="ri-bar-chart-line"></i> 128 activities</span>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="project-card-header">
            <div className="project-info">
              <div className="project-title">
                <span className="project-name">Aarti Flames</span>
                <i className="ri-star-fill star-icon"></i>
              </div>
              <p className="project-description">Marketing website redesign project</p>
            </div>
            <div className="project-status completed">Completed</div>
          </div>

          <div className="project-details">
            <div className="project-deadline">
              <i className="ri-calendar-line"></i>
              <span>Deadline: Nov 15, 2023</span>
            </div>
            <button className="project-menu">
              <i className="ri-more-2-line"></i>
            </button>
          </div>

          <div className="project-progress">
            <div className="progress-info">
              <span>Progress</span>
              <span className="progress-percentage">65%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill green" style={{width: '65%'}}></div>
            </div>
          </div>

          <div className="project-footer">
            <div className="project-avatars">
              <img src="https://arawebtechnologies.com/assets/images/u1.png" alt="User 1" className="avatar-sm" />
              <img src="https://arawebtechnologies.com/assets/images/u1.png" alt="User 2" className="avatar-sm" />
              <img src="https://arawebtechnologies.com/assets/images/u1.png" alt="User 3" className="avatar-sm" />
            </div>
            <div className="project-stats">
              <span><i className="ri-file-list-line"></i> 24 tasks</span>
              <span><i className="ri-bar-chart-line"></i> 128 activities</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project