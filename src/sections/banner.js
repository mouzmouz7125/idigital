/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Box, Heading, Text, Image, Button } from "theme-ui";
import BannerImg from "assets/banner-thumb.png";
import BannerBG from "assets/bannerbg.png";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Banner() {
  const container = {
    hidden: { x: -500, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeIn" },
    },
  };
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <motion.Box
          variants={container}
          initial="hidden"
          animate="show"
          sx={styles.banner.contentBox}
        >
          <Heading as="h1" variant="heroPrimary">
            Création de site internet
            <span sx={styles.title.accent}> pas cher</span>
          </Heading>
          <Text as="p" sx={styles.banner.contentBox.p}>
            Nous créons des sites internet PREMIUM équipés d'un espace
            d'administration ergonomique, optimisés pour le référencement
            naturel et compatibles avec les mobiles et les tablettes
          </Text>
          <Button variant="primary">
            <Link href="/contact">Je veux le mien !</Link>
          </Button>
        </motion.Box>

        <Box sx={styles.banner.imageBox}>
          <Image src={BannerImg} alt="banner" />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    pt: ["70px", "80px", "90px", "100px", null, null, "120px", "120px"],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: "relative",
    zIndex: 2,

    "&::after": {
      position: "absolute",
      content: '""',
      bottom: "0px",
      right: 0,
      height: "100%",
      width: "100%",
      zIndex: -1,
      backgroundImage: `url(${BannerBG})`,
      backgroundRepeat: `no-repeat`,
    },
    container: {
      minHeight: "inherit",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-end",
      flexDirection: ["column", "column", "column", "column", "row"],
    },
    contentBox: {
      width: ["100%", "90%", "535px", null, "57%", "60%", "68%", "60%"],
      mx: "auto",
      mt: 8,
      textAlign: "left",
      mb: ["40px", null, null, null, null, 7],
      pb: 5,
      p: {
        mb: 5,
        fontSize: 3,
        fontWeight: 500,
      },
    },

    imageBox: {
      justifyContent: "center",
      textAlign: "center",
      display: "inline-flex",
      mb: [0, null, -6, null, null, "-40px", null, -3],
      img: {
        position: "relative",
        height: ["auto"],
        width: ["100%", "90%", "87%", "80%", "68%", "80%"],
      },
    },
  },
  title: {
    fontSize: ["28px", null, "28px", "30px", "36px", "42px", null, "48px"],
    lineHeight: [1.3, null, null, null, 1.2],
    fontWeight: "700",
    letterSpacing: "-.5px",
    mb: 8,
    accent: {
      color: "accent",
    },
  },
};
