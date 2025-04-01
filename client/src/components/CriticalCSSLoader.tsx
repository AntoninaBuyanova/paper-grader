import React, { useEffect } from 'react';

/**
 * This component handles critical CSS loading and optimization
 * 1. Injects critical CSS needed for initial render
 * 2. Defers non-critical CSS for better performance
 */
const CriticalCSSLoader: React.FC = () => {
  useEffect(() => {
    // Add critical CSS for main content (extracted from compiled CSS)
    const injectCriticalCSS = () => {
      const criticalStyles = `
        /* Critical styles for initial render */
        body {
          font-family: var(--font-aeonik);
          font-size: 16px;
          line-height: 1.5;
          color: #334155;
          background-color: #f8fafc;
          margin: 0;
          padding: 0;
        }
        
        .font-orbikular {
          font-family: var(--font-orbikular);
        }
        
        .font-aeonik {
          font-family: var(--font-aeonik);
        }
        
        .container {
          width: 100%;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
          padding-left: 1rem;
          padding-right: 1rem;
        }
        
        h1 {
          margin-top: 0;
          font-family: var(--font-orbikular);
          font-weight: normal;
        }
        
        h1 em {
          font-family: var(--font-orbikular);
          font-style: italic;
        }
        
        .text-center {
          text-align: center;
        }
        
        .bg-white {
          background-color: #FFFFFF;
        }
      `;

      // Insert critical CSS if not already present
      if (!document.getElementById('critical-css-inline')) {
        const style = document.createElement('style');
        style.id = 'critical-css-inline';
        style.innerHTML = criticalStyles;
        document.head.appendChild(style);
      }
    };

    // Load non-critical CSS files asynchronously
    const loadDeferredCSS = () => {
      // Add main CSS file with low priority
      const mainStylesheet = document.createElement('link');
      mainStylesheet.rel = 'stylesheet';
      mainStylesheet.href = '/assets/index-Bt1yRFRD.css'; // Update this to match your actual CSS filename
      mainStylesheet.setAttribute('media', 'print');
      
      // Use event listener instead of direct property assignment
      mainStylesheet.addEventListener('load', function() {
        mainStylesheet.setAttribute('media', 'all');
      });
      
      document.head.appendChild(mainStylesheet);
    };

    // Execute optimization
    injectCriticalCSS();
    
    // Use requestIdleCallback for non-critical CSS loading
    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(loadDeferredCSS, { timeout: 2000 });
    } else {
      // Fallback for browsers without requestIdleCallback
      setTimeout(loadDeferredCSS, 100);
    }
  }, []);

  return null;
};

export default CriticalCSSLoader; 