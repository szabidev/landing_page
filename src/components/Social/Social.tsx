import { Link, useMediaQuery, useTheme } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import { SocialBox } from "../../materialStyles/SocialBox";

const Social = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(431));
  const isLargeScreen = useMediaQuery("(min-width:1920px)");

  const linkStyle = {
    textDecoration: "none",
    cursor: "pointer",
    position: "relative",
    zIndex: 200,
    transition: "all 0.2s",

    "&:hover": {
      transform: "scale(1.1)",
    },
  };
  const iconStyle = {
    fontSize: isLargeScreen ? "50px" : "30px",
    color: isSmallScreen ? "#eae6dc" : isLargeScreen ? "#0b6353" : "#343332",
  };

  return (
    <SocialBox>
      <Link
        href="https://www.linkedin.com/in/szabolcs-vojtek/"
        target="_blank"
        sx={linkStyle}
      >
        <LinkedInIcon sx={iconStyle} />
      </Link>
      <Link
        href="https://www.facebook.com/szabi.vojtek"
        target="_blank"
        sx={linkStyle}
      >
        <FacebookIcon sx={iconStyle} />
      </Link>
      <Link
        href="https://www.instagram.com/szabi.vojtek/"
        target="_blank"
        sx={linkStyle}
      >
        <InstagramIcon sx={iconStyle} />
      </Link>
      <Link href="https://github.com/szabidev" target="_blank" sx={linkStyle}>
        <GitHubIcon sx={iconStyle} />
      </Link>
    </SocialBox>
  );
};

export default Social;
