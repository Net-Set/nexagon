import React from 'react';

interface LeadershipLevel {
  name: string;
  percentage: string;
  description: string;
}

const LeadershipProgram: React.FC = () => {
  const leadershipLevels: LeadershipLevel[] = [
    {
      name: 'Leader',
      percentage: '5%',
      description: 'REFERRAL'
    },
    {
      name: 'Senior',
      percentage: '7%',
      description: 'REFERRAL'
    },
    {
      name: 'Executive',
      percentage: '10%',
      description: 'REFERRAL'
    }
  ];

  return (
    <section className="leadership-section">
      <div className="leadership-container">
        <div className="leadership-header">
          <h2 className="leadership-title">Leadership Program</h2>
          <p className="leadership-subtitle">Unlock leadership bonuses by building winning teams</p>
        </div>
        
        <div className="leadership-content">
          <div className="leadership-section">
            {/* Current Status */}
            <div className="leadership-stats">
            <div className="leadership-stat-card">
              <div className="stat-icon">💰</div>
              <div className="stat-info">
                <h3 className="stat-amount">0.00 USDT</h3>
                <p className="stat-label">LEADERSHIP EARNINGS</p>
              </div>
            </div>
            
            <div className="leadership-stat-card">
              <div className="stat-icon">👥</div>
              <div className="stat-info">
                <h3 className="stat-amount">0</h3>
                <p className="stat-label">CURRENT LEVEL</p>
              </div>
            </div>
            
            <div className="leadership-stat-card">
              <div className="stat-icon">🏆</div>
              <div className="stat-info">
                <h3 className="stat-amount">0</h3>
                <p className="stat-label">TEAM MEMBERS</p>
              </div>
            </div>
            </div>
          </div>
          
          <div className="leadership-section">
            {/* Withdraw Button */}
            <div className="leadership-actions">
            <button className="withdraw-leadership-btn">
              💸 Withdraw Leadership
            </button>
            </div>
          </div>
          
          <div className="leadership-section">
            {/* Leadership Levels */}
            <div className="leadership-levels">
            <h3 className="levels-title">Leadership Levels</h3>
            <div className="levels-grid">
              {leadershipLevels.map((level, index) => (
                <div key={index} className="leadership-level-card">
                  <div className="level-header">
                    <h4 className="level-name">{level.name}</h4>
                    <div className="level-percentage">{level.percentage}</div>
                  </div>
                  <div className="level-description">{level.description}</div>
                  <div className="level-status">
                    <span className="status-indicator">🔒</span>
                    <span>Locked</span>
                  </div>
                </div>
              ))}
            </div>
            </div>
          </div>
          
          <div className="leadership-section">
            {/* Requirements */}
            <div className="leadership-requirements">
            <h3 className="requirements-title">How to Advance</h3>
            <div className="requirements-list">
              <div className="requirement-item">
                <span className="requirement-icon">📈</span>
                <div className="requirement-text">
                  <strong>Build Your Team:</strong> Recruit active investors to grow your network
                </div>
              </div>
              <div className="requirement-item">
                <span className="requirement-icon">💼</span>
                <div className="requirement-text">
                  <strong>Generate Volume:</strong> Maintain consistent team investment activity
                </div>
              </div>
              <div className="requirement-item">
                <span className="requirement-icon">🎯</span>
                <div className="requirement-text">
                  <strong>Meet Targets:</strong> Achieve level-specific performance metrics
                </div>
              </div>
              <div className="requirement-item">
                <span className="requirement-icon">🏆</span>
                <div className="requirement-text">
                  <strong>Unlock Rewards:</strong> Access higher commission rates and bonuses
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipProgram;