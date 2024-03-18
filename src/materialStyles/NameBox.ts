import { styled, StyledComponentProps } from "@mui/material/styles";
import { Box } from "@mui/material";
import "../shared/variables.css";

export const NameBox = styled(Box)<StyledComponentProps>(() => ({
  textAlign: "right",
  width: "fit-content",
  position: "fixed",
  bottom: 25,
  right: 40,
  zIndex: 1001,

  "@media screen and (max-width: 431px)": {
    right: 20,
    bottom: 65,
  },
  "@media screen and (min-width: 1600px)": {
    bottom: 50,
  },
}));
