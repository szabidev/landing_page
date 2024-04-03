import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import "../shared/variables.css";

export const ContactDescription = styled(Typography)(() => ({
  display: "flex",
  justifyContent: "start",
  flexDirection: "column",
  width: "50%",
  fontfamily: "Open Sans, sans serif",
  fontWeight: 800,
  fontSize: "48px",
  color: "var(--offwhite)",

  "@media screen and (min-width:300px) and (max-width:800px)": {
    width: "100%",
    fontSize: "30px",
  },

  "@media screen and (min-width:1920px)": {
    fontSize: "64px",
  },
}));
