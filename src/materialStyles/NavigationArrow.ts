import { styled, StyledComponentProps } from "@mui/material/styles";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import "../shared/variables.css";

interface NavigationArrowProps extends StyledComponentProps {
  sx?: { [key: string]: string | number | any };
  navigationcolor: string;
}

export const NavigationArrow = styled(
  ExpandCircleDownIcon
)<NavigationArrowProps>(({ sx, navigationcolor }) => ({
  color: navigationcolor,
  fontSize: 70,
  transition: "all 0.2s",
  cursor: "pointer",

  "&:hover": {
    transform: "scale(1.1)",
  },

  "@media screen and (max-width: 431px)": {
    fontSize: 40,
    color: "var(--offwhite)",
    zIndex: 101,
  },
}));
