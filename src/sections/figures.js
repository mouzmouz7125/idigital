/** @jsx jsx */
import { jsx, Container, Box, Heading } from "theme-ui";
import Image from "components/image";

import FiguresThumb from "assets/figures-thumb.png";
import FiguresCounter from "components/figuresCounter";

export default function Figures() {
  return (
    <section sx={{ variant: "section.figures" }}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.thumbnail}>
          <Image src={FiguresThumb} alt="Thumbnail" />
        </Box>
        <Box sx={styles.contentBox}>
          <Heading sx={styles.title}>
            Notre
            <span sx={styles.title.accent}> agence </span>
            en chiffre
          </Heading>
          <FiguresCounter />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  containerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: ["column", "column", "column", "column", "row"],

    flexWrap: ["wrap", null, null, "nowrap"],
    pb: [0, 7, 0, null, 7],
  },
  contentBox: {
    flex: 1,
    textAlign: ["center", null, null, "left"],
    width: ["100%", "100%", "100%", "100%", 485, 485, 485],
    pb: ["50px", "60px", null, 0],
    mt: 8,

    mx: "auto",
    ml: ["auto", "auto", "auto", "auto", 4],
    textAlign: "center",
  },
  thumbnail: {
    display: "inline-flex",
    position: "relative",
    mx: "auto",
    height: ["300px", "500px"],
    width: ["auto", "100%", "100%", "100%", "50%"],

    "> img": {
      position: "relative",
      zIndex: 1,
      height: [310, "auto"],
      objectFit: "contain",
    },
  },
  shapeBox: {
    position: "absolute",
    bottom: -65,
    right: -165,
    zIndex: -1,
    display: ["none", "inline-block", "none", null, "inline-block"],
  },
  title: {
    fontSize: 8,
    mb: 7,
    accent: {
      color: "accent",
    },
  },
};
