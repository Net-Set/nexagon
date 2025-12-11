import React, { useState } from 'react';

const ReferralProgram: React.FC = () => {
  const [referralLink] = useState('https://hexagon.world/ref?refId=CZrs4ICvkm0207');
  const [copied, setCopied] = useState(false);
  const buttonBgColor = import.meta.env.VITE_APP_BUTTON_BG_COLOR || "";
  const buttonTextColor = import.meta.env.VITE_APP_BUTTON_TEXT_COLOR || "";
  const textColor = import.meta.env.VITE_APP_TEXT_COLOR || "";
  const mutedTextColor = import.meta.env.VITE_APP_MUTED_TEXT_COLOR || "";
  const cardBgColor = import.meta.env.VITE_APP_CARD_BG_COLOR || "";
  const cardSecondBgColor = import.meta.env.VITE_APP_CARD_BG_SECOND_COLOR || "";
  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const commissionLevels = [
    { level: '1st', percentage: '10%', count: 'LEVEL 1 REFERRAL' },
    { level: '2nd', percentage: '5%', count: 'LEVEL 2 REFERRAL' },
    { level: '3rd', percentage: '3%', count: 'LEVEL 3 REFERRAL' },
    { level: '4th', percentage: '3%', count: 'LEVEL 4 REFERRAL' },
    { level: '5th', percentage: '3%', count: 'LEVEL 5 REFERRAL' },
    { level: '6th', percentage: '3%', count: 'LEVEL 6 REFERRAL' },
    { level: '7th', percentage: '2%', count: 'LEVEL 7 REFERRAL' },
    { level: '8th', percentage: '2%', count: 'LEVEL 8 REFERRAL' },
    { level: '9th', percentage: '1%', count: 'LEVEL 9 REFERRAL' },
    { level: '10th', percentage: '1%', count: 'LEVEL 10 REFERRAL' },
    { level: '11th', percentage: '1%', count: 'LEVEL 11 REFERRAL' },
    { level: '12th', percentage: '1%', count: 'LEVEL 12 REFERRAL' }
  ];

  return (
    <section className="referral-section">
      <div className="referral-container">
        <div className="referral-header">
          <h2 className="referral-title" style={{color: textColor}}>Referral Program</h2>
          <p className="referral-subtitle" style={{color: mutedTextColor}}>Earn commissions from up to levels of referrals</p>
        </div>

        <div className="referral-content">
          <div className="referral-section">
            {/* Earnings Stats */}
            <div className="referral-stats-grid">
              <div className="stat-card" style={{backgroundColor: cardBgColor}}>
                <div className="stat-icon">💰</div>
                <div className="stat-info">
                  <h3 className="stat-amount" style={{color: textColor}}>0.00 USDT</h3>
                  <p className="stat-label" style={{color: mutedTextColor}}>EARNINGS EARNED</p>
                </div>
              </div>

              <div className="stat-card" style={{backgroundColor: cardBgColor}}>
                <div className="stat-icon">👥</div>
                <div className="stat-info">
                  <h3 className="stat-amount" style={{color: textColor}}>0</h3>
                  <p className="stat-label" style={{color: mutedTextColor}}>CURRENT LEVEL</p>
                </div>
              </div>

              <div className="stat-card" style={{backgroundColor: cardBgColor}}>
                <div className="stat-icon">🎯</div>
                <div className="stat-info">
                  <h3 className="stat-amount" style={{color: textColor}}>0</h3>
                  <p className="stat-label" style={{color: mutedTextColor}}>TOTAL REFERRALS</p>
                </div>
              </div>
            </div>
          </div>

          <div className="referral-section">
            {/* Withdraw Button */}
            <div className="referral-actions">
              <button className="withdraw-btn" style={{backgroundColor: buttonBgColor, color: buttonTextColor}}>
                Withdraw Referral
              </button>
            </div>
          </div>

          <div className="referral-section">
            {/* Referral Link */}
            <div className="referral-link-section" style={{backgroundColor: cardBgColor}}>
              <h3 className="referral-link-title" style={{color: textColor}}>Your Referral Link</h3>
              <p className="referral-link-subtitle" style={{color: mutedTextColor}}>Share this link to grow your network</p>

              <div className="referral-link-container">
                <input
                  type="text"
                  value={referralLink}
                  readOnly
                  className="referral-link-input"
                  style={{color: textColor, backgroundColor: cardSecondBgColor}}
                />
                <button
                  onClick={copyToClipboard}
                  className={`copy-btn ${copied ? 'copied' : ''}`}
                >
                  {copied ? '✓' : '📋'}
                </button>
              </div>

             
            </div>
          </div>

          <div className="referral-section">
            {/* Commission Levels */}
            <div className="commission-levels">
              <h3 className="commission-title" style={{color: textColor}}>Commission Structure</h3>
              <div className="commission-grid">
                {commissionLevels.map((level, index) => (
                  <div key={index} className="commission-card" style={{backgroundColor: cardBgColor}}>
                    <div className="commission-level" style={{color: textColor}}>{level.level}</div>
                    <div className="commission-percentage" style={{color: textColor}}>{level.percentage}</div>
                    <div className="commission-label" style={{color: mutedTextColor}}>{level.count}</div>
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

export default ReferralProgram;