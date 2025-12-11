import React from 'react';


const Dashboard: React.FC = () => {
  return (
    <section className="dashboard-section">
      <div className="dashboard-container">
        <div className="dashboard-header">
          <h2 className="dashboard-title">Investment Dashboard</h2>
          <p className="dashboard-subtitle">Track your ROI performance and optimize your DeFi strategy</p>
        </div>
        <div className="dashboard-cards-container">
          {/* Card 1 */}
          <div className="dashboard-card card-1">
  
            <div className="balance-cards">
              <div className="balance-card balance-main">
                <div className="balance-icon">💰</div>
                <div className="balance-info">
                  <h3 className="balance-amount">0.00 USDT</h3>
                  <p className="balance-label">TOTAL BALANCE</p>
                </div>
              </div>

              <div className="balance-card balance-earnings">
                <div className="balance-icon">📊</div>
                <div className="balance-info">
                  <h3 className="balance-amount">0.00 USDT</h3>
                  <p className="balance-label">TRADING EARNINGS</p>
                </div>
              </div>
            </div>

            <div className="dashboard-actions">
              <button className="action-btn primary-btn">
                <span className="btn-icon">📈</span>
                Start Investing
              </button>
              <button className="action-btn secondary-btn">
                <span className="btn-icon">💸</span>
                Withdraw 50%
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="dashboard-card card-2">
            <div className="investment-status">
              <div className="status-card">
                <div className="status-icon">⚡</div>
                <div className="status-info">
                  <h4>No Active Investments</h4>
                  <p>Start your first investment to begin earning daily returns</p>
                  <button className="start-investing-btn">
                    <span className="btn-icon">🚀</span>
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