import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import "../shared/variables.css";

export const SliderBox = styled(Box)(() => ({
  position: "absolute",
  bottom: 0,
  zIndex: 10000,
  marginLeft: 0,
  backgroundColor: "#fff",
  width: "500px",
  height: "444px",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  gap: 4,

  "@media screen and (min-width:300px) and (max-width:399px)": {
    width: "350px",
    flexDirection: "column",
  },
  "@media screen and (min-width:400px) and (max-width:500px)": {
    width: "380px",
    flexDirection: "column",
  },

  "@media screen and (min-width:501px) and (max-width:800px)": {
    width: "500px",
    flexDirection: "column",
  },
}));
