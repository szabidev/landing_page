import { Typography } from "@mui/material";
import { styled, StyledComponentProps } from "@mui/material/styles";
import "../shared/variables.css";

export const AboutTitle = styled(Typography)<StyledComponentProps>(() => ({
  fontSize: "34px",
  fontFamily: "Open sans, sans serif",
  textTransform: "uppercase",
  fontWeight: 500,
}));
