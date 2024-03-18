import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Container,
  Box,
  Typography,
  Button,
  ThemeProvider,
} from "@mui/material";
import ContactAnimation from "../ContactAnimation/ContactAnimation";
import { SectionTitle } from "../../materialStyles/SectionTitle";
import { ContactInput } from "../../materialStyles/ContactInput";
import { buttonTheme } from "../../shared/theme";
import { flex } from "../../shared/variables";
import contact from "../../shared/json/contact.json";
import "../../shared/variables.css";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const form = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  const { register, handleSubmit, formState, reset } = form;
  const { errors } = formState;

  const onSubmit = async (values: FormValues) => {
    try {
      const response = await fetch("http://localhost:5000/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setIsSubmitted(true);
        reset();
      } else {
        console.error("Form submission failed:", response.statusText);
      }
    } catch (error) {
      console.error("Form submission failed:", error);
    }
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        height: "100vh",
        backgroundColor: "var(--green)",
      }}
    >
      <SectionTitle variant="h1" sx={{ color: "var(--offwhite)" }}>
        {contact.contactTitle}
      </SectionTitle>
      <Box sx={{ ...flex, width: "100%", paddingTop: "60px" }}>
        <Typography
          sx={{
            display: "flex",
            justifyContent: "start",
            flexDirection: "column",
            width: "50%",
            fontfamily: "Open Sans, sans serif",
            fontWeight: 800,
            fontSize: "48px",
            color: "var(--offwhite)",
          }}
        >
          <span>{contact.contactText.hire}</span>
          <span>{contact.contactText.recipe}</span>
          <span>{contact.contactText.idea}</span>
          <span>{contact.contactText.message}</span>
        </Typography>
        {/* // ! Style the inputs seperately with styled function, to change color and font size */}

        <Box
          component={"form"}
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            ...flex,
            flexDirection: "column",
            gap: 6,
            width: "35%",
            backgroundColor: "var(--offwhite)",
            padding: "30px 10px",
            borderRadius: "50px",
          }}
        >
          <ContactInput
            sx={{
              width: "80%",
            }}
            label={contact.contactInput.name}
            autoComplete="off"
            InputProps={{
              sx: {
                fontWeight: 600,
                fontFamily: "Open Sans,sans serif",
                color: "var(--fontMainColor)",
              },
            }}
            {...register("name", { required: "Name is required" })}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
          <ContactInput
            sx={{ width: "80%" }}
            label={contact.contactInput.email}
            autoComplete="off"
            InputProps={{
              sx: { fontWeight: 600, fontFamily: "Open Sans,sans serif" },
            }}
            {...register("email", { required: "Email is required" })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <ContactInput
            sx={{ width: "80%" }}
            label={contact.contactInput.message}
            multiline
            rows={4}
            InputProps={{
              sx: { fontWeight: 600, fontFamily: "Open Sans,sans serif" },
            }}
            {...register("message", { required: "Message is required" })}
            error={!!errors.message}
            helperText={errors.message?.message}
          />
          <ThemeProvider theme={buttonTheme}>
            <Button
              type="submit"
              color="green"
              size="medium"
              variant="contained"
              sx={{
                width: "80%",
                fontFamily: "Open Sans, sans serif",
                fontSize: "20px",
                fontWeight: 300,
                color: "var(--offwhite)",
              }}
            >
              {contact.contactBtn}
            </Button>
          </ThemeProvider>
        </Box>
      </Box>
      {isSubmitted && <ContactAnimation text={contact.contactAnimation} />}
    </Container>
  );
};

export default Contact;
