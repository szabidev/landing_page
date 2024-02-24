import { styled, StyledComponentProps } from "@mui/material/styles";
import { Box } from "@mui/material";
import "../shared/variables.css";

export const StyledNameBox = styled(Box)<StyledComponentProps>(() => ({
  textAlign: "right",
  width: "fit-content",
  // ! Check position fixed / absolute
  position: "fixed",
  bottom: 60,
  right: 40,

  "@media screen and (max-width: 420px)": {
    right: 20,
  },
}));
