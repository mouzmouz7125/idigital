import { Box, Heading, Text } from "theme-ui";
import { FaPlus, FaPercent } from "react-icons/fa";
import { useEffect, useRef } from "react";
import { animate } from "framer-motion";
import { useInView } from "react-intersection-observer";

const data = [
  {
    id: 1,
    desc: "ans d'expérience",
    number: 10,
  },
  {
    id: 2,
    desc: "projets aboutis",
    number: 132,
  },
  {
    id: 3,
    desc: "collaborateurs",
    number: 20,
  },
];

const Counter = ({ to, inView }) => {
  const nodeRef = useRef();
  useEffect(() => {
    const node = nodeRef.current;
    if (inView) {
      const controls = animate(0, to, {
        duration: 1,
        onUpdate(value) {
          node.textContent = value.toFixed(0);
        },
      });
      return () => controls.stop();
    }
  }, [to, inView]);
  return <Heading ref={nodeRef} style={{ fontSize: "32px" }} />;
};

export default function FiguresCounter() {
  const { ref, inView } = useInView();
  return (
    <Box sx={styles.details}>
      {data.map((i) => (
        <Box ref={ref} key={i.id}>
          <Box sx={styles.details.plus}>
            <Counter inView={inView} to={i.number} />
            <FaPlus className="plus" fill="#1b84ed" />
          </Box>
          <Text sx={styles.desc}>{i.desc}</Text>
        </Box>
      ))}
      <Box ref={ref} key={4}>
        <Box sx={styles.details.plus}>
          <Counter inView={inView} to={100} />
          <FaPercent className="plus" fill="#1b84ed" />
        </Box>
        <Text sx={styles.desc}>clients satisfaits</Text>
      </Box>
    </Box>
  );
}

const styles = {
  details: {
    mt: 4,
    display: "flex",
    justifyContent: "space-around",
    width: ["100%", "100%"],
    mx: "auto",
    "& > div": {
      ml: "50px",
    },
    "& > div:first-of-type": {
      ml: "0px",
    },
    "&h1": {
      m: "0",
      p: "0",
    },

    plus: {
      display: "flex",
      alignItems: "start",
      "@media screen and (max-width: 640px)": {
        justifyContent: "center",
      },
    },
    "@media screen and (max-width: 1030px)": {
      "& h2": {
        height: "80px",
      },
    },
    "@media screen and (max-width: 640px)": {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",

      "& > div": {
        mb: "50px",
        ml: "0",
      },
      "& h2": {
        height: "auto",
      },
    },
  },
  title: {
    fontSize: 0,
    fontWeight: 400,
    color: "border_color",
  },
  desc: {
    width: "131px",
  },
};
