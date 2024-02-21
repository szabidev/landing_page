import { Box, Grid, Link } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

import { StyledHeaderContainer } from "../../materialStyles/StyledHeaderContainer";
import { StyledAppBar } from "../../materialStyles/StyledAppBar";
import "../../shared/variables.css";

const navigationLinkStyle = {
  textDecoration: "none",
  color: "#343332",
  zIndex: "100",
  textTransform: "uppercase",
  fontWeight: 600,
};

const Header = () => {
  return (
    <StyledHeaderContainer maxWidth="xl">
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="center"
        sx={{ border: "1px solid red", height: "100%" }}
      >
        <Grid
          item
          xs={12}
          lg={10}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // paddingLeft: "100px !important",
          }}
        >
          <StyledAppBar
            position="sticky"
            sx={{ marginLeft: "calc(100vw/2 - 545px)", boxShadow: "none" }}
          >
            <Link sx={navigationLinkStyle}>About</Link>
            <Link sx={navigationLinkStyle}>Work</Link>
            <Link sx={navigationLinkStyle}>Contact</Link>
          </StyledAppBar>
        </Grid>
        <Grid
          item
          xs={12}
          lg={2}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            paddingRight: "20px",
          }}
        >
          <Box>
            <Link
              href="https://www.linkedin.com/in/szabolcs-vojtek/"
              sx={{ textDecoration: "none" }}
            >
              <LinkedInIcon sx={{ cursor: "pointer" }} />
            </Link>
            <Link href="https://www.facebook.com/szabi.vojtek">
              <FacebookIcon sx={{ cursor: "pointer" }} />
            </Link>
            <Link href="https://www.instagram.com/szabi.vojtek/">
              <InstagramIcon sx={{ cursor: "pointer" }} />
            </Link>
            <Link href="https://github.com/szabidev">
              <GitHubIcon sx={{ cursor: "pointer" }} />
            </Link>
          </Box>
        </Grid>
      </Grid>
    </StyledHeaderContainer>
  );
};

export default Header;
