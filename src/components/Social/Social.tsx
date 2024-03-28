import { useEffect, useState } from "react";
import { Link, Slide, useMediaQuery, useTheme } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import { SocialBox } from "../../materialStyles/SocialBox";
import { links } from "../../shared/variables";
import "../../shared/variables.css";
import throttle from "lodash.throttle";
// TODO CHANGE COLOR DEPENDING ON CURRENT PAGE SECTION
// TODO FIX SCROL EFFECT WHEN SOCIAL IS ON BOTTOM

interface SocialProps {
  socialColor: string;
  changeSocial: boolean;
}

const Social = ({ socialColor, changeSocial }: SocialProps) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(431));
  const isLargeScreen = useMediaQuery("(min-width:1920px)");
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    if (!isSmallScreen) {
      let scrollTimeout: NodeJS.Timeout;

      const handleScroll = throttle(() => {
        setIsVisible(false);
        clearTimeout(scrollTimeout);

        scrollTimeout = setTimeout(() => {
          setIsVisible(true);
        }, 600);
      }, 600);

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isSmallScreen]);

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
    color: isSmallScreen
      ? "var(--offwhite)"
      : changeSocial
      ? "var(--offwhite)"
      : "var(--fontMainColor)",
  };

  return (
    <Slide direction="down" in={isVisible} timeout={600}>
      <SocialBox>
        <Link href={links.linkedIn} target="_blank" sx={linkStyle}>
          <LinkedInIcon sx={iconStyle} />
        </Link>
        <Link href={links.facebook} target="_blank" sx={linkStyle}>
          <FacebookIcon sx={iconStyle} />
        </Link>
        <Link href={links.instagram} target="_blank" sx={linkStyle}>
          <InstagramIcon sx={iconStyle} />
        </Link>
        <Link href={links.gitHub} target="_blank" sx={linkStyle}>
          <GitHubIcon sx={iconStyle} />
        </Link>
      </SocialBox>
    </Slide>
  );
};

export default Social;
