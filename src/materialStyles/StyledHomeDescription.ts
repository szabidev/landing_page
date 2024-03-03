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

    "@media screen and (max-width:390px)": {
      width: "95%",
      top: 70,
      right: 20,
    },

    "@media screen and (min-width:391px) and (max-width:430px)": {
      width: "95%",
      top: 70,
      right: 15,
    },

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
      width: "65%",
      top: 180,
      right: -155,
      left: "auto",
      fontSize: "26px",
    },
    "@media screen and (min-width:1921px) and (max-width:2560px)": {
      width: "95%",
      top: 280,
      right: -475,
      left: "auto",
      fontSize: "32px",
    },
  })
);
