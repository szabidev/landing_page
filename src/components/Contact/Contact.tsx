import { SetStateAction, useState } from "react";
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
import "../../shared/variables.css";
import { flex } from "../../shared/variables";
import { buttonTheme } from "../../shared/theme";

const Contact = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(true);

  const handleNameChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setMessage(e.target.value);
  };

  const handleSubmit = () => {
    console.log("submitted");
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
        Contact
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
          <span>Want to hire me? </span>
          <span>Need a cocktail recipe?</span>
          <span>Or have an idea?</span>
          <span>Send a message...</span>
        </Typography>
        {/* // ! Style the inputs seperately with styled function, to change color and font size */}

        <Box
          onSubmit={handleSubmit}
          component={"form"}
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
            required
            label="Name"
            value={name}
            onChange={handleNameChange}
            autoComplete="off"
            InputProps={{
              sx: { fontWeight: 600, fontFamily: "Open Sans,sans serif" },
            }}
          />
          <ContactInput
            sx={{ width: "80%" }}
            required
            label="Email address"
            value={email}
            onChange={handleEmailChange}
            autoComplete="off"
            InputProps={{
              sx: { fontWeight: 600, fontFamily: "Open Sans,sans serif" },
            }}
          />
          <ContactInput
            sx={{ width: "80%" }}
            label="Message"
            required
            multiline
            rows={4}
            value={message}
            onChange={handleMessageChange}
            InputProps={{
              sx: { fontWeight: 600, fontFamily: "Open Sans,sans serif" },
            }}
          />
          <ThemeProvider theme={buttonTheme}>
            <Button
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
              Send message
            </Button>
          </ThemeProvider>
        </Box>
      </Box>
      {isSubmitted && <ContactAnimation text="Thank you for your message!" />}
    </Container>
  );
};

export default Contact;
