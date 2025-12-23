import { render } from '@react-email/render';
import React from 'react';
import type { VercelRequest, VercelResponse } from '@vercel/node';
const templatesData = require('../../templates.json');

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  const { templateId } = req.query;

  if (typeof templateId !== 'string') {
    return res.status(400).send('Invalid template ID');
  }

  const template = templatesData.templates.find((t: any) => t.id === templateId);

  if (!template) {
    return res.status(404).send('Template not found');
  }

  try {
    // Dynamically import the template
    const TemplateModule = await import(`../../../emails/${template.file}`);
    const TemplateComponent = TemplateModule.default;

    // Get variables from query params or use preview defaults
    const variables: Record<string, any> = {};
    template.variables.forEach((v: any) => {
      const queryValue = req.query[v.name];
      if (queryValue && typeof queryValue === 'string') {
        variables[v.name] = queryValue;
      } else {
        variables[v.name] = (template.preview as any)[v.name] || v.default;
      }
    });

    const html = await render(React.createElement(TemplateComponent, variables));
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).send(html);
  } catch (error: any) {
    console.error('Error rendering template:', error);
    res.status(500).send(`
      <html>
        <body style="font-family: sans-serif; padding: 20px;">
          <h1>Error loading email template</h1>
          <pre>${error.message}</pre>
          <pre>${error.stack}</pre>
        </body>
      </html>
    `);
  }
}

