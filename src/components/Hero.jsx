export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="gradient-overlay"></div>
        <div className="wave-animation"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <span className="hero-label">WELCOME TO AZOREAN STUDIOS®</span>
          <h1 className="hero-title">
            Creative Technology<br />
            Meets Mindful Design
          </h1>
          <p className="hero-description">
            Exploring the intersection of sound, consciousness, and digital experience 
            within a future-facing creative studio.
          </p>
          <a href="/studios" className="hero-cta">
            Explore Our Work
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <div className="scroll-line"></div>
      </div>
      
      <style jsx>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
        }
        
        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
        }
        
        .gradient-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            rgba(74, 144, 164, 0.1) 0%,
            rgba(255, 255, 255, 0.9) 50%,
            rgba(226, 232, 240, 0.8) 100%
          );
        }
        
        .wave-animation {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234a90a4' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          animation: wave 20s ease-in-out infinite;
          opacity: 0.3;
        }
        
        @keyframes wave {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.02); }
        }
        
        .hero-content {
          position: relative;
          z-index: 10;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          text-align: center;
        }
        
        .hero-text {
          max-width: 800px;
          margin: 0 auto;
        }
        
        .hero-label {
          display: inline-block;
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-accent);
          margin-bottom: 1.5rem;
          opacity: 0;
          animation: fadeInUp 1s ease-out 0.3s forwards;
        }
        
        .hero-title {
          font-size: clamp(3rem, 6vw, 5rem);
          font-weight: 700;
          line-height: 1.1;
          color: var(--color-primary);
          margin-bottom: 2rem;
          letter-spacing: -0.03em;
          opacity: 0;
          animation: fadeInUp 1s ease-out 0.5s forwards;
        }
        
        .hero-description {
          font-size: 1.25rem;
          line-height: 1.6;
          color: var(--color-text-light);
          margin-bottom: 3rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          opacity: 0;
          animation: fadeInUp 1s ease-out 0.7s forwards;
        }
        
        .hero-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 2rem;
          background: var(--color-primary);
          color: white;
          text-decoration: none;
          border-radius: var(--border-radius);
          font-weight: 600;
          font-size: 1.125rem;
          transition: var(--transition);
          opacity: 0;
          animation: fadeInUp 1s ease-out 0.9s forwards;
        }
        
        .hero-cta:hover {
          background: var(--color-accent);
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(74, 144, 164, 0.3);
        }
        
        .hero-cta svg {
          transition: var(--transition);
        }
        
        .hero-cta:hover svg {
          transform: translateX(4px);
        }
        
        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          right: 2rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          color: var(--color-text-light);
          font-size: 0.875rem;
          font-weight: 500;
          writing-mode: vertical-lr;
          text-orientation: mixed;
          opacity: 0;
          animation: fadeIn 1s ease-out 1.5s forwards;
        }
        
        .scroll-line {
          width: 1px;
          height: 60px;
          background: var(--color-accent);
          animation: scrollLine 2s ease-in-out infinite;
        }
        
        @keyframes scrollLine {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(0.5); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @media (max-width: 768px) {
          .hero {
            min-height: 90vh;
            padding-top: 5rem;
          }
          
          .hero-content {
            padding: 0 1rem;
          }
          
          .hero-description {
            font-size: 1.125rem;
          }
          
          .scroll-indicator {
            display: none;
          }
        }
      `}</style>
    </section>
  );
} 