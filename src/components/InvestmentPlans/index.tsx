import React from 'react';

interface InvestmentPlan {
  name: string;
  rate: string;
  minAmount: string;
  features: string[];
  isPopular?: boolean;
  color: string;
}

const InvestmentPlans: React.FC = () => {
  const buttonBgColor = import.meta.env.VITE_APP_BUTTON_BG_COLOR || "";
  const buttonTextColor = import.meta.env.VITE_APP_BUTTON_TEXT_COLOR || "";
  const textColor = import.meta.env.VITE_APP_TEXT_COLOR || "";
  const mutedTextColor = import.meta.env.VITE_APP_MUTED_TEXT_COLOR || "";
  const cardBgColor = import.meta.env.VITE_APP_CARD_BG_COLOR || "";
  const cardSecondBgColor = import.meta.env.VITE_APP_CARD_BG_SECOND_COLOR || "";
  const plans: InvestmentPlan[] = [
    {
      name: "Starter Plan",
      rate: "1.5% Daily",
      minAmount: "Min 50 USDT",
      color: "gold",
      features: [
        "30 Days Duration",
        "Smart Contract Secured", 
        "24/7 Support",
        "Instant Withdrawals"
      ]
    },
    {
      name: "Pro Plan", 
      rate: "2.2% Daily",
      minAmount: "Min 500 USDT",
      color: "platinum",
      isPopular: true,
      features: [
        "60 Days Duration",
        "Priority Processing", 
        "Advanced Analytics",
        "VIP Support"
      ]
    },
    {
      name: "Elite Plan",
      rate: "3.0% Daily", 
      minAmount: "Min 2000 USDT",
      color: "diamond",
      features: [
        "90 Days Duration",
        "Maximum Returns",
        "Personal Manager", 
        "Early Access Features"
      ]
    }
  ];

  return (
    <section className="investment-plans-section">
      <div className="plans-container">
        <div className="plans-header">
          <h2 className="plans-title" style={{color: textColor}}>DeFi Investment Plans</h2>
          <p className="plans-subtitle" style={{color: mutedTextColor}}>Maximize your returns with our optimized ROI system and smart contract security</p>
        </div>
        
        <div className="plans-grid side-by-side">
          {plans.map((plan, index) => (
            <div key={index} className={`plan-card`} style={{backgroundColor: cardBgColor}}>
              {plan.isPopular && (
                <div className="popular-badge" style={{color: textColor}}>POPULAR</div>
              )}
              
              <div className="plan-header">
                <h3 className="plan-name" style={{color: textColor}}>{plan.name}</h3>
                <div className="plan-rate" style={{color: textColor}}>{plan.rate}</div>
                <div className="plan-min" style={{color: mutedTextColor}}>{plan.minAmount}</div>
              </div>
              
              <div className="plan-features">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="plan-feature" style={{color: textColor}}>
                    <span className="feature-icon">✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="plan-footer">
                <div className="plan-returns" style={{color: mutedTextColor}}>100% Capital Returns</div>
                <button className="select-plan-btn" style={{backgroundColor: buttonBgColor, color: buttonTextColor}}>
                  Select Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentPlans;