import React from 'react';

const Footer: React.FC = () => {
  const logo = import.meta.env.VITE_APP_LOGO || "";
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={logo} alt="Company Logo" height="50" loading="lazy" />
          </div>
          <div className="footer-description">
            <p>
              Earn stable daily returns through our optimized ROI system, backed by
              a 15-level referral program and secure smart contract technology
            </p>
          </div>

          {/* Copyright */}
          <div className="footer-copyright">
            <p>© Nexagon All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;