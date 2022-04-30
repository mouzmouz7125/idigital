/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import FeatureCardColumn from "components/featureCardColumn.js";
import Fast from "assets/key-feature/fast.png";
import Seo from "assets/key-feature/seo.png";
import Responsive from "assets/key-feature/responsive.png";
import Support from "assets/key-feature/support.png";

const data = [
  {
    id: 1,
    imgSrc: Fast,
    altText: "Fast Performance",
    title: "Livraison rapide",
    text: "Avant la mise en ligne, votre site internet sera parfaitement configuré, optimisé, sécurisé et fonctionnel dans un délai ne dépassant pas 15 jours    .",
  },
  {
    id: 2,
    imgSrc: Seo,
    altText: "seo",
    title: "SEO friendly",
    text: "Nos sites internet sont conçus pour répondre aux préconisations des moteurs de recherche, aussi bien au niveau de leur structure que de leur contenus.",
  },
  {
    id: 3,
    imgSrc: Responsive,
    altText: "responsive web",
    title: "Responsive design",
    text: "Grâce à différents principes et techniques que nous utilisons, nos sites internet offrent une consultation confortable sur des écrans de tailles très différentes.",
  },
  {
    id: 4,
    imgSrc: Support,
    altText: "Customer Support",
    title: "Intérlocuteur direct",
    text: "Un expert qualifié sera votre interlocuteur personnel et direct. Par conséquent, il vous accompagnera durant les différentes étapes, jusqu’à la finalisation de votre site web",
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: "section.keyFeature" }} id="feature">
      <Container>
        <Grid sx={styles.grid}>
          {data.map((item, i) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
              i={i}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: ["100%", "80%", "100%"],
    mx: "auto",
    gridGap: [
      "20px 0",
      null,
      "20px 20px",
      "20px 25px",
      "20px",
      "30px 25px",
      "35px 30px",
    ],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(4,1fr)",
    ],
  },
};
