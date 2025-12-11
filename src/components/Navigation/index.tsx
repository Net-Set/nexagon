import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import ConnectButtons from '../walletConnect';

const Navigation: React.FC = () => {
  const navItems = ['Home', 'Dashboard', 'Invest', 'Referrals', 'Leadership', 'FAQ'];
  const logoUrl = import.meta.env.VITE_APP_LOGO || "";
  
  return (
    <Navbar expand="lg" className="navbar-dark bg-dark" fixed="top">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img 
            src={logoUrl} 
            alt="Company Logo" 
            height="40"
            className="d-inline-block align-top me-2"
            loading="lazy"
          />
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            {navItems.map((item) => (
              <Nav.Link 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-light mx-2"
              >
                {item}
              </Nav.Link>
            ))}
          </Nav>
          <div className="ms-auto">
            <ConnectButtons />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;