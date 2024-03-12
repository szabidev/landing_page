import { Container } from "@mui/material";
import { styled, StyledComponentProps } from "@mui/material/styles";
import { flex } from "../shared/variables";

export const HeaderContainer = styled(Container)<StyledComponentProps>(() => ({
  position: "fixed",
  top: "0",
  zIndex: 1,
  ...flex,

  "&.MuiContainer-root": {
    padding: "20px 0",
    margin: "0",
    maxWidth: "100%",
    opacity: 1,
    transition: "opacity 0.3s ease-in-out",

    "@media screen and (max-width:768px)": {
      padding: "0",
    },
  },

  "&.MuiContainer-root .hidden": {
    opacity: 0,
  },
}));
