import React, { useState } from 'react';

const ReferralProgram: React.FC = () => {
  const [referralLink] = useState('https://hexagon.world/ref?refId=CZrs4ICvkm0207');
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareOnSocial = (platform: string) => {
    const text = "Join me on Hexagon for amazing investment returns!";
    const url = referralLink;

    let shareUrl = '';
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
        break;
      case 'telegram':
        shareUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
        break;
    }

    window.open(shareUrl, '_blank');
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
          <h2 className="referral-title">Referral Program</h2>
          <p className="referral-subtitle">Earn commissions from up to levels of referrals</p>
        </div>

        <div className="referral-content">
          <div className="referral-section">
            {/* Earnings Stats */}
            <div className="referral-stats-grid">
              <div className="stat-card">
                <div className="stat-icon">💰</div>
                <div className="stat-info">
                  <h3 className="stat-amount">0.00 USDT</h3>
                  <p className="stat-label">EARNINGS EARNED</p>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon">👥</div>
                <div className="stat-info">
                  <h3 className="stat-amount">0</h3>
                  <p className="stat-label">CURRENT LEVEL</p>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon">🎯</div>
                <div className="stat-info">
                  <h3 className="stat-amount">0</h3>
                  <p className="stat-label">TOTAL REFERRALS</p>
                </div>
              </div>
            </div>
          </div>

          <div className="referral-section">
            {/* Withdraw Button */}
            <div className="referral-actions">
              <button className="withdraw-btn">
                💸 Withdraw Referral
              </button>
            </div>
          </div>

          <div className="referral-section">
            {/* Referral Link */}
            <div className="referral-link-section">
              <h3 className="referral-link-title">Your Referral Link</h3>
              <p className="referral-link-subtitle">Share this link to grow your network</p>

              <div className="referral-link-container">
                <input
                  type="text"
                  value={referralLink}
                  readOnly
                  className="referral-link-input"
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
              <h3 className="commission-title">Commission Structure</h3>
              <div className="commission-grid">
                {commissionLevels.map((level, index) => (
                  <div key={index} className="commission-card">
                    <div className="commission-level">{level.level}</div>
                    <div className="commission-percentage">{level.percentage}</div>
                    <div className="commission-label">{level.count}</div>
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