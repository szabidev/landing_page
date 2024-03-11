import { Box } from "@mui/material";
import { styled, StyledComponentProps } from "@mui/material/styles";
import "../shared/variables.css";

export const AboutBox = styled(Box)<StyledComponentProps>(() => ({
  width: "338px",
  padding: "100px 0 60px 320px",

  // TODO  DECIED WHETER TO DISPLAY OR NOT THE NAME COMPONENT ON SMALL SCREENS
  "@media screen and (min-width:320px) and (max-width:400px)": {
    padding: "50px 0 60px 20px",
  },
  "@media screen and (min-width:401px) and (max-width:500px)": {
    padding: "50px 0 60px 10px",
    width: "400px",
  },
  "@media screen and (min-width:501px) and (max-width:800px)": {
    padding: "50px 0 60px 10px",
    width: "100%",
  },
}));
