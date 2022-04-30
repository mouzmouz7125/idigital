import { FaFacebook, FaTwitter, FaGithub, FaDribbble } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";

export default [
  {
    header: "Liens rapides ",
    items: [
      {
        path: "/",
        label: "Accueil",
      },
      {
        path: "/prix-creation-site-internet",
        label: "Nos tarifs",
      },
      {
        path: "/",
        label: "Conditions Générales De Ventes",
      },
      {
        path: "/contact",
        label: "Contact",
      },
    ],
  },
  {
    header: "Contact",
    items: [
      {
        path: "/",
        label: "Facebook",
        name: "facebook",
        icon: <FaFacebook />,
      },
      {
        path: "tel:+212625793029",
        label: "+212625793029",
        name: "phone",
        icon: <AiOutlinePhone />,
      },
      {
        path: "mailto:info@i-digital.org",
        label: "info@i-digital.org",
        name: "email",
        icon: <AiOutlineMail />,
      },
      {
        path: "/#",
        label:
          "Adresse :Rés. les Jardins Oulfa, Imm 1, N° 5 – El Oulfa Casablanca",
        name: "location",
        icon: <GoLocation />,
      },
    ],
  },
];
