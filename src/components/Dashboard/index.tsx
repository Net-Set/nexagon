import React from 'react';


const Dashboard: React.FC = () => {
  const buttonBgColor = import.meta.env.VITE_APP_BUTTON_BG_COLOR || "";
  const buttonTextColor = import.meta.env.VITE_APP_BUTTON_TEXT_COLOR || "";
  const textColor = import.meta.env.VITE_APP_TEXT_COLOR || "";
  const mutedTextColor = import.meta.env.VITE_APP_MUTED_TEXT_COLOR || "";
  const cardBgColor = import.meta.env.VITE_APP_CARD_BG_COLOR || "";
  const cardSecondBgColor = import.meta.env.VITE_APP_CARD_BG_SECOND_COLOR || "";
  return (
    <section className="dashboard-section">
      <div className="dashboard-container">
        <div className="dashboard-header">
          <h2 className="dashboard-title" style={{color: textColor}}>Investment Dashboard</h2>
          <p className="dashboard-subtitle" style={{color: mutedTextColor}}>Track your ROI performance and optimize your DeFi strategy</p>
        </div>
        <div className="dashboard-cards-container">
          {/* Card 1 */}
          <div className="dashboard-card card-1" style={{backgroundColor: cardBgColor}}>
  
            <div className="balance-cards" >
              <div className="balance-card" style={{backgroundColor: cardSecondBgColor}}>
                <div className="balance-icon">💰</div>
                <div className="balance-info">
                  <h3 className="balance-amount" style={{color: textColor}}>0.00 USDT</h3>
                  <p className="balance-label" style={{color: mutedTextColor}}>TOTAL BALANCE</p>
                </div>
              </div>

              <div className="balance-card" style={{backgroundColor: cardSecondBgColor}}>
                <div className="balance-icon">📊</div>
                <div className="balance-info">
                  <h3 className="balance-amount" style={{color: textColor}}>0.00 USDT</h3>
                  <p className="balance-label" style={{color: mutedTextColor}}>TRADING EARNINGS</p>
                </div>
              </div>
            </div>

            <div className="dashboard-actions">
              <button className="action-btn primary-btn" style={{backgroundColor: buttonBgColor, color: buttonTextColor}}>
                Deposit
              </button>
              <button className="action-btn secondary-btn" style={{backgroundColor: buttonBgColor, color: buttonTextColor}}>
                Withdraw
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="dashboard-card" style={{backgroundColor: cardBgColor}}>
            <div className="investment-status">
              <div className="status-card" style={{backgroundColor: cardSecondBgColor}}>
                <div className="status-icon">⚡</div>
                <div className="status-info">
                  <h4 style={{color: textColor}}>No Active Investments</h4>
                  <p style={{color: mutedTextColor}}>Start your first investment to begin earning daily returns</p>
                  <button className="start-investing-btn" style={{backgroundColor: buttonBgColor, color: buttonTextColor}}>
                    Start Investing
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;