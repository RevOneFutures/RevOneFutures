# RevOne Emails - React.email Templates

This project contains React.email templates for RevOne Futures email communications with a Stripo-like preview system for team collaboration.

## 🚀 Quick Start

### Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000` to preview templates locally.

### Deploy to Vercel (Team Access)

See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete deployment instructions.

**Quick steps:**
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically
4. Share the Vercel URL with your team

## Setup

Install dependencies:
```bash
npm install
```

## Development

Start the development server with hot reload:
```bash
npm run dev
```

The dev server will start on `http://localhost:3000` where you can preview your email templates.

## Assets

### Local Development
- Logo: `static/images/Logo Alternative.png` (served via dev server at `/static/images/`)
- Social Icons: Currently using external URLs from Stripo CDN

The dev server automatically serves files from the `static/` directory, so local images will work in previews.

### Production/Email Sending
**Important**: For emails sent via Resend, images must be hosted on a publicly accessible URL (CDN, S3, etc.) or embedded as base64.

Options:
1. **Host images on a CDN** (recommended): Upload images to a service like Cloudinary, AWS S3, or your own server, then update the `src` paths to the public URLs
2. **Use base64 embedding**: Convert images to base64 strings and embed directly in the HTML (increases email size)
3. **Keep external URLs**: Continue using the Stripo CDN URLs for production

The current setup uses local paths for development preview, but you'll need to update to hosted URLs before sending production emails.

## Email Template

### RevOne Account Created (`revone-account-created.tsx`)

Email sent when a new simulated funded account is created.

**Props:**
- `name` (string, optional): Customer name (default: "Valued Customer")
- `accountLogin` (string, optional): Account login ID (default: "ACCOUNT123")

**Usage:**
```tsx
<RevOneAccountCreated 
  name="John Doe" 
  accountLogin="ACCOUNT12345" 
/>
```

## Sending Emails with Resend

### Setup

1. Create a `.env` file in the project root:
```bash
RESEND_API_KEY=re_your_api_key_here
```

2. Get your API key from [Resend Dashboard](https://resend.com/api-keys)

### Usage

Import and use the send function:

```typescript
import { sendRevOneAccountCreatedEmail } from './send-email';

await sendRevOneAccountCreatedEmail({
  to: '[email protected]',
  name: 'John Doe',
  accountLogin: 'ACCOUNT12345',
  from: 'RevOne Futures <[email protected]>', // Optional
  subject: 'Your Account is Ready', // Optional
});
```

Or run directly with tsx:
```bash
tsx send-email.ts
```
(Uncomment the example usage in the file first)

## Export HTML

Export email templates to HTML:
```bash
npm run export
```

