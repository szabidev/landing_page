import { Typography } from "@mui/material";
import { styled, StyledComponentProps } from "@mui/material/styles";
import "../shared/variables.css";

export const AboutDescription = styled(Typography)<StyledComponentProps>(
  () => ({
    fontSize: "17px",
    fontFamily: "Open Sans, sans serif",
    // ? fontWeight 400 or 500?
    fontWeight: 500,
    margin: "15px 0",
  })
);
