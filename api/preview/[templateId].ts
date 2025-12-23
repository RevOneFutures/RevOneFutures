import { render } from '@react-email/render';
import React from 'react';
import type { VercelRequest, VercelResponse } from '@vercel/node';
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Row,
  Column,
  Img,
  Text,
  Heading,
  Link,
} from '@react-email/components';

// Email template component defined inline
function RevOneAccountCreated({ name = 'Valued Customer', accountLogin = 'ACCOUNT123' }: any) {
  const main = { backgroundColor: '#F6F6F6', fontFamily: 'arial, "helvetica neue", helvetica, sans-serif' };
  const container = { backgroundColor: '#FFFFFF', width: '600px', margin: '0 auto' };
  const headerSection = { backgroundColor: '#000000', padding: '20px', textAlign: 'center' as const };
  const logo = { display: 'block', margin: '0 auto' };
  const titleSection = { backgroundColor: '#020202', padding: '20px' };
  const titleHeading = { color: '#FEFDFD', fontSize: '16px', fontWeight: 'normal', lineHeight: '19.2px', margin: '0', textAlign: 'center' as const, letterSpacing: '0' };
  const bodySection = { backgroundColor: '#000000', padding: '20px' };
  const bodyText = { color: '#FEFDFD', fontSize: '14px', lineHeight: '21px', margin: '0', letterSpacing: '0' };
  const brandColor = { color: '#ED2025' };
  const linkStyle = { color: '#ED2025', textDecoration: 'none' };
  const footerSection = { backgroundColor: '#000000', padding: '20px' };
  const footerColumnLeft = { width: '270px', verticalAlign: 'top' as const };
  const footerColumnRight = { width: '270px', verticalAlign: 'top' as const };
  const footerLogo = { display: 'block' };
  const socialColumn = { paddingRight: '10px', verticalAlign: 'top' as const };
  const socialIcon = { display: 'block' };
  const footerText = { color: '#FEFDFD', fontSize: '14px', lineHeight: '21px', margin: '0', letterSpacing: '0' };
  const dividerSection = { padding: '20px' };
  const divider = { borderBottom: '1px solid #CCCCCC', height: '0px', width: '100%', margin: '0' };

  return React.createElement(Html, { lang: 'en', dir: 'ltr' },
    React.createElement(Head),
    React.createElement(Body, { style: main },
      React.createElement(Container, { style: container },
        React.createElement(Section, { style: headerSection },
          React.createElement(Img, { src: 'https://revonefutues.vercel.app/static/images/Logo%20Alternative.png', width: '400', alt: 'RevOne Futures Logo', style: logo })
        ),
        React.createElement(Section, { style: titleSection },
          React.createElement(Heading, { style: titleHeading }, 'RevOne Futures: Your Simulated Funded Account Has Been Created')
        ),
        React.createElement(Section, { style: bodySection },
          React.createElement(Text, { style: bodyText }, React.createElement('strong', null, `Hi ${name},`)),
          React.createElement(Text, { style: bodyText }, '\u00A0'),
          React.createElement(Text, { style: bodyText }, 'Your ', React.createElement('span', { style: brandColor }, 'RevOne Futures'), ` account, ${accountLogin} is now active and ready for use.`),
          React.createElement(Text, { style: bodyText }, '\u00A0'),
          React.createElement(Text, { style: bodyText }, 'You can find your Tradovate login credentials at the top of your ', React.createElement('span', { style: brandColor }, 'RevOne Futures'), ' User Dashboard, displayed like this:'),
          React.createElement(Text, { style: bodyText }, '\u00A0'),
          React.createElement(Text, { style: bodyText }, 'Use these credentials to log into Tradovate ', React.createElement(Link, { href: '#', style: linkStyle }, 'here'), '. Be careful and ensure there are no extra spaces or missing characters when entering your login information.'),
          React.createElement(Text, { style: bodyText }, '\u00A0'),
          React.createElement(Text, { style: bodyText }, 'After logging in, a pop-up for Tradovate\'s Non-Professional Agreement will appear. You must complete this form — do not skip it. If you fail to submit the agreement, your market data will be delayed, and you could incur a $300 monthly fee. \u00A0'),
          React.createElement(Text, { style: bodyText }, '\u00A0'),
          React.createElement(Text, { style: bodyText }, 'Once the agreement is submitted, we\'ll complete the setup for your market data access. Please note that Tradovate\'s processing time may take up to 90 minutes. \u00A0'),
          React.createElement(Text, { style: bodyText }, '\u00A0'),
          React.createElement(Text, { style: bodyText }, 'Full throttle,', React.createElement('br'), React.createElement('strong', { style: brandColor }, 'RevOne Futures'))
        ),
        React.createElement(Section, { style: footerSection },
          React.createElement(Row, null,
            React.createElement(Column, { style: footerColumnLeft },
              React.createElement(Img, { src: 'https://revonefutues.vercel.app/static/images/Logo%20Alternative.png', width: '140', alt: 'RevOne Futures Logo', style: footerLogo })
            ),
            React.createElement(Column, { style: footerColumnRight },
              React.createElement(Row, null,
                React.createElement(Column, { style: socialColumn }, React.createElement(Link, { href: '#' }, React.createElement(Img, { src: 'https://facgmgr.stripocdn.email/content/assets/img/social-icons/logo-white/facebook-logo-white.png', alt: 'Facebook', width: '32', height: '32', style: socialIcon }))),
                React.createElement(Column, { style: socialColumn }, React.createElement(Link, { href: '#' }, React.createElement(Img, { src: 'https://facgmgr.stripocdn.email/content/assets/img/social-icons/logo-white/x-logo-white.png', alt: 'X', width: '32', height: '32', style: socialIcon }))),
                React.createElement(Column, { style: socialColumn }, React.createElement(Link, { href: '#' }, React.createElement(Img, { src: 'https://facgmgr.stripocdn.email/content/assets/img/social-icons/logo-white/instagram-logo-white.png', alt: 'Instagram', width: '32', height: '32', style: socialIcon }))),
                React.createElement(Column, { style: socialColumn }, React.createElement(Link, { href: '#' }, React.createElement(Img, { src: 'https://facgmgr.stripocdn.email/content/assets/img/social-icons/logo-white/youtube-logo-white.png', alt: 'YouTube', width: '32', height: '32', style: socialIcon })))
              )
            )
          ),
          React.createElement(Text, { style: footerText }, React.createElement('strong', null, '2025 © Copyright. ', React.createElement('span', { style: brandColor }, 'Rev One Futures'), ', LLC')),
          React.createElement(Text, { style: footerText }, '\u00A0'),
          React.createElement(Text, { style: footerText }, 'DISCLAIMER: Trading Futures involves significant risk and is not suitable for all investors. There is a possibility of losing all or more than your initial investment. Only risk capital - money you can afford to lose without impacting your financial stability or lifestyle - should be used for trading. Individuals without sufficient risk capital should not engage in trading. Past performance is not a reliable indicator of future results.\u00A0'),
          React.createElement(Section, { style: dividerSection },
            React.createElement(Row, null,
              React.createElement(Column, null, React.createElement('div', { style: divider }))
            )
          )
        )
      )
    )
  );
}

// Template data
const templatesData = {
  "templates": [{
    "id": "revone-account-created",
    "name": "Account Created",
    "variables": [
      { "name": "name", "default": "Valued Customer" },
      { "name": "accountLogin", "default": "ACCOUNT123" }
    ],
    "preview": { "name": "John Doe", "accountLogin": "ACCOUNT12345" }
  }]
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { templateId } = req.query;

  if (typeof templateId !== 'string') {
    return res.status(400).send('Invalid template ID');
  }

  const template = templatesData.templates.find((t: any) => t.id === templateId);

  if (!template || templateId !== 'revone-account-created') {
    return res.status(404).send('Template not found');
  }

  try {
    const variables: Record<string, any> = {};
    template.variables.forEach((v: any) => {
      const queryValue = req.query[v.name];
      variables[v.name] = (queryValue && typeof queryValue === 'string') ? queryValue : template.preview[v.name] || v.default;
    });

    const html = await render(React.createElement(RevOneAccountCreated, variables));
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
