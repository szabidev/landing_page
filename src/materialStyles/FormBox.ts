import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { flex } from "../shared/variables";
import "../shared/variables.css";

export const FormBox = styled(Box)(() => ({
  ...flex,
  flexDirection: "column",
  gap: 12,
  width: "35%",
  backgroundColor: "var(--offwhite)",
  padding: "30px 10px",
  borderRadius: "50px",
  positin: "relative",
  zIndex: 20000,

  "@media screen and (min-width:300px) and  (max-width:800px)": {
    width: "80%",
    gap: 24,
  },

  "@media screen and (min-width:1920px)": {
    height: "500px",
    gap: 50,
  },
}));
