import { styled, StyledComponentProps } from "@mui/material/styles";
import { Typography } from "@mui/material";
import "../shared/variables.css";

export const HomeDescription = styled(Typography)<StyledComponentProps>(() => ({
  width: "95%",
  textAlign: "right",
  position: "absolute",
  top: 80,
  right: 20,
  fontFamily: "Open sans, sans serif",
  fontWeight: 400,

  "@media screen and (min-width:500px) and (max-width:800px)": {
    width: "95%",
    top: 100,
    right: 30,
    left: "auto",
    fontSize: "18px",
  },

  "@media screen and (min-width:801px) and (max-width:1600px)": {
    width: "60%",
    top: 160,
    right: 30,
    left: "auto",
    fontSize: "22px",
  },

  "@media screen and (min-width:1601px) and (max-width:1920px)": {
    width: "50%",
    top: 180,
    right: 30,
    left: "auto",
    fontSize: "26px",
  },

  "@media screen and (min-width:1921px) and (max-width:2560px)": {
    width: "45%",
    top: 280,
    right: 30,
    left: "auto",
    fontSize: "32px",
  },
}));
