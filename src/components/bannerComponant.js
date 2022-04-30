/** @jsx jsx */
import { jsx, Container, Heading } from "theme-ui";
import PatternBG from "assets/banner-2.jpg";

export default function Banner({
  title = "Nos offres de création de",
  accent = "site internet",
}) {
  return (
    <section sx={styles.banner}>
      <Container sx={styles.container}>
        <Heading as="h2" sx={styles.title}>
          {title}
          <span sx={styles.title.accent}> {accent}</span>
        </Heading>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    mt: ["105px", "105px", "100px", "95px", "95px", "95px"],
    pb: [2, null, 0, null, 2, 0, null, 5],
    pt: "150px",
    backgroundColor: "border_color",
    backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: "center right",
    backgroundSize: "cover",
    "@media screen and (max-width:760px)": {
      backgroundImage: "none",
    },
  },

  container: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    "@media screen and (max-width:760px)": {
      display: "block",
      textAlign: "center",
    },
  },

  title: {
    fontSize: ["28px", null, "28px", "30px", "36px", "42px", null, "48px"],
    color: "heading_secondary",
    lineHeight: [1.3, null, null, null, 1.2],
    fontWeight: "700",
    letterSpacing: "-.5px",
    pb: 8,
    accent: {
      color: "accent",
      display: "inherit",
    },
  },
};
