import { styled, StyledComponentProps } from "@mui/material/styles";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import "../shared/variables.css";

interface NavigationArrowProps extends StyledComponentProps {
  sx?: { [key: string]: string | number | any };
}

export const NavigationArrow = styled(
  ExpandCircleDownIcon
)<NavigationArrowProps>(() => ({
  // ? or color var(--green) ?
  color: "var(--fontMainColor)",
  fontSize: 70,
  transition: "all 0.2s",
  cursor: "pointer",

  "&:hover": {
    transform: "scale(1.1)",
  },

  // ? Why variable names don't work sometime with material UI?
  "@media screen and (max-width: 431px)": {
    fontSize: 40,
    color: "var(--offwhite)",
    zIndex: 101,
  },
}));