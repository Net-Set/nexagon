import React from 'react';

const Hero: React.FC = () => {
  const heroTitle = import.meta.env.VITE_APP_HERO_TITLE || "";
  const heroSubtitle = import.meta.env.VITE_APP_HERO_DESCRIPTION || "";
  return (
    <section className="hero-section">
      <div className="hero-container">
        
        <div className="hero-main">
          <div className="hero-content">
            <h1 className="hero-title">
              {heroTitle}
            </h1>
            <p className="hero-subtitle">
              {heroSubtitle}
            </p>
            
            <div className="hero-actions">
              <button className="hero-btn primary">
                <span className="btn-icon">🚀</span>
                Start Investing
              </button>
              <button className="hero-btn secondary">
                <span className="btn-icon">📊</span>
                Presentation
              </button>
            </div>
          </div>
          
          <div className="contract-stats-card">
            <div className="stats-header">
              <h3>Contract Stats</h3>
              <div className="live-indicator">
                <span className="live-dot"></span>
                LIVE
              </div>
            </div>
            
            <div className="stats-list">
              <div className="stat-row">
                <span className="stat-label">TVL</span>
                <span className="stat-value">3,391.66 USDT</span>
              </div>
              <div className="stat-row">
                <span className="stat-label">Total Users</span>
                <span className="stat-value">100</span>
              </div>
              <div className="stat-row">
                <span className="stat-label">Total Deposit</span>
                <span className="stat-value">4,170.46 USDT</span>
              </div>
              <div className="stat-row">
                <span className="stat-label">Total Paid Out</span>
                <span className="stat-value">343.57 USDT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;