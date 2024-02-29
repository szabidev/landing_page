import { styled, StyledComponentProps } from "@mui/material/styles";
import { Typography } from "@mui/material";
import "../shared/variables.css";

export const StyledHomeDescription = styled(Typography)<StyledComponentProps>(
  () => ({
    width: "42%",
    textAlign: "right",
    position: "absolute",
    top: "30%",
    right: 35,
    fontFamily: "Open sans, sans serif",
    // ? Maybe change font weight
    fontWeight: 400,

    "@media screen and (max-width:430px)": {
      width: "95%",
      top: 70,
      right: 15,
      // padding: "5px",
      // textAlign: "center",
    },

    "@media screen and (min-width:1920px)": {
      fontSize: "32px",
      width: "85%",
      right: -450,
    },
  })
);
