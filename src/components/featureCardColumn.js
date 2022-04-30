/** @jsx jsx */
import { jsx, Image, Box, Heading, Text } from "theme-ui";
import { keyframes } from "@emotion/core";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function FeatureCardColumn({
  src,
  altText = "default alt text",
  title,
  text,
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
    <motion.Box ref={ref} animate={controls} sx={styles.card}>
      <Box sx={styles.imgWrapper}>
        <Image src={src} alt={altText} sx={styles.imgWrapper.img} />
        <Box sx={styles.imgWrapper.pluse} />
      </Box>
      <Box sx={styles.wrapper}>
        <Heading sx={styles.wrapper.title}>{title}</Heading>
        <Text sx={styles.wrapper.subTitle}>{text}</Text>
      </Box>
    </motion.Box>
  );
}

const playPluse = keyframes`
  from {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
    opacity: 0.5;
  }

  to {
	transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);
    opacity: 0;
  }
`;

const styles = {
  card: {
    display: "flex",
    alignItems: ["center", "flex-start"],
    flexDirection: "column",
    mb: -1,
    textAlign: ["center", null, "left"],
    px: [4, 2, 5],
    py: [2, 2, 3],
    backgroundColor: "secondary",
    borderRadius: "10px",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    zIndex: -2,
  },
  imgWrapper: {
    mx: "auto",
    my: 2,
    position: "relative",
    width: ["80px", null, null, "90px", "90px", "90px"],
    height: ["80px", null, null, "90px", "90px", "90px"],
    img: {
      width: "100%",
      height: "100%",
      mx: "auto",
      objectFit: "scale-down",
      backgroundColor: "white",
      borderRadius: "50%",
    },
    pluse: {
      position: "absolute",
      top: 0,
      left: 0,
      left: "50%",
      top: "50%",
      zIndex: -1,
      transform: "translate(-50%, -50%)",
      width: "100%",
      height: "100%",
      backgroundColor: "white",
      borderRadius: "50%",
      opacity: 0.3,
      animation: `${playPluse} 1.5s ease-out infinite`,
    },
  },

  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    title: {
      fontSize: 4,
      color: "heading_secondary",
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, 3],
    },
    subTitle: {
      fontSize: 1,
      fontWeight: 500,
      lineHeight: "1.9",
    },
  },
};
