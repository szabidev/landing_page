import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Container,
  Button,
  ThemeProvider,
  useMediaQuery,
  Alert,
  Collapse,
} from "@mui/material";
import { SectionTitle } from "../../materialStyles/SectionTitle";
import { ContactDescription } from "../../materialStyles/ContactDescription";
import { ContactBox } from "../../materialStyles/ContactBox";
import { ContactInput } from "../../materialStyles/ContactInput";
import ContactAnimation from "../ContactAnimation/ContactAnimation";
import { buttonTheme } from "../../shared/theme";
import { FormBox } from "../../materialStyles/FormBox";
import contact from "../../shared/json/contact.json";
import "../../shared/variables.css";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const isMobile = useMediaQuery("(max-width:599px)");
  const notMobile = useMediaQuery("(min-width:600px)");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [alertOpen, setAlertOpen] = useState<boolean>(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const form = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  const { register, handleSubmit, formState, reset } = form;
  const { errors } = formState;

  const handleAlert = () => {
    setAlertOpen(false);
  };

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
        setSubmissionError(null);
      } else {
        setSubmissionError(response.statusText);
        console.error("Form submission failed:", response.statusText);
      }
    } catch (error) {
      console.error("Form submission failed:", error);
    }
  };

  useEffect(() => {
    if ((isSubmitted || submissionError) && isMobile) {
      setAlertOpen(true);
      const timer = setTimeout(() => {
        setAlertOpen(false);
        setSubmissionError(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted, submissionError, isMobile]);

  console.log(isSubmitted);
  console.log(notMobile);
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
      {isSubmitted && notMobile && (
        <ContactAnimation text={contact.contactAnimation} />
      )}
      {(isSubmitted || submissionError) && isMobile && (
        <Collapse in={alertOpen} timeout="auto" unmountOnExit>
          <Alert
            sx={{ marginTop: "20px" }}
            variant="filled"
            severity={submissionError ? "error" : "success"}
            onClose={handleAlert}
          >
            {submissionError ? submissionError : "Message sent"}
          </Alert>
        </Collapse>
      )}
    </Container>
  );
};

export default Contact;
