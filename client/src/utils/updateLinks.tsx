import React, { ReactNode, useEffect } from 'react';
import { appendUtmParams } from './utm';

interface UTMLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  [props: string]: any;
}

/**
 * UTMLink component that automatically appends UTM parameters to the provided link
 */
export const UTMLink: React.FC<UTMLinkProps> = ({ href, children, ...props }) => {
  const enhancedHref = appendUtmParams(href);
  
  return (
    <a href={enhancedHref} {...props}>
      {children}
    </a>
  );
};

// Debounce function to prevent multiple rapid executions
const debounce = <T extends (...args: any[]) => any>(fn: T, ms = 300) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function(this: unknown, ...args: Parameters<T>) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};

/**
 * Function to enhance all mystylus.ai links in the DOM with UTM parameters
 */
const enhanceLinksInDOM = () => {
  // Only run in browser environment
  if (typeof document === 'undefined') return;
  
  // Find all links to mystylus.ai that haven't been enhanced yet
  const links = document.querySelectorAll('a[href*="mystylus.ai"]:not([data-utm-enhanced="true"])');
  
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href) {
      // Update the href with UTM parameters
      const enhancedHref = appendUtmParams(href);
      link.setAttribute('href', enhancedHref);
      // Mark this link as enhanced to avoid reprocessing
      link.setAttribute('data-utm-enhanced', 'true');
    }
  });
};

/**
 * Hook to enhance all mystylus.ai links in the document with UTM parameters
 * This is useful for adding UTM parameters to links in HTML content that 
 * you don't have direct control over (like CMS content, etc.)
 */
export function useEnhanceLinks() {
  useEffect(() => {
    // Run once when the component mounts
    enhanceLinksInDOM();
    
    // Create debounced version of the enhance function
    const debouncedEnhance = debounce(enhanceLinksInDOM, 100);
    
    // Observer for DOM changes
    const observer = new MutationObserver((mutations) => {
      // Check if any links might have been added
      const hasAddedNodes = mutations.some(mutation => 
        mutation.type === 'childList' && mutation.addedNodes.length > 0
      );
      
      if (hasAddedNodes) {
        debouncedEnhance();
      }
    });
    
    // Start observing
    observer.observe(document.body, { 
      childList: true, 
      subtree: true 
    });
    
    // Clean up
    return () => {
      observer.disconnect();
    };
  }, []);
}

/**
 * Higher-order component to wrap any component and enhance all mystylus.ai links
 * within it with UTM parameters
 */
export const withUTMLinks = <P extends object>(Component: React.ComponentType<P>) => {
  return (props: P) => {
    useEnhanceLinks();
    return <Component {...props} />;
  };
}; 