import React from "react";
/** @jsx jsx */
import { jsx, Container, Box, Grid, Text, Heading, Image } from "theme-ui";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
// img
import ServiceThumb from "assets/service-thumb.png";
import Stats from "assets/services/stats.png";
import Responsive from "assets/services/responsive.png";
import Dynamic from "assets/services/dynamic.png";
import Ssl from "assets/services/ssl.png";
import Code from "assets/services/code.png";
import Settings from "assets/services/settings.png";
import ServiceCardColumn from "components/serviceCardColumn copy";

const data = {
  features: [
    {
      id: 1,
      imgSrc: Stats,
      altText: "Statistiques de visiteurs",
      title: "Statistiques de visiteurs",
    },
    {
      id: 2,
      imgSrc: Responsive,
      altText: "Design responsive",
      title: "Design responsive",
    },
    {
      id: 3,
      imgSrc: Ssl,
      altText: "Site securisé en SSL",
      title: "Site securisé en SSL",
    },
    {
      id: 4,
      imgSrc: Dynamic,
      altText: "Site internet dynamique",
      title: "Site internet dynamique",
    },
    {
      id: 5,
      imgSrc: Code,
      altText: "Code optimisé SEO",
      title: "Code optimisé SEO",
    },
    {
      id: 6,
      imgSrc: Settings,
      altText: "Aucune limite de pages",
      title: "Aucune limite de pages",
    },
  ],
};

export default function ServiceSection() {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,

        transition: { duration: 0.5, delay: i * 0.2, ease: "easeIn" },
      });
    }
    if (!inView) {
      controls.start({
        opacity: 0,
        y: -50,
      });
    }
  }, [inView]);
  return (
    <section sx={{ variant: "section.services" }}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.thumbnail}>
          <Image src={ServiceThumb} alt="services" />
        </Box>
        <Box sx={styles.contentBox}>
          <Box sx={styles.contentBox.wrapper}>
            <Heading as="h2" sx={styles.contentBox.wrapper.title}>
              Nos points{" "}
              <span sx={styles.contentBox.wrapper.title.accent}>forts</span>
            </Heading>
            <Text as="p" sx={styles.contentBox.wrapper.subTitle}>
              Découvrez ce qui rend Idigital une agence hors du commun
            </Text>
          </Box>
          <Grid sx={styles.grid}>
            {data.features.map((item, i) => (
              <ServiceCardColumn
                key={item.id}
                src={item.imgSrc}
                title={item.title}
                i={i}
              />
            ))}
          </Grid>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  coreFeature: {
    py: [0, null, null, 2, null, 7],
    position: "relative",
  },
  containerBox: {
    py: [3, 4, 5, 6, 7, 7],

    display: "flex",
    alignItems: ["flex-start", null, null, "center"],
    justifyContent: ["flex-start", null, null, "space-between"],
    flexDirection: ["column", null, null, "row"],
    pb: [0, null, null, null, null, 7],
  },
  thumbnail: {
    mr: ["auto", null, null, 6, 60, 85],
    order: [2, null, null, 0],
    ml: ["auto", "auto", null, 0],
    display: "inline-flex",
    position: "relative",
    "> img": {
      position: "relative",
      zIndex: 1,

      height: [310, "auto"],
    },
  },

  contentBox: {
    width: ["100%", null, null, 315, 390, 450, null, 500],
    flexShrink: 0,
    mb: [7, null, 60, 0],
    textAlign: ["center", null, null, "left"],
    wrapper: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      mt: -1,
      subTitle: {
        fontSize: [0, 0, 0],
        textTransform: "uppercase",
        fontWeight: "700",
        mb: [2, 3],
        lineHeight: 1.5,
        letterSpacing: ["1.5px", null, "2px"],
      },
      title: {
        fontSize: ["24px", null, "28px", "30px", "36px", "42px", null, "48px"],
        color: "heading_secondary",
        lineHeight: [1.3, null, null, null, 1.2],
        fontWeight: "700",
        letterSpacing: "-.5px",
        mb: 5,
        accent: {
          color: "accent",
        },
      },
    },
  },
  grid: {
    py: [3, null, null, null, 3],
    mx: "auto",
    width: ["100%", 370, 420, "100%"],
    gridGap: ["35px 0", null, null, null, "50px 0"],
    gridTemplateColumns: ["repeat(1,1fr)", "repeat(2,1fr)"],
  },
};
