import React from 'react'
import './card.css'

const Card = () => {
  return (
    <div className="cards-container">
      <div className="stat-card">
        <div className="card-icon total">
          <i className="ri-file-list-3-line"></i>
        </div>
        <div className="card-content">
          <div className="card-label">Total Projects</div>
          <div className="card-number">12</div>
          <div className="card-subtitle">from last month</div>
        </div>
        <div className="card-trend positive">
          <i className="ri-arrow-up-line"></i>
          <span>+2</span>
        </div>
      </div>

      <div className="stat-card">
        <div className="card-icon progress">
          <i className="ri-time-line"></i>
        </div>
        <div className="card-content">
          <div className="card-label">In Progress</div>
          <div className="card-number">7</div>
          <div className="card-subtitle">from last month</div>
        </div>
        <div className="card-trend positive">
          <i className="ri-arrow-up-line"></i>
          <span>+3</span>
        </div>
      </div>

      <div className="stat-card">
        <div className="card-icon completed">
          <i className="ri-checkbox-circle-line"></i>
        </div>
        <div className="card-content">
          <div className="card-label">Completed</div>
          <div className="card-number">4</div>
          <div className="card-subtitle">from last month</div>
        </div>
        <div className="card-trend positive">
          <i className="ri-arrow-up-line"></i>
          <span>+1</span>
        </div>
      </div>

      <div className="stat-card">
        <div className="card-icon overdue">
          <i className="ri-error-warning-line"></i>
        </div>
        <div className="card-content">
          <div className="card-label">Overdue</div>
          <div className="card-number">1</div>
          <div className="card-subtitle">from last month</div>
        </div>
        <div className="card-trend negative">
          <i className="ri-arrow-down-line"></i>
          <span>-2</span>
        </div>
      </div>
    </div>
  )
}

export default Card