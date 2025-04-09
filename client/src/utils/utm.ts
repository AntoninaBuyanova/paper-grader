/**
 * Utility function to extract UTM parameters from the current URL
 * and append them to other URLs
 */

// Extract UTM parameters from the current URL
export const getUtmParams = (): Record<string, string> => {
  if (typeof window === 'undefined') return {};
  
  try {
    const url = new URL(window.location.href);
    const params = url.searchParams;
    
    // UTM parameter names
    const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
    
    // Extract UTM parameters into an object
    const utmParams: Record<string, string> = {};
    
    for (const key of utmKeys) {
      const value = params.get(key);
      if (value) {
        utmParams[key] = value;
      }
    }
    
    return utmParams;
  } catch (error) {
    console.error('Error extracting UTM parameters:', error);
    return {};
  }
};

// Check if URL already has any UTM parameters
const hasUtmParams = (url: string): boolean => {
  try {
    const urlObj = new URL(url);
    return urlObj.searchParams.has('utm_source') || 
           urlObj.searchParams.has('utm_medium') || 
           urlObj.searchParams.has('utm_campaign') || 
           urlObj.searchParams.has('utm_term') || 
           urlObj.searchParams.has('utm_content');
  } catch (error) {
    // If the URL is invalid, return false
    return false;
  }
};

// Append UTM parameters to a URL
export const appendUtmParams = (url: string): string => {
  // If no URL provided, return empty string
  if (!url) return '';
  
  try {
    // Get UTM parameters from current page
    const currentUtmParams = getUtmParams();
    
    // If no UTM parameters exist in current page, return the original URL
    if (Object.keys(currentUtmParams).length === 0) return url;
    
    // Parse the target URL
    const targetUrl = new URL(url);
    const targetParams = targetUrl.searchParams;
    
    // Add UTM parameters that don't already exist in the target URL
    for (const [key, value] of Object.entries(currentUtmParams)) {
      // Only add the parameter if it doesn't exist in the target URL
      if (!targetParams.has(key)) {
        targetParams.set(key, value);
      }
    }
    
    // Return the URL with UTM parameters
    return targetUrl.toString();
  } catch (error) {
    // If URL parsing fails (e.g., for relative URLs), try a simpler approach
    console.warn('Error parsing URL, using fallback method:', error);
    
    try {
      const currentUtmParams = getUtmParams();
      const hasParams = url.includes('?');
      
      if (Object.keys(currentUtmParams).length === 0) return url;
      
      // Build UTM parameter string
      const utmString = Object.entries(currentUtmParams)
        .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
        .join('&');
      
      // Append parameters appropriately
      if (hasParams) {
        return `${url}&${utmString}`;
      } else {
        return `${url}?${utmString}`;
      }
    } catch (e) {
      console.error('Fallback UTM appending failed:', e);
      return url;
    }
  }
}; 