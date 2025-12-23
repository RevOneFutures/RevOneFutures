/**
 * Configuration constants for email templates
 * 
 * IMPORTANT: After deploying to Vercel, update BASE_URL with your actual Vercel URL
 * Example: 'https://revone-emails.vercel.app'
 * 
 * For local development, leave as empty string to use relative paths
 */

// Update this after Vercel deployment!
export const BASE_URL = ''; // e.g., 'https://your-project.vercel.app'

export const getImageUrl = (path: string): string => {
  if (BASE_URL) {
    // Production: use absolute URL
    return `${BASE_URL}${path}`;
  }
  // Development: use relative path
  return path;
};

