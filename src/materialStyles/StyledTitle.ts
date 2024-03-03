import { styled, StyledComponentProps } from "@mui/material/styles";
import { Typography } from "@mui/material";
import "../shared/variables.css";

export const StyledTitle = styled(Typography)<StyledComponentProps>(() => ({
  fontFamily: "var(--font-secondary)",
  textTransform: "uppercase",
  color: "var(--green)",
  fontWeight: "300",
  "@media screen and (max-width:431px)": {
    fontSize: "48px",
  },
  "@media screen and (min-width:432px) and (max-width:800px)": {
    fontSize: "96px",
  },
  "@media screen and (min-width:801px) and (max-width:1919px)": {
    fontSize: "120px",
  },
  "@media screen and (min-width:1920px)": {
    fontSize: "160px",
  },
  "@media screen and (min-width:2560px)": {
    fontSize: "220px",
  },
}));
