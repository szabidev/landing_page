import { useEffect, useState } from "react";
import { Link, Slide, useMediaQuery, useTheme } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import { SocialBox } from "../../materialStyles/SocialBox";
import { links } from "../../shared/variables";
// TODO CHANGE COLOR DEPENDING ON CURRENT PAGE SECTION
// TODO FIX SCROL EFFECT WHEN SOCIAL IS ON BOTTOM

const Social = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(431));
  const notMobile = !isSmallScreen;
  // const isTabletScreen = useMediaQuery(
  //   "(min-widht:432px) and (max-width:800px)"
  // );
  // const notMobile = !isSmallScreen && !isTabletScreen;
  const isLargeScreen = useMediaQuery("(min-width:1920px)");
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      setIsVisible(false);
      // Reset the scroll timeout on each scroll event
      clearTimeout(scrollTimeout);

      // Set a timeout to detect when scrolling stops
      scrollTimeout = setTimeout(() => {
        setIsVisible(true);
      }, 600);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [notMobile]);
  console.log(isSmallScreen);

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
    <Slide direction="down" in={isVisible} timeout={500}>
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
