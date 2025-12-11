import React from 'react';

const Hero: React.FC = () => {
  const heroTitle = import.meta.env.VITE_APP_HERO_TITLE || "";
  const heroSubtitle = import.meta.env.VITE_APP_HERO_DESCRIPTION || "";
  const buttonBgColor = import.meta.env.VITE_APP_BUTTON_BG_COLOR || "";
  const buttonTextColor = import.meta.env.VITE_APP_BUTTON_TEXT_COLOR || "";
  const cardBgColor = import.meta.env.VITE_APP_CARD_BG_COLOR || "";
  const textColor = import.meta.env.VITE_APP_TEXT_COLOR || "";
  const mutedTextColor = import.meta.env.VITE_APP_MUTED_TEXT_COLOR || "";
  const highlightColor = import.meta.env.VITE_APP_HIGHLIGHT_COLOR || "";
  return (
    <section className="hero-section">
      <div className="hero-container">
        
        <div className="hero-main">
          <div className="hero-content">
            <h1 className="hero-title" style={{color: textColor}}>
              {heroTitle}
            </h1>
            <p className="hero-subtitle" style={{color: mutedTextColor}}>
              {heroSubtitle}
            </p>
            
            <div className="hero-actions">
              <button className="hero-btn" style={{backgroundColor: buttonBgColor, color: buttonTextColor}}>
                Start Investing
              </button>
              <button className="hero-btn" style={{backgroundColor: buttonBgColor, color: buttonTextColor}}>
                Presentation
              </button>
            </div>
          </div>
          
          <div className="contract-stats-card" style={{backgroundColor: cardBgColor}}>
            <div className="stats-header">
              <h3 style={{color: textColor}}>Contract Stats</h3>
              <div className="live-indicator">
                <span className="live-dot" style={{backgroundColor: highlightColor}}></span>
                LIVE
              </div>
            </div>
            
            <div className="stats-list">
              <div className="stat-row">
                <span className="stat-label" style={{color: mutedTextColor}}>TVL</span>
                <span className="stat-value" style={{color: textColor}}>3,391.66 USDT</span>
              </div>
              <div className="stat-row">
                <span className="stat-label" style={{color: mutedTextColor}}>Total Users</span>
                <span className="stat-value" style={{color: textColor}}>100</span>
              </div>
              <div className="stat-row">
                <span className="stat-label" style={{color: mutedTextColor}}>Total Deposit</span>
                <span className="stat-value" style={{color: textColor}}>4,170.46 USDT</span>
              </div>
              <div className="stat-row">
                <span className="stat-label" style={{color: mutedTextColor}}>Total Paid Out</span>
                <span className="stat-value" style={{color: textColor}}>343.57 USDT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;