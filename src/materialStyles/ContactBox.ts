import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { flex } from "../shared/variables";
import "../shared/variables.css";

export const ContactBox = styled(Box)(() => ({
  ...flex,
  width: "100%",
  paddingTop: "60px",

  "@media screen and (min-width:300px) and (max-width:800px)": {
    flexDirection: "column",
    gap: 48,
    paddingTop: "20px",
  },
}));
