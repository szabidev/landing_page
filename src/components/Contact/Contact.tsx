import { useState } from "react";
import { useForm } from "react-hook-form";
import { Container, Button, ThemeProvider } from "@mui/material";
import { SectionTitle } from "../../materialStyles/SectionTitle";
import { ContactDescription } from "../../materialStyles/ContactDescription";
import { ContactBox } from "../../materialStyles/ContactBox";
import { ContactInput } from "../../materialStyles/ContactInput";
import ContactAnimation from "../ContactAnimation/ContactAnimation";
import { buttonTheme } from "../../shared/theme";
import { FormBox } from "../../materialStyles/FormBox";
import "../../shared/variables.css";
import contact from "../../shared/json/contact.json";

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
        minHeight: "100vh",
        backgroundColor: "var(--green)",
        paddingBottom: "160px",
      }}
    >
      <SectionTitle variant="h1" sx={{ color: "var(--offwhite)" }}>
        {contact.contactTitle}
      </SectionTitle>
      <ContactBox>
        <ContactDescription>
          <span>{contact.contactText.hire}</span>
          <span>{contact.contactText.recipe}</span>
          <span>{contact.contactText.idea}</span>
          <span>{contact.contactText.message}</span>
        </ContactDescription>
        <FormBox component={"form"} onSubmit={handleSubmit(onSubmit)}>
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
        </FormBox>
      </ContactBox>
      {isSubmitted && <ContactAnimation text={contact.contactAnimation} />}
    </Container>
  );
};

export default Contact;
