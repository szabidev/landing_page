import { styled, StyledComponentProps } from "@mui/material/styles";
import { Typography } from "@mui/material";
import "../shared/variables.css";

export const StyledHomeDescription = styled(Typography)<StyledComponentProps>(
  () => ({
    width: "40%",
    textAlign: "right",
    position: "absolute",
    top: "30%",
    right: 35,
    fontFamily: "Open sans, sans serif",
    // ! Check font weight
    fontWeight: 400,

    "@media screen and (min-width:1920px)": {
      fontSize: "32px",
      width: "85%",
      right: -450,
    },
  })
);
