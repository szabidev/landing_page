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
    "@media screen and (max-width: 800px)": {
      maxWidth: "100%",
    },
  },
}));
