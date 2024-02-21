import { Container } from "@mui/material";
import { styled, StyledComponentProps } from "@mui/material/styles";

export const StyledHeaderContainer = styled(Container)<StyledComponentProps>(
  () => ({
    border: "1px solid red",
    height: "100px",
    position: "fixed",
    top: "0",
    "&.MuiContainer-root": {
      padding: "0",
      margin: "0",
      maxWidth: "100%",
    },
  })
);
