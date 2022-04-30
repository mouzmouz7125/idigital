/** @jsx jsx */
import { jsx, Box, Text, Container } from "theme-ui";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";

const TopBar = () => {
  return (
    <Box as="section" sx={styles.topbar}>
      <Container>
        <Text sx={styles.content}>
          <Text className="caption phone">
            <AiOutlinePhone /> +212625793029
          </Text>
          <Text className="caption border"></Text>

          <Text className="caption email">
            <AiOutlineMail /> info@i-digital.org
          </Text>
        </Text>
      </Container>
    </Box>
  );
};

export default TopBar;

const styles = {
  topbar: {
    backgroundColor: "#0454A1",
    px: [1, null, null, null, 0],
    py: ["12px"],
  },
  content: {
    display: ["flex"],
    alignItems: ["center"],
    justifyContent: ["center", "center", "center", "flex-start", "flex-start"],
    color: "white",
    fontSize: [1],
    fontWeight: 400,
    textAlign: "left",
    width: ["100%"],

    ".border": {
      borderRight: "1px solid #E5ECF4",
      height: "24px",
      mx: "20px",
      "@media screen and (max-width:370px)": {
        mx: "10px",
      },
    },

    ".caption": {
      display: "inline-flex",
      alignItems: "center",

      "@media screen and (max-width:370px)": {
        // fontSize: [0],
      },

      svg: {
        minWidth: 20,
      },
    },
  },
};
