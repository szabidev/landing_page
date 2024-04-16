import { Card } from "@mui/material";
import { StyledComponentProps, styled } from "@mui/material/styles";
import "../shared/variables.css";
import { flex } from "../shared/variables";

export const ProjectCardContainer = styled(Card)<StyledComponentProps>(() => ({
  width: "1000px",
  padding: 0,
  ...flex,

  "@media screen and (min-width:300px) and (max-width:399px)": {
    width: "350px",
    flexDirection: "column",
  },
  "@media screen and (min-width:400px) and (max-width:500px)": {
    width: "380px",
    flexDirection: "column",
  },

  "@media screen and (min-width:501px) and (max-width:800px)": {
    width: "500px",
    flexDirection: "column",
  },
}));
