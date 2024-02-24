import { styled, StyledComponentProps } from "@mui/material/styles";
import { Box } from "@mui/material";
import "../shared/variables.css";

export const StyledTitleBox = styled(Box)<StyledComponentProps>(() => ({
  width: "fit-content",
  position: "absolute",
  top: 140,
  left: 35,

  "@media screen and (min-width:1920px)": {
    left: -400,
  },
}));
