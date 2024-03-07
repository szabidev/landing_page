import { styled, StyledComponentProps } from "@mui/material/styles";
import { Box } from "@mui/material";
import "../shared/variables.css";

export const TitleBox = styled(Box)<StyledComponentProps>(() => ({
  width: "fit-content",
  position: "absolute",
  top: 140,
  left: 35,

  "@media screen and (max-width:390px)": {
    top: 260,
    left: "auto",
    right: 25,
  },

  "@media screen and (min-width:391px) and (max-width:430px)": {
    top: 260,
    left: "auto",
    right: 15,
  },

  "@media screen and (min-width:431px)and (max-width:639px)": {
    top: 260,
    left: 15,
  },

  "@media screen and (min-width:640px) and (max-width:800px)": {
    top: 250,
  },

  "@media screen and (min-width:1920px)": {
    left: 30,
  },

  "@media screen and (min-width:2560px)": {
    top: 230,
    left: 30,
  },
}));
