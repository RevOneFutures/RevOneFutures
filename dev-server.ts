import express from 'express';
import { render } from '@react-email/render';
import React from 'react';
import RevOneAccountCreated from './emails/revone-account-created';

const app = express();
const PORT = 3000;

// Serve static files
app.use('/static', express.static('static'));

// Serve email preview
app.get('/', async (req, res) => {
  try {
    const html = await render(
      React.createElement(RevOneAccountCreated, {
        name: 'John Doe',
        accountLogin: 'ACCOUNT12345',
      })
    );
    
    res.send(html);
  } catch (error: any) {
    res.status(500).send(`
      <html>
        <body>
          <h1>Error loading email template</h1>
          <pre>${error.message}</pre>
          <pre>${error.stack}</pre>
        </body>
      </html>
    `);
  }
});

app.listen(PORT, () => {
  console.log(`\n📧 Email dev server running at http://localhost:${PORT}\n`);
  console.log('Press Ctrl+C to stop\n');
});

