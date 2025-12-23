import 'dotenv/config';
import { Resend } from 'resend';
import { render } from '@react-email/render';
import React from 'react';
import RevOneAccountCreated from './emails/revone-account-created';

// Initialize Resend client
// Set RESEND_API_KEY in .env file or environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

interface SendEmailParams {
  to: string | string[];
  name: string;
  accountLogin: string;
  from?: string;
  subject?: string;
}

/**
 * Send RevOne Account Created email
 */
export async function sendRevOneAccountCreatedEmail({
  to,
  name,
  accountLogin,
  from = 'RevOne Futures <[email protected]>',
  subject = 'RevOne Futures: Your Simulated Funded Account Has Been Created',
}: SendEmailParams) {
  try {
    // Render the React email component to HTML
    const html = await render(
      React.createElement(RevOneAccountCreated, {
        name,
        accountLogin,
      })
    );

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from,
      to: Array.isArray(to) ? to : [to],
      subject,
      html,
    });

    if (error) {
      console.error('Error sending email:', error);
      throw error;
    }

    console.log('Email sent successfully:', data);
    return data;
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
}

// Example usage (uncomment to test)
/*
async function example() {
  await sendRevOneAccountCreatedEmail({
    to: '[email protected]',
    name: 'John Doe',
    accountLogin: 'ACCOUNT12345',
  });
}

example().catch(console.error);
*/

