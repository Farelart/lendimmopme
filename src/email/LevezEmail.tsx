import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  /* Img, */
  Preview,
  Section,
  Text,
} from "@react-email/components";

const baseUrl = "https://www.lendimmopme.com/";

type LevezFormData = {
  companyName?: string;
  email?: string;
  legalForm?: string;
  siret?: string;
  projectDescription?: string;
};

export default function LevezEmail({ formData }: { formData: LevezFormData }) {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Preview>Votre demande de financement a bien été reçue</Preview>
        <Container style={container}>
          {/* <Img
            src={`${baseUrl}/logo.png`}
            width="150"
            height="50"
            alt="LendImmoPME"
            style={logo}
          /> */}
          <Text style={paragraph}>Bonjour {formData?.companyName || ""},</Text>
          <Text style={paragraph}>
            Nous avons bien reçu votre demande de financement sur LendImmoPME.
            Notre équipe d&apos;experts va étudier votre dossier dans les plus
            brefs délais.
          </Text>
          <Text style={paragraph}>
            Nous vous contacterons sous 48h pour discuter des prochaines étapes.
          </Text>
          <Section style={btnContainer}>
            <Button style={button} href={baseUrl}>
              Découvrir d&apos;autres projets
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

/* const logo = {
  margin: "0 auto",
}; */

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
