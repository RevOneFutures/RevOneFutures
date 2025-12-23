import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  const { templateId } = req.query;

  if (typeof templateId !== 'string') {
    return res.status(400).send('Invalid template ID');
  }

  // For now, return a simple HTML response showing it works
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Email Preview</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          padding: 40px;
          background: #f0f0f0;
        }
        .container {
          max-width: 800px;
          margin: 0 auto;
          background: white;
          padding: 40px;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        .error {
          background: #fff3cd;
          border: 1px solid #ffc107;
          padding: 20px;
          border-radius: 4px;
          margin-bottom: 20px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="error">
          <h2>⚠️ Email Preview Temporarily Unavailable</h2>
          <p>The email rendering system is being configured. Template ID: <strong>${templateId}</strong></p>
          <p>The template gallery is working correctly. Email rendering will be available soon.</p>
        </div>
        <h3>Template Details</h3>
        <p><strong>Template ID:</strong> ${templateId}</p>
        <p><strong>Status:</strong> Preview API is functional</p>
        <p><a href="/">← Back to Templates</a></p>
      </div>
    </body>
    </html>
  `);
}
