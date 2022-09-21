import React from "react";
import { Formik, Form, Field, FastField, ErrorMessage } from "formik";
import * as Yup from "yup";
import Input from "./form/input";
import Error from "./form/error";
import { Box, Button, Container, Text } from "theme-ui";

const ContactForm = () => {
  return (
    <Container sx={styles.container}>
      <Text sx={styles.container.text}>
        Veuillez entrer les détails de votre demande. Un membre de notre équipe
        vous répondra dans les meilleurs délais."
      </Text>
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
          subject: "",
          phone: "",
          success: false,
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required("Ce champ est requis."),
          phone: Yup.string().required("Ce champ est requis."),
          subject: Yup.string().required("Ce champ est requis."),
          email: Yup.string()
            .email("Email invalide")
            .required("Ce champ est requis."),
          message: Yup.string().required("Ce champ est requis."),
        })}
        onSubmit={async (
          { name, email, subject, message, phone },
          { setSubmitting, resetForm, setFieldValue }
        ) => {
          try {
            const data = JSON.stringify({
              name,
              email,
              subject,
              message,
              phone,
            });
            console.log("data", subject);
            const config = {
              "Content-Type": "application/json",
            };

            const response = await fetch(
              "https://api.formium.io/submit/632a3ddcebdd950001ff28d1/contact",
              {
                method: "POST",
                body: data,
                headers: config,
              }
            );
            console.log("rr", response);

            setSubmitting(false);
            setFieldValue("success", true);
            setTimeout(() => resetForm(), 1000);
          } catch (err) {
            setSubmitting(false);
            setFieldValue("success", false);
            alert(`Something went wrong, please try again ${err}`); // eslint-disable-line
          }
        }}
      >
        {({ values, touched, errors, setFieldValue, isSubmitting }) => {
          console.log("er", errors);

          return (
            <Form>
              <Box sx={styles.inputField}>
                <Input
                  as={FastField}
                  type="text"
                  name="name"
                  component="input"
                  aria-label="name"
                  placeholder="Nom *"
                  error={touched.name && errors.name}
                />
                <ErrorMessage component={Error} name="name" />
              </Box>
              <Box sx={styles.inputField}>
                <Input
                  as={FastField}
                  type="text"
                  name="phone"
                  component="input"
                  aria-label="phone"
                  placeholder="Tél*"
                  error={touched.phone && errors.phone}
                />
                <ErrorMessage component={Error} name="phone" />
              </Box>
              <Box sx={styles.inputField}>
                <Input
                  id="email"
                  aria-label="email"
                  component="input"
                  as={FastField}
                  type="email"
                  name="email"
                  placeholder="Email*"
                  error={touched.email && errors.email}
                />
                <ErrorMessage component={Error} name="email" />
              </Box>
              <Box sx={styles.inputField}>
                <Input
                  id="subject"
                  aria-label="subject"
                  component="input"
                  as={FastField}
                  type="text"
                  name="subject"
                  placeholder="Sujet*"
                  error={touched.subject && errors.subject}
                />
                <ErrorMessage component={Error} name="subject" />
              </Box>
              {
                <Box sx={styles.inputField}>
                  <Field
                    as="textarea"
                    className={`${
                      errors.message ? "text__area error" : "text__area"
                    }`}
                    aria-label="message"
                    id="message"
                    rows="8"
                    name="message"
                    placeholder="Votre Message*"
                    error={touched.message && errors.message}
                  />
                  <ErrorMessage component={Error} name="message" />
                </Box>
              }

              {values.success && (
                <Box sx={styles.inputField}>
                  <Box sx={styles.center}>
                    <h4>
                      Votre message a été envoyé avec succès, je reviendrai vers
                      vous dès que possible!
                    </h4>
                  </Box>
                </Box>
              )}
              <Box sx={styles.buttonWrapper}>
                <Button sx={styles.button}>Envoyer</Button>
              </Box>
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
};

const styles = {
  container: {
    my: [20, 10],
    width: ["100%", "95%", "80%", "60%"],
    text: {
      width: ["100%", "95%", "80%", "60%"],
      mx: "auto",
      fontWeight: 500,
      textAlign: "center",
      colo: "text_secondary",
      mb: 5,
    },
  },
  inputField: {
    position: "relative",
    marginBottom: "1rem",
    ".error": {
      borderColor: "  #ff4136 !important",
      borderWidth: "  1px !important",
    },
    ".text__area": {
      width: " 100%",
      boxSizing: "border-box",
      border: "2px solid ",
      borderColor: "accent",
      padding: " 0.8rem 1rem",
      borderRadius: "7px",
      marginBottom: "0.5rem",
      transition: "0.3s",
      outlineColor: "accent",
      "&:focus": {
        borderColor: "primary",
        boxShadow: "0 0 0 2px primary",
        outline: "none",
      },
      "&:placeholder": {
        color: "#a7a7a7",
      },
      "&:focus": {
        "&:focus": {
          borderColor: "primary",
          boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
          outline: "none",
        },
      },
      "&:placeholder-shown": {
        fontSize: 2,
      },
    },
  },
  buttonWrapper: {
    "@media screen and (max-width: 640px)": {
      textAlign: "center",
    },
    button: {
      mt: 0,
      display: "block",
      textDecoration: "none",
      color: "white",
      fontSize: ["16px", null, null, 2],
      letterSpacings: "-0.15px",
      lineHeight: 1.2,
      fontWeight: 500,
      letterSpacings: "-0.15px",
      padding: ["12px 20px", null, "15px 30px"],
      "@media screen and (max-width: 640px)": {
        width: "80%",
        mx: "auto",
      },
    },
  },
};

export default ContactForm;
