import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import "../shared/variables.css";
import { ImageProps } from "../shared/types";

export const StyledImageBox = styled(Box)<ImageProps>(() => ({
  position: "absolute",
  bottom: 0,
  left: 165,

  "@media screen and (max-width:400px)": {
    left: -145,
    bottom: -45,
    height: 720,
  },

  "@media screen and (min-width:401px) and (max-width:429px)": {
    left: -90,
    height: 610,
  },

  "@media screen and (min-width:430px) and (max-width:500px)": {
    left: -190,
    height: 860,
  },

  "@media screen and (min-width:501px) and (max-width:800px)": {
    left: 72,
    height: 725,
  },
  "@media screen and (min-width:801px) and (max-width:1280px)": {
    left: 110,
    height: 805,
  },
  "@media screen and (min-width:1281px) and (max-width:1366px)": {
    left: 220,
    height: 490,
  },
  "@media screen and (min-width:1367px) and (max-width:1919px)": {
    height: 660,
  },

  "@media screen and (min-width:1920px) and (max-width:2559px)": {
    left: 130,
    height: 710,
  },

  "@media screen and (min-width:2560px)": {
    left: -90,
    height: 970,
  },
}));
