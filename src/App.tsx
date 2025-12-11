import { useEffect } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Dashboard from './components/Dashboard'
import InvestmentPlans from './components/InvestmentPlans'
import ReferralProgram from './components/ReferralProgram'
import LeadershipProgram from './components/LeadershipProgram'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import { Web3ModalProvider } from './providers/web3Provider'

function App() {
  useEffect(() => {
    // Set document title
    document.title = import.meta.env.VITE_APP_TITLE || "";

    // Set favicon
    const favicon = document.querySelector(
      "link[rel*='icon']",
    ) as HTMLLinkElement;
    if (favicon) {
      favicon.href = import.meta.env.VITE_APP_FAVICON || "";
    }
  }, []);
  return (
     <Web3ModalProvider>
    <div className="app">
      <Navigation />
      
      <main className="main-content">
        <section id="home">
          <Hero />
        </section>
        
        <section id="dashboard">
          <Dashboard />
        </section>
        
        <section id="invest">
          <InvestmentPlans />
        </section>
        
        <section id="referrals">
          <ReferralProgram />
        </section>
        
        <section id="leadership">
          <LeadershipProgram />
        </section>
        
        <section id="faq">
          <FAQ />
        </section>
      </main>
      
      <Footer />
    </div>
    </Web3ModalProvider>
  )
}

export default App
