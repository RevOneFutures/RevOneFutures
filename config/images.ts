/**
 * Image URL configuration
 * 
 * For local development: Use relative paths
 * For production: Use your Vercel deployment URL
 * 
 * After deploying to Vercel, update BASE_URL to your actual Vercel URL
 * Example: https://your-project.vercel.app
 */

const BASE_URL = process.env.VERCEL_URL 
  ? `https://${process.env.VERCEL_URL}`
  : process.env.NEXT_PUBLIC_BASE_URL || 'https://your-project.vercel.app';

export const IMAGE_URLS = {
  logo: `${BASE_URL}/static/images/Logo%20Alternative.png`,
};

