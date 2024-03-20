import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import "../shared/variables.css";
import { flex } from "../shared/variables";

export const ProjectBox = styled(Box)(() => ({
  ...flex,
  flexDirection: "column",
  gap: 24,
  paddingTop: "100px",
  paddingBottom: "100px",
  marginRight: "100px",

  "@media screen and (min-width:300px) and (max-width:800px)": {
    marginRight: 0,
    paddingTop: "50px",
  },
}));
