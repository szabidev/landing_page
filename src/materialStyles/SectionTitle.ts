import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import "../shared/variables.css";

export const SectionTitle = styled(Typography)(() => ({
  fontFamily: "Open Sans Condensed, sans serif",
  fontWeight: 300,
  textTransform: "uppercase",

  "@media screen and (max-width:800px)": {
    fontSize: "50px",
    paddingTop: "70px",
    paddingLeft: "15px",
  },
}));
