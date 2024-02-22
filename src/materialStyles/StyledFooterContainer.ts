import { Container } from "@mui/material";
import { styled, StyledComponentProps } from "@mui/material/styles";
import "../shared/variables.css";

export const StyledFooterContainer = styled(Container)<StyledComponentProps>(
  () => ({
    position: "absolute",
    bottom: 0,
    height: "60px",
    backgroundColor: "#343332",

    "&.MuiContainer-root": {
      maxWidth: "100%",

      "@media screen and (min-width:420px)": {
        display: "none",
      },
    },
  })
);
