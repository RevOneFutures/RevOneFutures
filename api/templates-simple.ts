import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  const data = {
    "templates": [
      {
        "id": "revone-account-created",
        "name": "Account Created",
        "description": "Email sent when a new simulated funded account is created",
        "category": "Account Management",
        "file": "revone-account-created.tsx",
        "variables": [
          {
            "name": "name",
            "type": "string",
            "required": false,
            "default": "Valued Customer",
            "description": "Customer's name"
          },
          {
            "name": "accountLogin",
            "type": "string",
            "required": false,
            "default": "ACCOUNT123",
            "description": "Account login ID"
          }
        ],
        "preview": {
          "name": "John Doe",
          "accountLogin": "ACCOUNT12345"
        }
      }
    ]
  };

  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json(data);
}

