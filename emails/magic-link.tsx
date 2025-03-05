import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface MagicLinkEmailProps {
  magicLink?: string;
}

export const MagicLinkEmail = ({ magicLink }: MagicLinkEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Your magic link to sign in to Invoice App</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Welcome to Invoice App</Heading>
          <Text style={text}>Hello,</Text>
          <Text style={text}>
            Please click the button below to sign in to your account. This link
            will expire in 10 minutes.
          </Text>
          <Section style={buttonContainer}>
            <Button style={shadcnButton} href={magicLink}>
              Sign in
            </Button>
          </Section>

          <Text style={text}>
            If you didn't request this email, you can safely ignore it.
          </Text>
          <Text style={text}>
            If the button above doesn't work, paste this link into your browser:
          </Text>
          <Text style={link}>
            <Link
              href={magicLink}
              style={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {magicLink}
            </Link>
          </Text>
          <Section style={footer}>
            <Text style={footerText}>
              © {new Date().getFullYear()} Invoice App. All rights reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default MagicLinkEmail;

// Styles
const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
  padding: "60px 0",
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #e6ebf1",
  borderRadius: "5px",
  boxShadow: "0 5px 10px rgba(20, 50, 70, 0.2)",
  margin: "0 auto",
  maxWidth: "600px",
  padding: "20px",
};

const h1 = {
  color: "#1f2937",
  fontSize: "24px",
  fontWeight: "600",
  lineHeight: "1.4",
  margin: "0 0 15px",
  textAlign: "center" as const,
};

const text = {
  color: "#4b5563",
  fontSize: "16px",
  lineHeight: "1.6",
  margin: "16px 0",
};

const buttonContainer = {
  margin: "30px 0",
  textAlign: "center" as const,
  width: "100%",
};

const shadcnButton = {
  backgroundColor: "#0f172a",
  borderRadius: "6px",
  border: "1px solid #0f172a",
  color: "#ffffff",
  cursor: "pointer",
  display: "inline-block",
  fontSize: "14px",
  fontWeight: "500",
  lineHeight: "1",
  margin: "0",
  padding: "10px 16px",
  textAlign: "center" as const,
  textDecoration: "none",
  msoLineHeightRule: "exactly",
  msoTextRaise: "15px",
  WebkitTextSizeAdjust: "none",
  width: "50%",
};

const button = {
  backgroundColor: "#3b82f6",
  borderRadius: "5px",
  color: "#fff",
  display: "inline-block",
  fontSize: "16px",
  fontWeight: "600",
  textDecoration: "none",
  textAlign: "center" as const,
  width: "auto",
};

const link = {
  color: "#3b82f6",
  display: "block",
  fontSize: "14px",
  marginBottom: "16px",
  textDecoration: "underline",
  wordBreak: "break-all" as const,
};

const footer = {
  borderTop: "1px solid #e6ebf1",
  margin: "32px 0 0",
  paddingTop: "32px",
};

const footerText = {
  color: "#6b7280",
  fontSize: "12px",
  lineHeight: "1.5",
  textAlign: "center" as const,
};
