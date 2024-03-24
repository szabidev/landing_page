import { Box } from "@mui/material";
import { styled, StyledComponentProps } from "@mui/material/styles";
import "../shared/variables.css";

export const NavigationBox = styled(Box)<StyledComponentProps>(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  height: "160px",
  position: "fixed",
  bottom: 60,
  left: 40,
  zIndex: 1003,

  "@media screen and (max-width: 390px)": {
    flexDirection: "row",
    height: "auto",
    bottom: 10,
    right: 30,
    left: "auto",
    top: "auto",
  },

  "@media screen and (min-width:320px) and (max-width: 431px)": {
    flexDirection: "row",
    height: "auto",
    bottom: 10,
    right: 20,
    left: "auto",
    top: "auto",
  },
  "@media screen and (min-width:432px) and (max-width: 1300px)": {
    flexDirection: "column",
    height: "auto",
    bottom: 60,
    right: "auto",
    left: 10,
    top: "auto",
  },
}));
