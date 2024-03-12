import { SetStateAction, useState } from "react";
import { Container, Box, Typography, TextField } from "@mui/material";
import "../../shared/variables.css";
import { flex } from "../../shared/variables";
import { SectionTitle } from "../../materialStyles/SectionTitle";

const Contact = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

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
      <Box sx={{ ...flex, width: "100%", gap: 12, paddingTop: "50px" }}>
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
          sx={{
            ...flex,
            flexDirection: "column",
            gap: 12,
            width: "45%",
            heigth: 500,
            backgroundColor: "var(--offwhite)",
            padding: "40px 10px",
            borderRadius: "50px",
          }}
        >
          <TextField
            sx={{
              fontFamily: "Open Sans,sans serif",
              width: "80%",
            }}
            required
            label="Name"
            value={name}
            onChange={handleNameChange}
          />
          <TextField
            sx={{ fontFamily: "Open Sans,sans serif", width: "80%" }}
            required
            label="Email address"
            value={email}
            onChange={handleEmailChange}
          />
          <TextField
            sx={{ fontFamily: "Open Sans,sans serif", width: "80%" }}
            label="Message"
            required
            multiline
            rows={4}
            value={message}
            onChange={handleMessageChange}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;
