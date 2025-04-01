import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

const baseUrl = "https://www.lendimmopme.com/";

// Define a proper interface for the form data
interface InvestirFormData {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  investAmount?: string;
  projectTitle?: string;
  projectId?: string;
}

export default function InvestirEmail({
  formData,
}: {
  formData: InvestirFormData;
}) {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Preview>Votre demande d&apos;investissement a bien été reçue</Preview>
        <Container style={container}>
          <Text style={paragraph}>
            Bonjour {formData?.firstName || ""} {formData?.lastName || ""},
          </Text>
          <Text style={paragraph}>
            Nous avons bien reçu votre demande d&apos;investissement sur
            LendImmoPME pour le projet &quot;{formData?.projectTitle}&quot;.
            Notre équipe va traiter votre demande dans les plus brefs délais.
          </Text>
          <Text style={paragraph}>
            Montant d&apos;investissement: {formData?.investAmount} €
          </Text>
          <Text style={paragraph}>
            Nous vous contacterons prochainement pour finaliser votre
            investissement.
          </Text>
          <Section style={btnContainer}>
            <Button
              style={button}
              href={`${baseUrl}/investir/${formData?.projectId}`}
            >
              Voir le projet
            </Button>
          </Section>
          <Text style={paragraph}>
            Merci,
            <br />
            L&apos;équipe LendImmoPME
          </Text>
          <Hr style={hr} />
          <Text style={footer}>Tous droits réservés © 2023 LendImmoPME</Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#7224D1",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
