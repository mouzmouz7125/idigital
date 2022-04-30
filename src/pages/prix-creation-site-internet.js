import React from "react";
import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "../contexts/app/app.provider";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "components/bannerComponant";
import Packages from "../sections/packages";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout externalPage>
          <SEO />
          <Banner />
          <Packages isTitleVisible={false} />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
