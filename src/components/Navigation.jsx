import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav ${isScrolled ? 'nav-scrolled' : ''}`}>
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
          background: rgba(248, 250, 251, 0.85);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(209, 220, 231, 0.3);
          transition: var(--transition-smooth);
        }
        
        .nav-scrolled {
          background: rgba(248, 250, 251, 0.95);
          box-shadow: var(--shadow-sm);
        }
        
        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1.25rem 2rem;
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
          transition: var(--transition);
        }
        
        .nav-logo:hover {
          transform: translateY(-1px);
        }
        
        .logo-accent {
          color: var(--color-accent);
        }
        
        .nav-menu {
          display: flex;
          gap: 2.5rem;
          align-items: center;
        }
        
        .nav-link {
          text-decoration: none;
          color: var(--color-text-light);
          font-weight: 500;
          font-size: 0.95rem;
          position: relative;
          transition: var(--transition);
          letter-spacing: 0.01em;
        }
        
        .nav-link:hover {
          color: var(--color-accent);
          transform: translateY(-1px);
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -6px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background: var(--color-accent);
          transition: var(--transition);
          border-radius: 1px;
        }
        
        .nav-link:hover::after {
          width: 24px;
        }
        
        .nav-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          border-radius: var(--border-radius-sm);
          transition: var(--transition);
        }
        
        .nav-toggle:hover {
          background: var(--color-bg-mist);
        }
        
        .hamburger {
          display: block;
          width: 24px;
          height: 2px;
          background: var(--color-primary);
          position: relative;
          transition: var(--transition);
          border-radius: 1px;
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
          border-radius: 1px;
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
          .nav-container {
            padding: 1rem 1rem;
          }
          
          .nav-menu {
            position: fixed;
            top: 100%;
            left: 0;
            right: 0;
            background: var(--color-bg);
            flex-direction: column;
            padding: 2rem;
            gap: 1.5rem;
            box-shadow: var(--shadow-lg);
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: var(--transition-smooth);
          }
          
          .nav-menu-open {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }
          
          .nav-link {
            font-size: 1.1rem;
            padding: 0.5rem 0;
          }
          
          .nav-toggle {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
} 