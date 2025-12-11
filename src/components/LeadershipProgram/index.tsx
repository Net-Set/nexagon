import React from 'react';

interface LeadershipLevel {
  name: string;
  percentage: string;
  description: string;
}

const LeadershipProgram: React.FC = () => {
  const buttonBgColor = import.meta.env.VITE_APP_BUTTON_BG_COLOR || "";
  const buttonTextColor = import.meta.env.VITE_APP_BUTTON_TEXT_COLOR || "";
  const cardBgColor = import.meta.env.VITE_APP_CARD_BG_COLOR || "";
  const textColor = import.meta.env.VITE_APP_TEXT_COLOR || "";
  const mutedTextColor = import.meta.env.VITE_APP_MUTED_TEXT_COLOR || "";
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
          <h2 className="leadership-title" style={{color: textColor}}>Leadership Program</h2>
          <p className="leadership-subtitle" style={{color: mutedTextColor}}>Unlock leadership bonuses by building winning teams</p>
        </div>
        
        <div className="leadership-content">
          {/* Current Status */}
          <div className="leadership-stats-section">
            <div className="leadership-stats">
              <div className="leadership-stat-card" style={{backgroundColor: cardBgColor}}>
                <div className="stat-icon">💰</div>
                <div className="stat-info">
                  <h3 className="stat-amount" style={{color: textColor}}>0.00 USDT</h3>
                  <p className="stat-label" style={{color: mutedTextColor}}>LEADERSHIP EARNINGS</p>
                </div>
              </div>
              
              <div className="leadership-stat-card" style={{backgroundColor: cardBgColor}}>
                <div className="stat-icon">👥</div>
                <div className="stat-info">
                  <h3 className="stat-amount" style={{color: textColor}}>0</h3>
                  <p className="stat-label" style={{color: mutedTextColor}}>CURRENT LEVEL</p>
                </div>
              </div>
              
              <div className="leadership-stat-card" style={{backgroundColor: cardBgColor}}>
                <div className="stat-icon">🏆</div>
                <div className="stat-info">
                  <h3 className="stat-amount" style={{color: textColor}}>0</h3>
                  <p className="stat-label" style={{color: mutedTextColor}}>TEAM MEMBERS</p>
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
              <h3 className="levels-title" style={{color: textColor}}>Leadership Levels</h3>
              <div className="levels-grid">
                {leadershipLevels.map((level, index) => (
                  <div key={index} className="leadership-level-card" style={{backgroundColor: cardBgColor}}>
                    <div className="level-header">
                      <h4 className="level-name" style={{color: textColor}}>{level.name}</h4>
                      <div className="level-percentage" style={{color: textColor}}>{level.percentage}</div>
                    </div>
                    <div className="level-description" style={{color: mutedTextColor}}>{level.description}</div>
                    <div className="level-status" style={{color: mutedTextColor}}>
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