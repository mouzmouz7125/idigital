/** @jsx jsx */
import { jsx, Container, Box, Heading, Text, Button } from "theme-ui";
import { keyframes } from "@emotion/core";
import React from "react";
import Carousel from "react-multi-carousel";
import PriceCard from "components/priceCard";
import ButtonGroup from "components/button-group";
import { IoIosCheckmarkCircle, IoIosCloseCircle } from "react-icons/io";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const packages = [
  {
    id: 1,
    name: "Pack intégral    ",
    priceWithUnit: "7500 Dhs",
    isRecommended: true,
    points: [
      {
        id: 1,
        icon: <IoIosCheckmarkCircle />,
        text: "Identité visuelle : Logo, charte graphique et carte de visite.        ",
        isAvailable: true,
      },
      {
        id: 2,
        icon: <IoIosCheckmarkCircle />,
        text: "Site web vitrine dynamique et évolutif        ",
        isAvailable: true,
      },
      {
        id: 3,
        icon: <IoIosCheckmarkCircle />,
        text: "Interface d’administration intuitive ",
        isAvailable: true,
      },
      {
        id: 4,
        icon: <IoIosCheckmarkCircle />,
        text: "Design responsive & moderne ",
        isAvailable: true,
      },
      {
        id: 5,
        icon: <IoIosCheckmarkCircle />,
        text: "Pages web illimitées ",
        isAvailable: true,
      },
      {
        id: 6,
        icon: <IoIosCheckmarkCircle />,
        text: "Nom de domaine offert        ",
        isAvailable: true,
      },
      {
        id: 7,
        icon: <IoIosCheckmarkCircle />,
        text: "Hébergement inclus ( 1an )        ",
        isAvailable: true,
      },
      {
        id: 8,
        icon: <IoIosCheckmarkCircle />,
        text: "Certificat SSL ( Site web sécurisé )        ",
        isAvailable: true,
      },
      {
        id: 9,
        icon: <IoIosCheckmarkCircle />,
        text: "Code optimisé SEO ",
        isAvailable: true,
      },
      {
        id: 10,
        icon: <IoIosCheckmarkCircle />,
        text: "Formulaire de contact ",
        isAvailable: true,
      },
      {
        id: 11,
        icon: <IoIosCheckmarkCircle />,
        text: "Intégration de Google Map",
        isAvailable: true,
      },
      {
        id: 12,
        icon: <IoIosCheckmarkCircle />,
        text: "5 comptes mail professionnels ",
        isAvailable: true,
      },
      {
        id: 13,
        icon: <IoIosCloseCircle />,
        text: "Fonctions E-commerce ",
        isAvailable: false,
      },
      {
        id: 14,
        icon: <IoIosCheckmarkCircle />,
        text: "Garantie 2 ans MAJ / DEV",
        isAvailable: true,
      },
      {
        id: 15,
        icon: <IoIosCheckmarkCircle />,
        text: "Rapports des statistiques et analyses",
        isAvailable: true,
      },
      {
        id: 16,
        icon: <IoIosCheckmarkCircle />,
        text: "Formation sur l’utilisation du CMS",
        isAvailable: true,
      },
      {
        id: 17,
        icon: <IoIosCheckmarkCircle />,
        text: "Création des présences sur Facebook et Instagram  ",
        isAvailable: true,
      },
      {
        id: 18,
        icon: <IoIosCheckmarkCircle />,
        text: "1 Mois de gestion des réseaux sociaux        ",
        isAvailable: true,
      },
    ],
  },
  {
    id: 2,
    name: "Pack e-commerce ",
    priceWithUnit: "10.500 Dhs    ",
    points: [
      {
        id: 1,
        icon: <IoIosCheckmarkCircle />,
        text: "Identité visuelle : Logo, charte graphique et carte de visite.        ",
        isAvailable: true,
      },
      {
        id: 2,
        icon: <IoIosCheckmarkCircle />,
        text: "Site web vitrine dynamique et évolutif        ",
        isAvailable: true,
      },
      {
        id: 3,
        icon: <IoIosCheckmarkCircle />,
        text: "Interface d’administration intuitive ",
        isAvailable: true,
      },
      {
        id: 4,
        icon: <IoIosCheckmarkCircle />,
        text: "Design responsive & moderne ",
        isAvailable: true,
      },
      {
        id: 5,
        icon: <IoIosCheckmarkCircle />,
        text: "Pages web illimitées ",
        isAvailable: true,
      },
      {
        id: 6,
        icon: <IoIosCheckmarkCircle />,
        text: "Nom de domaine offert        ",
        isAvailable: true,
      },
      {
        id: 7,
        icon: <IoIosCheckmarkCircle />,
        text: "Hébergement inclus ( 1an )        ",
        isAvailable: true,
      },
      {
        id: 8,
        icon: <IoIosCheckmarkCircle />,
        text: "Certificat SSL ( Site web sécurisé )        ",
        isAvailable: true,
      },
      {
        id: 9,
        icon: <IoIosCheckmarkCircle />,
        text: "Code optimisé SEO ",
        isAvailable: true,
      },
      {
        id: 10,
        icon: <IoIosCheckmarkCircle />,
        text: "Formulaire de contact ",
        isAvailable: true,
      },
      {
        id: 11,
        icon: <IoIosCheckmarkCircle />,
        text: "Intégration de Google Map",
        isAvailable: true,
      },
      {
        id: 12,
        icon: <IoIosCheckmarkCircle />,
        text: "5 comptes mail professionnels ",
        isAvailable: true,
      },
      {
        id: 13,
        icon: <IoIosCheckmarkCircle />,
        text: "Fonctions E-commerce ",
        isAvailable: true,
      },
      {
        id: 14,
        icon: <IoIosCheckmarkCircle />,
        text: "Garantie 2 ans MAJ / DEV",
        isAvailable: true,
      },
      {
        id: 15,
        icon: <IoIosCheckmarkCircle />,
        text: "Rapports des statistiques et analyses",
        isAvailable: true,
      },
      {
        id: 16,
        icon: <IoIosCheckmarkCircle />,
        text: "Formation sur l’utilisation du CMS",
        isAvailable: true,
      },
      {
        id: 17,
        icon: <IoIosCheckmarkCircle />,
        text: "Création des présences sur Facebook et Instagram  ",
        isAvailable: true,
      },
      {
        id: 18,
        icon: <IoIosCheckmarkCircle />,
        text: "1 Mois de gestion des réseaux sociaux        ",
        isAvailable: true,
      },
    ],
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    draggable: false,
  },
  tablet: {
    breakpoint: { max: 1023, min: 640 },
    items: 2,
    draggable: true,
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    draggable: true,
  },
};

