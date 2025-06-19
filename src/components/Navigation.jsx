import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-container">
        <a href="/" className="nav-logo">
          <span className="logo-text">Azorean</span>
          <span className="logo-accent">Studios</span>
        </a>
        
        <div className={`nav-menu ${isOpen ? 'nav-menu-open' : ''}`}>
          <a href="/" className="nav-link">Home</a>
          <a href="/studios" className="nav-link">Studios</a>
          <a href="/segundo-sol" className="nav-link">Segundo Sol</a>
          <a href="/sound" className="nav-link">Sound</a>
          <a href="/contact" className="nav-link">Contact</a>
        </div>
        
        <button 
          className="nav-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span className={`hamburger ${isOpen ? 'hamburger-open' : ''}`}></span>
        </button>
      </div>
      
      <style jsx>{`
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--color-border);
        }
        
        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .nav-logo {
          font-size: 1.5rem;
          font-weight: 700;
          text-decoration: none;
          color: var(--color-primary);
          letter-spacing: -0.025em;
        }
        
        .logo-accent {
          color: var(--color-accent);
        }
        
        .nav-menu {
          display: flex;
          gap: 2rem;
          align-items: center;
        }
        
        .nav-link {
          text-decoration: none;
          color: var(--color-text);
          font-weight: 500;
          position: relative;
          transition: var(--transition);
        }
        
        .nav-link:hover {
          color: var(--color-accent);
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--color-accent);
          transition: var(--transition);
        }
        
        .nav-link:hover::after {
          width: 100%;
        }
        
        .nav-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
        }
        
        .hamburger {
          display: block;
          width: 24px;
          height: 2px;
          background: var(--color-primary);
          position: relative;
          transition: var(--transition);
        }
        
        .hamburger::before,
        .hamburger::after {
          content: '';
          display: block;
          width: 24px;
          height: 2px;
          background: var(--color-primary);
          position: absolute;
          transition: var(--transition);
        }
        
        .hamburger::before {
          top: -8px;
        }
        
        .hamburger::after {
          top: 8px;
        }
        
        .hamburger-open {
          background: transparent;
        }
        
        .hamburger-open::before {
          top: 0;
          transform: rotate(45deg);
        }
        
        .hamburger-open::after {
          top: 0;
          transform: rotate(-45deg);
        }
        
        @media (max-width: 768px) {
          .nav-menu {
            position: fixed;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            flex-direction: column;
            padding: 2rem;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: var(--transition);
          }
          
          .nav-menu-open {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }
          
          .nav-toggle {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
} 