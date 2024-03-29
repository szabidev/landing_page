import { styled, StyledComponentProps } from "@mui/material/styles";
import { Typography } from "@mui/material";
import "../shared/variables.css";

interface StyledNameProps extends StyledComponentProps {
  namecolor: string;
}

export const StyledName = styled(Typography)<StyledNameProps>(
  ({ namecolor }) => ({
    fontFamily: "var(--font-secondary)",
    textTransform: "uppercase",
    color: namecolor,
    fontWeight: "300",
    fontSize: "96px",

    "@media screen and (min-width:320px) and (max-width:431px)": {
      fontSize: "56px",
    },

    "@media screen and (min-width:800px) and (max-width:1400px)": {
      fontSize: "60px",
    },

    "@media screen and (min-width:2560px)": {
      fontSize: "160px",
    },
  })
);