export default function Promo() {
  const { ref, inView } = useInView();

  const sliderParams = {
    additionalTransfrom: 0,
    arrows: false,
    autoPlaySpeed: 3000,
    centerMode: false,
    className: "",
    slidesToSlide: 1,
    items: 3,
    containerClass: "carousel-container",
    customButtonGroup: <ButtonGroup />,
    dotListClass: "",
    focusOnSelect: false,
    infinite: false,
    keyBoardControl: false,
    itemClass: "",
    minimumTouchDrag: 80,
    renderButtonGroupOutside: true,
    renderDotsOutside: false,
    responsive: responsive,
    showDots: false,
    sliderClass: "",
  };

  return (
    <section id="promo" sx={{ variant: "section.promo" }}>
      <Container>
        <Box sx={styles.wrapper}>
          <Heading as="h2" sx={styles.wrapper.title}>
            Nos offres de
            <span sx={styles.wrapper.title.accent}> Debut D'année</span>
          </Heading>

          <Text>
            Voulez-vous lancer une nouvelle activité ? Avez-vous besoin d’un
            accompagnement pour la booster et obtenir un meilleur positionnement
            avec un bon rapport qualité prix ?
          </Text>
        </Box>
        <Box
          ref={ref}
          sx={styles.pricingWrapper}
          className={`${inView && "pricing__wrapper"}`}
        >
          <Carousel {...sliderParams}>
            {packages.map((packageData) => (
              <Box sx={styles.pricingItem} key={packageData.id}>
                <PriceCard data={packageData} />
              </Box>
            ))}
          </Carousel>
        </Box>
        <Box sx={styles.bottomWrapper}>
          <Heading as="h2" sx={styles.bottomWrapper.title}>
            Vous hésitez encore ? Contactez-nous pour prendre un rendez-vous.
          </Heading>
          <Button variant="secondary">
            <Link href="/contact"> Appelez nous</Link>
          </Button>
        </Box>
      </Container>
    </section>
  );
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeIn2 = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
		transform: translateY(0);
    opacity: 1;
  }
`;
const styles = {
  pricingWrapper: {
    mb: "-40px",
    mt: "-40px",
    mx: -3,
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    "&.pricing__wrapper .package__card": {
      ".package__header": {
        animation: `${fadeIn} 0.8s ease-in`,
      },
      "ul > li": {
        animation: `${fadeIn2} 0.7s ease-in`,
      },
      ".package__price": {
        animation: `${fadeIn2} 0.9s ease-in`,
      },
      button: {
        animation: `${fadeIn2} 1s ease-in`,
      },
    },
    ".carousel-container": {
      width: "100%",
      "> ul > li ": {
        display: "flex",
      },
    },
    ".button__group": {
      display: ["flex", null, null, null, "none"],
      mb: [4, null, null, null, 0],
    },
  },
  pricingItem: {
    mx: 3,
    display: "flex",
    flexShrink: 0,
    flex: "1 1 auto",
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
  bottomWrapper: {
    textAlign: "center",
    width: ["100%", "90%", "80%", "88%", "80%"],
    mx: "auto",
    mt: 7,
    mb: 5,
    fontWeight: "500",
    title: {
      fontSize: ["28px", null, "28px", "30px", "34px", "34px", null, "38px"],
      color: "heading_secondary",
      lineHeight: [1.3, null, null, null, 1.2],
      fontWeight: "500",
      letterSpacing: "-.5px",
      mb: 5,
    },
  },
  "&.recommended": {
    boxShadow: [null, null, null, "0px 15px 50px rgba(91, 132, 193, 0.1)"],
    button: {
      backgroundColor: "primary",
      color: "white",
    },
  },
};
