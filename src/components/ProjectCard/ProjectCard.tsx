import { useEffect, useRef, useState } from "react";
import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  ThemeProvider,
} from "@mui/material";
import { ProjectCardContainer } from "../../materialStyles/ProjectCard";
import { flex } from "../../shared/variables";
import "../../shared/variables.css";
import { buttonTheme } from "../../shared/theme";

const ProjectCard = () => {
  const fontStyle = {
    fontFamily: "Open Sans, sans serif",
    color: "var(--fontMainColor)",
  };

  const [isVisible, setIsVisible] = useState<boolean | undefined>(false);
  const cardRef = useRef<HTMLDivElement>(null);

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

  const displayInfo = () => {
    console.log("clicked button");
  };

  // ! WORK ON FADE IN ANIMATION THIS or react-awesome-reveal
  return (
    <ProjectCardContainer
      ref={cardRef}
      sx={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(50px)",
        transition: "opacity 2s ease-out, transform 1.5s ease-out",
      }}
    >
      <CardContent sx={{ position: "relative", padding: 0 }}>
        <CardMedia
          image="/assets/img/about_page_main.jpeg"
          sx={{ height: 444, width: 500 }}
        />
      </CardContent>
      <CardContent sx={{ height: 420, padding: 0, width: "100%" }}>
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
          {/* // TODO WORK ON HOVER EFFECT, DISPLAY OTHER CONTENT ON CLICK, DECIDE ON EFFECT  */}
          <ThemeProvider theme={buttonTheme}>
            <Button
              onClick={displayInfo}
              size="medium"
              variant="contained"
              color="offWhite"
              sx={{
                ...fontStyle,
                fontSize: "20px",
                fontWeight: 300,
                color: "var(--fontMainColor)",
              }}
            >
              Click here for more details
            </Button>
          </ThemeProvider>
        </CardActions>
      </CardContent>
    </ProjectCardContainer>
  );
};

export default ProjectCard;
