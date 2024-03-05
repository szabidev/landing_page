import { Box } from "@mui/material";
import { styled, StyledComponentProps } from "@mui/material/styles";
import "../shared/variables.css";

export const AboutBox = styled(Box)<StyledComponentProps>(() => ({
  width: "338px",
  position: "absolute",
  bottom: 60,
  left: 320,
  //   textAlign: "right",
}));
