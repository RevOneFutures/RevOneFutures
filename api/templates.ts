import type { VercelRequest, VercelResponse } from '@vercel/node';
const templatesData = require('../templates.json');

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json(templatesData);
}

