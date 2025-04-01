import React, { useEffect } from 'react';

/**
 * This component optimizes CSS loading by:
 * 1. Injecting critical CSS directly for fast initial render
 * 2. Deferring non-critical CSS loading
 * 3. Managing font loading efficiently
 */
const CriticalCSSLoader: React.FC = () => {
  useEffect(() => {
    // Add critical CSS for main content (extracted from compiled CSS)
    const injectCriticalCSS = () => {
      // Extract only the essential styles needed for above-the-fold content
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
        
        .container {
          width: 100%;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
          padding-left: 1rem;
          padding-right: 1rem;
        }
        
        /* Critical font classes */
        .font-orbikular {
          font-family: var(--font-orbikular);
        }
        
        .font-aeonik {
          font-family: var(--font-aeonik);
        }
        
        /* Critical layout classes */
        .flex { display: flex; }
        .items-center { align-items: center; }
        .justify-between { justify-content: space-between; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .py-4 { padding-top: 1rem; padding-bottom: 1rem; }
        .bg-white { background-color: #FFFFFF; }
        .text-center { text-align: center; }
        .rounded-full { border-radius: 9999px; }
        
        /* Hero section critical styles */
        h1 {
          margin-top: 0;
          font-family: var(--font-orbikular);
          font-weight: normal;
        }
        
        h1 em {
          font-family: var(--font-orbikular);
          font-style: italic;
        }

        h2 {
          font-family: var(--font-aeonik);
          font-weight: 500;
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
      // Identify your current CSS filename (you may need to adjust this pattern)
      const cssLinks = document.querySelectorAll('link[rel="stylesheet"]');
      let mainCssUrl = '';
      
      // Find main CSS file if it exists
      Array.from(cssLinks).forEach((link) => {
        const linkElement = link as HTMLLinkElement;
        if (linkElement.href.includes('index-') && linkElement.href.endsWith('.css')) {
          mainCssUrl = linkElement.href;
        }
      });
      
      // If no main CSS found in the DOM, construct a fallback path
      if (!mainCssUrl) {
        // Try to determine the correct path - this may need adjustment
        const scriptTags = document.querySelectorAll('script');
        let assetsPath = '/assets/';
        
        Array.from(scriptTags).forEach((script) => {
          const scriptElement = script as HTMLScriptElement;
          if (scriptElement.src && scriptElement.src.includes('/assets/')) {
            const srcParts = scriptElement.src.split('/assets/');
            if (srcParts.length > 1) {
              assetsPath = `${srcParts[0]}/assets/`;
            }
          }
        });
        
        // Fallback to a common pattern - adjust as needed
        mainCssUrl = `${assetsPath}index-[hash].css`;
      }
      
      // Load the main CSS with low priority
      if (mainCssUrl) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = mainCssUrl;
        link.setAttribute('media', 'print');
        link.setAttribute('onload', "this.media='all'");
        document.head.appendChild(link);
      }
      
      // Load other non-critical CSS if needed
      const otherCssFiles: string[] = [
        // Add paths to other non-critical CSS files here
      ];
      
      otherCssFiles.forEach(cssFile => {
        if (cssFile) {
          const link = document.createElement('link');
          link.rel = 'stylesheet';
          link.href = cssFile;
          link.setAttribute('media', 'print');
          link.addEventListener('load', () => {
            link.setAttribute('media', 'all');
          });
          document.head.appendChild(link);
        }
      });
    };

    // Execute optimization
    injectCriticalCSS();
    
    // Use requestIdleCallback for non-critical CSS loading 
    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(() => {
        loadDeferredCSS();
      }, { timeout: 2000 });
    } else {
      // Fallback for browsers without requestIdleCallback
      setTimeout(loadDeferredCSS, 200);
    }
    
    // Add class to indicate critical CSS is loaded
    document.documentElement.classList.add('critical-css-loaded');
  }, []);

  return null;
};

export default CriticalCSSLoader; 