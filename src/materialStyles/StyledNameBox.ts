import { styled, StyledComponentProps } from "@mui/material/styles";
import "../shared/variables.css";
import { Box } from "@mui/material";

export const StyledNameBox = styled(Box)<StyledComponentProps>(() => ({
  textAlign: "right",
  width: "fit-content",
  position: "absolute",
  bottom: 60,
  right: 40,
}));
