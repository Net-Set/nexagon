import React from 'react';

interface LeadershipLevel {
  name: string;
  percentage: string;
  description: string;
}

const LeadershipProgram: React.FC = () => {
  const buttonBgColor = import.meta.env.VITE_APP_BUTTON_BG_COLOR || "";
  const buttonTextColor = import.meta.env.VITE_APP_BUTTON_TEXT_COLOR || "";
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
          {/* Current Status */}
          <div className="leadership-stats-section">
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
          
          {/* Withdraw Button */}
          <div className="leadership-actions-section">
            <div className="leadership-actions">
              <button className="withdraw-leadership-btn" style={{backgroundColor: buttonBgColor, color: buttonTextColor}}>
              Withdraw Leadership
              </button>
            </div>
          </div>
          
          {/* Leadership Levels */}
          <div className="leadership-levels-section">
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
          
        </div>
      </div>
    </section>
  );
};

export default LeadershipProgram;