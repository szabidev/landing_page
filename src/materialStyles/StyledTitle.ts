import { styled, StyledComponentProps } from "@mui/material/styles";
import { Typography } from "@mui/material";
import "../shared/variables.css";

export const StyledTitle = styled(Typography)<StyledComponentProps>(() => ({
  fontFamily: "var(--font-secondary)",
  textTransform: "uppercase",
  color: "var(--green)",
  fontWeight: "300",

  "@media screen and (min-width:320px) and (max-width:500px)": {
    fontSize: "50px",
  },
  "@media screen and (min-width:501px) and (max-width:800px)": {
    fontSize: "96px",
  },
  "@media screen and (min-width:801px) and (max-width:1024px)": {
    fontSize: "80px",
  },
  "@media screen and (min-width:1025px) and (max-width:1280px)": {
    fontSize: "120px",
  },
  "@media screen and (min-width:1281px) and (max-width:1366px)": {
    fontSize: "100px",
  },
  "@media screen and (min-width:1367px) and (max-width:1600px)": {
    fontSize: "120px",
  },
  "@media screen and (min-width:1920px)": {
    fontSize: "160px",
  },
  "@media screen and (min-width:2560px)": {
    fontSize: "220px",
  },
}));
