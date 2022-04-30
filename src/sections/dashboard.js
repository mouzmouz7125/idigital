/** @jsxRuntime classic */
/** @jsx jsx */
import { rgba } from "polished";
import { jsx, Box, Container, Image, Heading, Text, Button } from "theme-ui";
import Tabs, { TabPane } from "rc-tabs";
import SectionHeading from "components/sectionHeader";
import TabButton from "components/tabs/tab-button";

// img
import One from "assets/feature/01.png";
import Two from "assets/feature/02.png";
import Three from "assets/feature/03.png";
import Four from "assets/feature/04.png";
import Five from "assets/feature/05.png";
import Admin from "assets/feature/admin.jpg";
import Host from "assets/feature/host.jpg";
import Guarantee from "assets/feature/guarantee.png";
import Mail from "assets/feature/mail.jpg";
import SaveMoney from "assets/feature/savemoney.jpg";

import patternBG from "assets/tab-bg.png";
import Link from "next/link";

const data = [
  {
    id: 1,
    title: "Système d'administration",
    icon: One,
    color: "#fc448c",
    info: {
      image: Admin,
      title: "Système d'administration intuitif",
      description:
        "Votre site vous sera livré avec un panneau de configuration sécurisé, simple et intuitif pour gérer votre contenu web et le mettre à jour en temps réel.",
    },
  },
  {
    id: 2,
    title: "Hébergement",
    icon: Two,
    color: "#70bca4",
    info: {
      image: Host,
      title: "Installation et sécurisation d'hébergement.      ",
      description:
        "Avant la mise en ligne votre site internet, Idigital prépare et sécurise votre hébergement et vous installe gratuitement un certificat SSL.",
    },
  },
  {
    id: 3,
    title: "Garantie",
    icon: Three,
    color: "#ffa42c",
    info: {
      image: Guarantee,
      title: "Garantie 2 ans MAJ / DEV",
      description:
        "La garantie de développement et mise à jour vous permet d'avoir l'assurance que votre site internet est compatible avec les dernières versions des navigateurs internet.",
    },
  },

  {
    id: 4,
    title: "Adresse mail",
    icon: Four,
    color: "#38dcb4",
    info: {
      image: Mail,
      title: "Adresse mail      ",
      description:
        "Profitez avec chaque site web d'un nom de domaine personnalisé pour utiliser une adresse e-mail unique et personnelle. ex: zakaria@idigital.com.",
    },
  },
  {
    id: 5,
    title: "Economisez",
    icon: Five,
    color: "#c241f6",
    info: {
      image: SaveMoney,
      title: "Economisez votre argent",
      description:
        "Nos tarifs actuels sont 10 fois moins chers que les tarifs appliqués par les autres agences digitale, et les agences de création de site internet au Maroc",
    },
  },
];

const Dashboard = () => {
  return (
    <section sx={styles.section}>
      <Container sx={{ variant: "section.keyFeature" }}>
        <Box sx={styles.wrapper}>
          <Heading as="h2" sx={styles.wrapper.title}>
            Ce n'est pas
            <span sx={styles.wrapper.title.accent}> tout</span>
          </Heading>

          <Text sx={styles.wrapper.subtitle}>
            Votre satisfaction est au cœur de nos préoccupations, tous les sites
            internet que nous mettons en ligne sont
          </Text>
        </Box>
        <Tabs sx={styles.dashboardTabs} animated={{ tabPane: true }}>
          {data.map((tab) => (
            <TabPane key={tab.id} tab={<TabButton tab={tab} />}>
              <Box sx={styles.tab}>
                <Image
                  src={tab.info.image}
                  alt={tab.info.title}
                  sx={styles.img}
                />
                <Box sx={styles.tab.wrapper}>
                  <Heading as="h2" sx={styles.tab.wrapper.title}>
                    {tab.info.title}
                  </Heading>
                  <Text as="p" sx={styles.tab.wrapper.subTitle}>
                    {tab.info.description}
                  </Text>
                  <Button
                    variant="primary"
                    style={{ backgroundColor: tab.color, zIndex: "2" }}
                  >
                    <Link href="/contact"> Contact</Link>
                  </Button>
                </Box>
              </Box>
            </TabPane>
          ))}
        </Tabs>
      </Container>
    </section>
  );
};

export default Dashboard;

const styles = {
  section: {
    backgroundColor: rgba("#7141F8", 0.09),
  },

  wrapper: {
    textAlign: "center",
    width: ["100%", "90%", "535px", null, "57%", "60%", "68%", "60%"],
    mx: "auto",
    mb: 7,
    fontWeight: "500",

    title: {
      fontSize: ["28px", null, "28px", "30px", "36px", "42px", null, "48px"],
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
  dashboardTabs: {
    border: 0,
    ".rc-tabs-nav-wrap": {
      justifyContent: "center",
      alignItems: "baseline",
      marginBottom: 8,
      overflow: "unset",
    },
    ".rc-tabs-ink-bar": {
      display: "none",
    },
    ".rc-tabs-tabpane, .rc-tabs-tab-btn": {
      outline: 0,
    },
    ".rc-tabs-nav-list": {
      flexWrap: ["wrap", null, null, "unset"],
      alignItems: "baseline",
      justifyContent: "center",
    },
    ".rc-tabs-tab": {
      backgroundColor: "transparent",
      height: "70px",
      mr: "20px",
      ":nth-of-type(1),:nth-of-type(2)": {
        mb: [4, null, null, 0],
      },
      ":nth-of-type(2)": {
        ml: [1, null, null, 0],
      },
      ":nth-of-type(4)": {
        ml: [2, null, null, 0],
      },
      "+ .rc-tabs-tab": {
        ml: [null, null, null, 4, 8],
      },
    },
    ".rc-tabs-tab-active": {
      backgroundColor: "white",
      fontWeight: [400, null, null, 500],
      boxShadow: "0px 4px 6px rgba(125, 128, 170, 0.08)",
      borderRadius: 5,
      padding: ["10px 10px", null, null, "10px 18px"],
    },
  },
  tab: {
    display: "flex",
    alignItems: "center",
    flexDirection: ["column", "column", "column", "row"],
    justifyContent: ["stretch", "stretch", "stretch", "space-between"],
    p: 5,
    position: "relative",
    backgroundColor: "white",
    borderRadius: "10px",

    "&::after": {
      position: "absolute",
      content: '""',
      right: 0,
      top: 0,
      height: "102% !important",
      width: "100%",
      zIndex: 1,
      backgroundImage: `url(${patternBG})`,
      backgroundRepeat: `no-repeat`,
      backgroundSize: " 550px 350px",
      backgroundPosition: " 100% 115% ",
      borderRadius: "10px",
    },
    wrapper: {
      width: ["100%", "80%", "50%", "50%"],
      display: "flex",
      flexDirection: "column",
      subTitle: {
        fontSize: 2,
        mb: [3, 5],
        lineHeight: 1.5,
        letterSpacing: ["1.5px", null, "2px"],
      },
      title: {
        fontSize: 6,
        color: "heading_secondary",
        lineHeight: [1.3, null, null, null, 1.2],
        fontWeight: "700",
        letterSpacing: "-.5px",
        mb: 5,
      },
      button: {
        width: "150px",
        cursor: "pointer",
        "&:hover": {
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        },
      },
    },
  },

  img: {
    borderRadius: "10px",
  },
};
