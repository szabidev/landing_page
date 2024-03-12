import { Card } from "@mui/material";
import { StyledComponentProps, styled } from "@mui/material/styles";
import "../shared/variables.css";
import { flex } from "../shared/variables";

export const ProjectCardContainer = styled(Card)<StyledComponentProps>(() => ({
  width: "1000px",
  ...flex,
}));
