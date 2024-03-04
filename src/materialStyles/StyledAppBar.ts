import { AppBar } from "@mui/material";
import { styled, StyledComponentProps } from "@mui/material/styles";
import "../shared/variables.css";

export const StyledAppBar = styled(AppBar)<StyledComponentProps>(() => ({
  backgroundColor: "var(--white)",
  maxWidth: "50%",
  height: "60px",
  borderRadius: "50px",
  textAlign: "center",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  flexDirection: "row",

  "&.MuiAppBar-root": {
    "@media screen and  (max-width: 768px)": {
      maxWidth: "100%",
      borderRadius: "0px",
    },

    "@media screen and (min-width:500px) and (max-width:800px)": {
      justifyContent: "start",
    },
    "@media screen and (min-width:1920px)": {
      width: "30%",
      height: 80,
    },
  },
}));
