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
import * as React from 'react';
import { getImageUrl } from '../config/constants';

interface RevOneAccountCreatedProps {
  name?: string;
  accountLogin?: string;
}

export default function RevOneAccountCreated({
  name = 'Valued Customer',
  accountLogin = 'ACCOUNT123',
}: RevOneAccountCreatedProps) {
  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Body style={main}>
        <Container style={container}>
          {/* Header Section - Logo */}
          <Section style={headerSection}>
            <Img
              src={getImageUrl('/static/images/Logo Alternative.png')}
              width="400"
              alt="RevOne Futures Logo"
              style={logo}
            />
          </Section>

          {/* Title Section */}
          <Section style={titleSection}>
            <Heading style={titleHeading}>
              RevOne Futures: Your Simulated Funded Account Has Been Created
            </Heading>
          </Section>

          {/* Body Content */}
          <Section style={bodySection}>
            <Text style={bodyText}>
              <strong>Hi {name},</strong>
            </Text>
            <Text style={bodyText}>&nbsp;</Text>
            <Text style={bodyText}>
              Your <span style={brandColor}>RevOne Futures</span> account,{' '}
              {accountLogin} is now active and ready for use.
            </Text>
            <Text style={bodyText}>&nbsp;</Text>
            <Text style={bodyText}>
              You can find your Tradovate login credentials at the top of your{' '}
              <span style={brandColor}>RevOne Futures</span> User Dashboard,
              displayed like this:
            </Text>
            <Text style={bodyText}>&nbsp;</Text>
            <Text style={bodyText}>
              Use these credentials to log into Tradovate{' '}
              <Link href="#" style={linkStyle}>
                here
              </Link>
              . Be careful and ensure there are no extra spaces or missing
              characters when entering your login information.
            </Text>
            <Text style={bodyText}>&nbsp;</Text>
            <Text style={bodyText}>
              After logging in, a pop-up for Tradovate's Non-Professional
              Agreement will appear. You must complete this form — do not skip
              it. If you fail to submit the agreement, your market data will be
              delayed, and you could incur a $300 monthly fee. &nbsp;
            </Text>
            <Text style={bodyText}>&nbsp;</Text>
            <Text style={bodyText}>
              Once the agreement is submitted, we'll complete the setup for
              your market data access. Please note that Tradovate's processing
              time may take up to 90 minutes. &nbsp;
            </Text>
            <Text style={bodyText}>&nbsp;</Text>
            <Text style={bodyText}>
              Full throttle,
              <br />
              <strong style={brandColor}>RevOne Futures</strong>
            </Text>
          </Section>

          {/* Footer Section */}
          <Section style={footerSection}>
            {/* Footer Row - Logo and Social Icons */}
            <Row>
              <Column style={footerColumnLeft}>
                <Img
                  src={getImageUrl('/static/images/Logo Alternative.png')}
                  width="140"
                  alt="RevOne Futures Logo"
                  style={footerLogo}
                />
              </Column>
              <Column style={footerColumnRight}>
                <Row>
                  <Column style={socialColumn}>
                    <Link href="#">
                      <Img
                        src="https://facgmgr.stripocdn.email/content/assets/img/social-icons/logo-white/facebook-logo-white.png"
                        alt="Facebook"
                        width="32"
                        height="32"
                        style={socialIcon}
                      />
                    </Link>
                  </Column>
                  <Column style={socialColumn}>
                    <Link href="#">
                      <Img
                        src="https://facgmgr.stripocdn.email/content/assets/img/social-icons/logo-white/x-logo-white.png"
                        alt="X"
                        width="32"
                        height="32"
                        style={socialIcon}
                      />
                    </Link>
                  </Column>
                  <Column style={socialColumn}>
                    <Link href="#">
                      <Img
                        src="https://facgmgr.stripocdn.email/content/assets/img/social-icons/logo-white/instagram-logo-white.png"
                        alt="Instagram"
                        width="32"
                        height="32"
                        style={socialIcon}
                      />
                    </Link>
                  </Column>
                  <Column style={socialColumn}>
                    <Link href="#">
                      <Img
                        src="https://facgmgr.stripocdn.email/content/assets/img/social-icons/logo-white/youtube-logo-white.png"
                        alt="YouTube"
                        width="32"
                        height="32"
                        style={socialIcon}
                      />
                    </Link>
                  </Column>
                </Row>
              </Column>
            </Row>

            {/* Copyright and Disclaimer */}
            <Text style={footerText}>
              <strong>
                2025 © Copyright. <span style={brandColor}>Rev One Futures</span>
                , LLC
              </strong>
            </Text>
            <Text style={footerText}>&nbsp;</Text>
            <Text style={footerText}>
              DISCLAIMER: Trading Futures involves significant risk and is not
              suitable for all investors. There is a possibility of losing all
              or more than your initial investment. Only risk capital - money you
              can afford to lose without impacting your financial stability or
              lifestyle - should be used for trading. Individuals without
              sufficient risk capital should not engage in trading. Past
              performance is not a reliable indicator of future results.&nbsp;
            </Text>
            {/* Divider */}
            <Section style={dividerSection}>
              <Row>
                <Column>
                  <div style={divider}></div>
                </Column>
              </Row>
            </Section>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Styles
const main = {
  backgroundColor: '#F6F6F6',
  fontFamily: 'arial, "helvetica neue", helvetica, sans-serif',
};

const container = {
  backgroundColor: '#FFFFFF',
  width: '600px',
  margin: '0 auto',
};

const headerSection = {
  backgroundColor: '#000000',
  padding: '20px',
  textAlign: 'center' as const,
};

const logo = {
  display: 'block',
  margin: '0 auto',
};

const titleSection = {
  backgroundColor: '#020202',
  padding: '20px',
};

const titleHeading = {
  color: '#FEFDFD',
  fontSize: '16px',
  fontWeight: 'normal',
  lineHeight: '19.2px',
  margin: '0',
  textAlign: 'center' as const,
  letterSpacing: '0',
};

const bodySection = {
  backgroundColor: '#000000',
  padding: '20px',
};

const bodyText = {
  color: '#FEFDFD',
  fontSize: '14px',
  lineHeight: '21px',
  margin: '0',
  letterSpacing: '0',
};

const brandColor = {
  color: '#ED2025',
};

const linkStyle = {
  color: '#ED2025',
  textDecoration: 'none',
};

const footerSection = {
  backgroundColor: '#000000',
  padding: '20px',
};

const footerColumnLeft = {
  width: '270px',
  verticalAlign: 'top' as const,
};

const footerColumnRight = {
  width: '270px',
  verticalAlign: 'top' as const,
};

const footerLogo = {
  display: 'block',
};

const socialColumn = {
  paddingRight: '10px',
  verticalAlign: 'top' as const,
};

const socialIcon = {
  display: 'block',
};

const footerText = {
  color: '#FEFDFD',
  fontSize: '14px',
  lineHeight: '21px',
  margin: '0',
  letterSpacing: '0',
};

const dividerSection = {
  padding: '20px',
};

const divider = {
  borderBottom: '1px solid #CCCCCC',
  height: '0px',
  width: '100%',
  margin: '0',
};

