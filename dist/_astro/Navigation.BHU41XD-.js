import{n as e,t}from"./react.B3l9tXpq.js";var n=e((e=>{var t=Symbol.for(`react.transitional.element`);function n(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.jsx=n,e.jsxs=n})),r=e(((e,t)=>{t.exports=n()})),i=t(),a=r();function o(){let[e,t]=(0,i.useState)(!1),[n,r]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{let e=()=>{r(window.scrollY>50)};return window.addEventListener(`scroll`,e),()=>window.removeEventListener(`scroll`,e)},[]),(0,a.jsxs)(`nav`,{className:`nav ${n?`nav-scrolled`:``}`,children:[(0,a.jsxs)(`div`,{className:`nav-container`,children:[(0,a.jsxs)(`a`,{href:`/`,className:`nav-logo`,children:[(0,a.jsx)(`span`,{className:`logo-text`,children:`Azorean`}),(0,a.jsx)(`span`,{className:`logo-accent`,children:`Studios`})]}),(0,a.jsxs)(`div`,{className:`nav-menu ${e?`nav-menu-open`:``}`,children:[(0,a.jsx)(`a`,{href:`/`,className:`nav-link`,children:`Home`}),(0,a.jsx)(`a`,{href:`/studios`,className:`nav-link`,children:`Studios`}),(0,a.jsx)(`a`,{href:`/segundo-sol`,className:`nav-link`,children:`Segundo Sol`}),(0,a.jsx)(`a`,{href:`/sound`,className:`nav-link`,children:`Sound`}),(0,a.jsx)(`a`,{href:`/contact`,className:`nav-link`,children:`Contact`})]}),(0,a.jsx)(`button`,{className:`nav-toggle`,onClick:()=>t(!e),"aria-label":`Toggle navigation`,children:(0,a.jsx)(`span`,{className:`hamburger ${e?`hamburger-open`:``}`})})]}),(0,a.jsx)(`style`,{jsx:!0,children:`
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
      `})]})}export{o as default};