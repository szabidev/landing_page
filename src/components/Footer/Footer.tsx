import { useMediaQuery, useTheme } from "@mui/material";
import "../../shared/variables.css";
import { StyledFooterContainer } from "../../materialStyles/StyledFooterContainer";

const Footer = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(400));

  return <StyledFooterContainer></StyledFooterContainer>;
};

export default Footer;
