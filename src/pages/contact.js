import React from "react";
import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "../contexts/app/app.provider";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "components/bannerComponant";
import ContactForm from "components/contactForm";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO />
          <Banner title="Contactez Notre " accent="Agence Digitale" />

          <ContactForm />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
