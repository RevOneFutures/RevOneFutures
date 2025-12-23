import { render } from '@react-email/render';
import React from 'react';
import fs from 'fs';
import path from 'path';
import RevOneAccountCreated from './emails/revone-account-created';

/**
 * Export email template to HTML file
 */
async function exportEmail() {
  try {
    // Render the email with example data
    const html = await render(
      React.createElement(RevOneAccountCreated, {
        name: 'John Doe',
        accountLogin: 'ACCOUNT12345',
      })
    );

    // Create exports directory if it doesn't exist
    const exportsDir = path.join(__dirname, 'exports');
    if (!fs.existsSync(exportsDir)) {
      fs.mkdirSync(exportsDir, { recursive: true });
    }

    // Write HTML to file
    const outputPath = path.join(exportsDir, 'revone-account-created.html');
    fs.writeFileSync(outputPath, html, 'utf-8');

    console.log(`✅ Email exported successfully to: ${outputPath}`);
  } catch (error) {
    console.error('❌ Error exporting email:', error);
    process.exit(1);
  }
}

exportEmail();

