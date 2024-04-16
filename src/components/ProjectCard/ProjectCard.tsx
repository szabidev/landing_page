import { useEffect, useRef, useState } from "react";
import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  ThemeProvider,
  Backdrop,
  Slide,
  Link,
  List,
  ListItem,
} from "@mui/material";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import ProjectListItem from "../ProjectListItem/ProjectListItem";
import { ProjectCardContainer } from "../../materialStyles/ProjectCardContainer";
import { SliderBox } from "../../materialStyles/SliderBox";
import { flex } from "../../shared/variables";
import { buttonTheme } from "../../shared/theme";
import "../../shared/variables.css";

const ProjectCard = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [slideIn, setSlideIn] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean | undefined>(false);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const fontStyle = {
    fontFamily: "Open Sans, sans serif",
    color: "var(--fontMainColor)",
  };
  const linkStyle = {
    cursor: "pointer",
    fontSize: "30px",
    textAlign: "center",
    textDecoration: "none",
    fontWeight: 600,
    transition: "all 0.2s",
    display: "flex",

    "&:hover": {
      transform: "scale(1.1)",
    },
  };
  const iconStyle = {
    fontSize: 50,
    position: "absolute",
    top: 10,
    right: 20,
    transition: "all 0.2s",
    cursor: "pointer",

    "&:hover": {
      transform: "scale(1.1)",
    },
  };

  const handleModal = () => {
    setOpen(true);
    setSlideIn(true);
  };

  const handleCancel = () => {
    setOpen(false);
    setSlideIn(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(cardRef.current!);
        }
      },
      { rootMargin: "0px", threshold: 0.5 }
    );

    const currentRef = cardRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <ProjectCardContainer
      ref={cardRef}
      sx={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(50px)",
        transition: "opacity 2s ease-out, transform 1.5s ease-out",
      }}
    >
      <CardContent sx={{ padding: 0 }}>
        <CardMedia
          image="/assets/img/about_page_main.jpeg"
          sx={{ height: 444, width: 500 }}
        />
        <Backdrop
          open={open}
          timeout={500}
          sx={{
            width: 500,
            height: 444,
            display: { ...flex },
            flexDirection: "column",
            gap: 6,
          }}
        >
          <List
            sx={{
              width: "100%",
              height: "100%",
              ...fontStyle,
              color: "var(--offwhite)",
              overflow: "auto",
              paddingTop: 0,
            }}
          >
            <ListItem
              sx={{
                ...fontStyle,
                textDecoration: "underline",
                textUnderlineOffset: "10px",
                color: "var(--offwhite)",
                fontSize: "30px",
                marginBottom: "20px",
                fontWeight: 800,
              }}
            >
              Technologies used
            </ListItem>
            <ProjectListItem
              title={"Languages, Frameworks and Libraries"}
              tech={"TypeScript, React"}
            />

            <ProjectListItem title={"Backend and Database"} tech="Node.JS" />
            <ProjectListItem
              title="Design and UI/UX Tools"
              tech="Material-UI, Figma"
            />
            <ProjectListItem
              title="Testing"
              tech="Jest, RTL, BrowserStack, Lighthouse, Responsively"
            />
            <ProjectListItem
              title="Build and Package Managers, Deployment"
              tech="npm, webpack, Heroku"
            />
          </List>
        </Backdrop>
      </CardContent>
      <CardContent
        sx={{
          minHeight: 420,
          padding: 0,
          width: "100%",
          ...flex,
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{ ...fontStyle, padding: "10px 0" }}
          align="center"
          variant="h3"
        >
          BarStuff
        </Typography>
        <Typography
          sx={{
            ...fontStyle,
            fontSize: "18px",
            padding: "10px 15px",
            lineHeight: "2",
          }}
          variant="body1"
        >
          An e-commerce website catering to bartenders, showcasing a curated
          selection of barware and books. Packed with features such as user
          authentication, cart management, and seamless browsing. Admins enjoy
          exclusive privileges, including the ability to add, edit, or delete
          items, with added item filter functionality for swift search.
        </Typography>
        <CardActions sx={{ width: "100%", ...flex }}>
          <ThemeProvider theme={buttonTheme}>
            <Button
              onClick={handleModal}
              size="medium"
              variant="contained"
              color="offWhite"
              sx={{
                ...fontStyle,
                fontSize: "20px",
                fontWeight: 300,
              }}
            >
              Click here for more details
            </Button>
          </ThemeProvider>
          <Slide direction="left" in={slideIn} timeout={500}>
            <SliderBox>
              <Link
                href="#"
                target="_blank"
                sx={{
                  ...linkStyle,
                  display: "flex",
                  justifyContent: "space-evenly",
                  width: "180px",
                }}
              >
                <LaptopMacIcon
                  sx={{ fontSize: 50, color: "var(--fontMainColor)" }}
                />
                <Typography sx={{ ...fontStyle, fontSize: "30px" }}>
                  Demo
                </Typography>
              </Link>
              <Link
                href="#"
                target="_blank"
                sx={{
                  ...linkStyle,
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  width: "200px",
                }}
              >
                <GitHubIcon
                  sx={{ fontSize: 50, color: "var(--fontMainColor)" }}
                />
                <Typography sx={{ ...fontStyle, fontSize: "30px" }}>
                  GitHub
                </Typography>
              </Link>
              <ArrowCircleRightIcon sx={iconStyle} onClick={handleCancel} />
            </SliderBox>
          </Slide>
        </CardActions>
      </CardContent>
    </ProjectCardContainer>
  );
};

export default ProjectCard;
