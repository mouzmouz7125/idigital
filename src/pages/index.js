import React from "react";
import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "../contexts/app/app.provider";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "../sections/banner";
import KeyFeature from "../sections/keyFeature";
import ServiceSection from "../sections/service";
import Figures from "../sections/figures";
import WorkFlow from "../sections/workflow";
import Promo from "../sections/promo";
import Packages from "../sections/packages";
import Dashboard from "sections/dashboard";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO />
          <Banner />
          <KeyFeature />
          <ServiceSection />
          <Promo />
          <WorkFlow />
          <Dashboard />
          <Figures />
          <Packages isTitleVisible={true} />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
