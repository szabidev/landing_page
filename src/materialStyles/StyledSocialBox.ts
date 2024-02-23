import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import "../shared/variables.css";

export const StyledSocialBox = styled(Box)(() => ({
  width: "160px",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  position: "absolute",
  top: 65,
  left: "calc(50% - 75px)",

  "@media screen and (max-width: 420px)": {
    color: "#eae6dc",
    bottom: 10,
    top: "auto",
    left: 15,
  },

  "@media screen and (min-width: 421px) and (max-width:768px)": {
    color: "#eae6dc",
    top: 15,
    right: 20,
    bottom: "auto",
    left: "auto",
  },

  "@media screen and (min-width:769px) and (max-width:1440px)": {
    top: 35,
    right: 28,
    bottom: "auto",
    left: "auto",
  },

  "@media screen and (min-width:1920px)": {
    width: "250px",
    top: 25,
    right: 100,
    bottom: "auto",
    left: "auto",
  },
}));
