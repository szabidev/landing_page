import { AppBar } from "@mui/material";
import { styled, StyledComponentProps } from "@mui/material/styles";
import "../shared/variables.css";

interface StyledAppBarProps extends StyledComponentProps {
  changecolor: string;
}

export const StyledAppBar = styled(AppBar)<StyledAppBarProps>(
  ({ changecolor }) => ({
    backgroundColor: changecolor,
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
        width: "50%",
        height: 80,
      },
    },
  })
);
