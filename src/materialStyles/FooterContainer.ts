import { Container } from "@mui/material";
import { styled, StyledComponentProps } from "@mui/material/styles";
import "../shared/variables.css";

export const FooterContainer = styled(Container)<StyledComponentProps>(() => ({
  position: "fixed",
  bottom: 0,
  height: "60px",
  backgroundColor: "#343332",
  zIndex: 20001,

  "&.MuiContainer-root": {
    maxWidth: "100%",

    "@media screen and (min-width:431px)": {
      display: "none",
    },
  },
}));
