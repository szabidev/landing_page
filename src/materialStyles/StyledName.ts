import { styled, StyledComponentProps } from "@mui/material/styles";
import { Typography, TypographyProps } from "@mui/material";
import "../shared/variables.css";

interface StyledNameProps  extends TypographyProps {
  nameColor: string;
}
// TODO check out mix-blend-mode property
export const StyledName = styled(Typography)<StyledNameProps>(
  ({ nameColor }) => ({
    fontFamily: "var(--font-secondary)",
    textTransform: "uppercase",
    color: nameColor,
    fontWeight: "300",
    fontSize: "96px",
    mixBlendMode:'difference',
   

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
