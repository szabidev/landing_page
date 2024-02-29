import { styled, StyledComponentProps } from "@mui/material/styles";
import { Typography } from "@mui/material";
import "../shared/variables.css";

export const StyledTitle = styled(Typography)<StyledComponentProps>(() => ({
  fontFamily: "var(--font-secondary)",
  textTransform: "uppercase",
  color: "var(--green)",
  fontWeight: "300",
  //   fontSize: isLargeScreen ? "160px" : isSmallScreen ? "48px" : "120px",
}));
