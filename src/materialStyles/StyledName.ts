import { styled, StyledComponentProps } from "@mui/material/styles";
import { Typography } from "@mui/material";
import "../shared/variables.css";

export const StyledName = styled(Typography)<StyledComponentProps>(() => ({
  fontFamily: "var(--font-secondary)",
  textTransform: "uppercase",
  color: "var(--green)",
  fontWeight: "300",
  fontSize: "96px",

  "@media screen and (min-width:320px) and (max-width:430px)": {
    fontSize: "56px",
  },
}));
