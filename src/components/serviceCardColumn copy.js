/** @jsx jsx */
import { jsx, Image, Box, Heading, Text } from "theme-ui";
import { keyframes } from "@emotion/core";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function ServiceCardColumn({
  src,
  altText = "service ",
  title,

  i,
}) {
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
    <motion.Box ref={ref} animate={controls} Box sx={styles.card}>
      <Image src={src} alt={altText} sx={styles.img} />
      <Text sx={styles.title}>{title}</Text>
    </motion.Box>
  );
}

const styles = {
  card: {
    display: ["block", "flex"],
    alignItems: "center",
    width: "100%",

    mx: "auto",
    "&:nth-child(2n)": {
      ml: ["auto", 4],
    },
  },

  img: {
    width: ["45px", null, null, null, "55px"],
    height: "auto",
    objectFit: "contain",
    mr: [3, null, null, null, 3],
  },

  title: {
    fontSize: 1,
    color: "heading_secondary",
    lineHeight: 1.4,
    fontWeight: 600,
  },
};
