import { Container } from "@mui/material";
import { styled, StyledComponentProps } from "@mui/material/styles";

export const HeaderContainer = styled(Container)<StyledComponentProps>(
  () => ({
    position: "fixed",
    top: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,

    "&.MuiContainer-root": {
      padding: "20px 0",
      margin: "0",
      maxWidth: "100%",

      "@media screen and (max-width:768px)": {
        padding: "0",
      },
    },
  })
);
