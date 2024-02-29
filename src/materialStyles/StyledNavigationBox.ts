import { Box } from "@mui/material";
import { styled, StyledComponentProps } from "@mui/material/styles";
import "../shared/variables.css";

export const StyledNavigationBox = styled(Box)<StyledComponentProps>(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  height: "160px",
  position: "absolute",
  bottom: 60,
  left: 40,

  "@media screen and (max-width: 390px)": {
    flexDirection: "row",
    height: "auto",
    bottom: 10,
    right: 30,
    left: "auto",
    top: "auto",
  },

  "@media screen and (min-width:320px) and (max-width: 430px)": {
    flexDirection: "row",
    height: "auto",
    bottom: 10,
    right: 20,
    left: "auto",
    top: "auto",
  },

  //TODO MAKE navigation arrows display or hide based on current page
}));
