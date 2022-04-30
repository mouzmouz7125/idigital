/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid, Box, Heading, Image } from "theme-ui";
import SectionHeader from "components/sectionHeader";

import PatternBG from "assets/patternBG.png";
import ArrowOdd from "assets/arrowOdd.svg";
import ArrowEven from "assets/arrowEven.svg";
import One from "assets/workflow/one.png";
import Two from "assets/workflow/two.png";
import Three from "assets/workflow/three.png";
import Four from "assets/workflow/four.png";

const data = [
  {
    id: 1,
    img: One,
    title: "Comprendre & Proposer",
  },
  {
    id: 2,
    img: Two,
    title: "Concevoir & donner du sens",
  },
  {
    id: 3,
    img: Three,
    title: "Innover & Adapter",
  },
  {
    id: 4,
    img: Four,
    title: "Analyser & Optimiser",
  },
];

export default function WorkFlow() {
  return (
    <section sx={styles.workflow}>
      <Container>
        <SectionHeader
          slogan="En 4 approches"
          title="NOS ÉTAPES CLÉS"
          isWhite={true}
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <Box sx={styles.card} key={item.id}>
              <Box sx={styles.iconBox}>
                <Image src={item.img} alt={item.title} />
              </Box>
              <Box sx={styles.wrapper}>
                <Heading sx={styles.wrapper.title}>{item.title}</Heading>
              </Box>
            </Box>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  workflow: {
    backgroundColor: "primary",
    backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    position: "relative",
    py: [8, null, 9, null, null, 10],
  },
  grid: {
    mb: -1,
    pt: 0,
    gridGap: [
      "35px 0",
      null,
      "45px 30px",
      null,
      "50px 25px",
      null,
      null,
      "50px 65px",
    ],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(4,1fr)",
    ],
  },
  card: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    position: "relative",
    textAlign: ["center", null, "left"],
    width: ["100%", "80%", "100%"],
    mx: ["auto"],
    px: [4, null, null, 0],
    "&::before": {
      position: "absolute",
      content: '""',
      top: 4,
      left: [0, null, null, null, null, 150, 150, 150],
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "center center",
      width: 215,
      zIndex: 0,
      height: 60,
      "@media screen and (max-width:1220px)": {
        display: "none",
      },
    },
    "&:nth-of-type(2n-1)::before": {
      backgroundImage: `url(${ArrowOdd})`,
    },
    "&:nth-of-type(2n)::before": {
      backgroundImage: `url(${ArrowEven})`,
      top: 40,
    },
    "&:last-child::before": {
      display: "none",
    },
  },

  iconBox: {
    zIndex: 1,
    width: ["70px", null, "90px", null, null, "122px"],
    height: ["70px", null, "90px", null, null, "122px"],
    flexShrink: 0,
    borderRadius: "50%",
    backgroundColor: "white",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
    display: "flex",
    alignItems: "center",
    mb: [5, null, null, null, null, 6],
    mx: ["auto", null, 0],
    fontSize: [6, null, 7, null, null, "30px"],
    fontWeight: 700,
    justifyContent: "center",
    color: "#234582",
  },
  wrapper: {
    width: "100%",
    textAlign: "center",
    mt: "-5px",
    title: {
      fontSize: [3, null, 4, null, null, 5],
      color: "white",
      lineHeight: [1.4, null, null, null, null, 1.55],
      pr: [0, null, null, null, null, 2],
      mb: [2, 3],
    },
  },
};
