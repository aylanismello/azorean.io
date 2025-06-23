export default function Hero() {
  return (
    <section className="hero">
      {/* 
        VIDEO BACKGROUND PLACEHOLDER:
        1. Create a short (10-15 second) looped video of the Azores landscape
        2. Focus on São Miguel - show misty mountains, volcanic landscapes, or ocean views
        3. Use subtle, slow camera movements (drone footage works well)
        4. Keep it moody with soft lighting - golden hour or misty conditions
        5. Export as MP4 and WebM formats for browser compatibility
        6. Recommended dimensions: 1920x1080 or higher
        7. Compress for web but maintain quality
        8. Replace the placeholder div below with:
           <video autoPlay muted loop playsInline className="hero-video">
             <source src="/azores-landscape.webm" type="video/webm" />
             <source src="/azores-landscape.mp4" type="video/mp4" />
           </video>
      */}
      <div className="hero-background">
        <video autoPlay muted loop playsInline className="hero-video">
          <source src="/azores_clip.mp4" type="video/mp4" />
        </video>
        <div className="gradient-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            A studio for slow tech, sound, and story.
          </h1>
        </div>
      </div>

      {/* Subtle floating elements inspired by ocean currents */}
      <div className="floating-elements">
        <div className="current current-1"></div>
        <div className="current current-2"></div>
        <div className="current current-3"></div>
      </div>
      
      <style jsx>{`
        .hero {
          position: relative;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          overflow: hidden;
          background: var(--color-deep-blue);
        }
        
        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
        }
        
        /* Video styling */
        .hero-video {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          min-width: 100%;
          min-height: 100%;
          width: auto;
          height: auto;
          object-fit: cover;
          z-index: 0;
        }
        
        .gradient-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            rgba(15, 27, 46, 0.4) 0%,
            rgba(45, 125, 138, 0.2) 30%,
            rgba(15, 27, 46, 0.6) 100%
          );
          z-index: 2;
        }

        
        .hero-content {
          position: relative;
          z-index: 10;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          width: 100%;
        }
        
        .hero-text {
          max-width: 800px;
        }
        
        .hero-title {
          font-size: clamp(2.5rem, 6vw, 5.5rem);
          font-weight: 700;
          line-height: 1.1;
          color: var(--color-pure-white);
          margin-bottom: 2rem;
          letter-spacing: -0.02em;
          text-shadow: 0 4px 20px rgba(15, 27, 46, 0.5);
          opacity: 0;
          animation: fadeInUp 1.2s ease-out 0.5s forwards;
        }
        
        .text-emphasis {
          font-style: italic;
          color: var(--color-cloud-white);
        }
        
        .text-gradient {
          background: linear-gradient(135deg, #4A9AA8 0%, #8FA1B3 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 3;
          pointer-events: none;
        }
        
        .current {
          position: absolute;
          background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(74, 154, 168, 0.15) 50%, 
            transparent 100%);
          border-radius: 50px;
          animation: float-current 8s ease-in-out infinite;
        }
        
        .current-1 {
          width: 200px;
          height: 2px;
          top: 20%;
          right: 10%;
          animation-delay: 0s;
        }
        
        .current-2 {
          width: 150px;
          height: 1px;
          top: 60%;
          right: 30%;
          animation-delay: 3s;
        }
        
        .current-3 {
          width: 120px;
          height: 1px;
          bottom: 30%;
          right: 20%;
          animation-delay: 6s;
        }
        
        @keyframes float-current {
          0%, 100% { 
            transform: translateX(0) translateY(0) rotate(5deg);
            opacity: 0.3;
          }
          50% { 
            transform: translateX(-20px) translateY(-10px) rotate(-5deg);
            opacity: 0.7;
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Responsive design */
        @media (max-width: 768px) {
          .hero-content {
            padding: 0 1rem;
          }
          
          .hero-title {
            font-size: clamp(2rem, 8vw, 3.5rem);
            line-height: 1.2;
          }
          
          .current {
            display: none;
          }
        }
        
        @media (max-width: 480px) {
          .hero-title {
            font-size: clamp(1.8rem, 9vw, 2.8rem);
          }
        }
      `}</style>
    </section>
  );
} 