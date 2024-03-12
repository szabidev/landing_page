import { styled, StyledComponentProps } from "@mui/material/styles";
import { Box } from "@mui/material";
import "../shared/variables.css";

export const NameBox = styled(Box)<StyledComponentProps>(() => ({
  textAlign: "right",
  width: "fit-content",
  // ! Check position fixed / absolute
  position: "fixed",
  bottom: 25,
  right: 40,
  zIndex: 1001,

  "@media screen and (max-width: 430px)": {
    right: 20,
  },
  "@media screen and (min-width: 1601px)": {
    bottom: 60,
  },
}));
