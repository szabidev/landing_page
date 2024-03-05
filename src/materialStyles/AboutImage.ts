import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import "../shared/variables.css";
import { ImageProps } from "../shared/types";

export const AboutImage = styled(Box)<ImageProps>(() => ({
  position: "absolute",
  bottom: 0,
  right: 166,
  width: 400,
}));
