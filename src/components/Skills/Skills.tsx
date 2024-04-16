import { useRef, useState, useEffect } from "react";
import { Typography, Fade } from "@mui/material";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { SkillsContainer } from "../../materialStyles/SkillsContainer";
import { stack } from "../../shared/variables";
import "../../shared/variables.css";

const Skills = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const skillRef = useRef<HTMLDivElement>(null);
  const contentStyle = {
    fontSize: "20px",
    fontFamily: "Open Sans, sans serif",
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entrry]) => {
        if (entrry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(skillRef.current!);
        }
      },
      { rootMargin: "0px", threshold: 0.2 }
    );

    const currentRef = skillRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
        setIsVisible(false);
      }
    };
  }, []);

  return (
    <SkillsContainer id="skills-container" maxWidth={false} ref={skillRef}>
      <Fade in={isVisible} timeout={1200}>
        <Typography
          align="center"
          variant="h3"
          sx={{
            fontFamily: "Open Sans,sans serif",
            color: "var(--green)",
            transform: isVisible ? "translateY(0)" : "translateY(10px)",
            transition: "transform 1.5s ease-out",
          }}
        >
          Technologies
        </Typography>
      </Fade>

      <Timeline sx={{ padding: 0 }}>
        {stack.map((skill, index) => (
          <Fade in={isVisible} timeout={(index + 1) * 800} key={skill.title}>
            <TimelineItem key={skill.title}>
              <TimelineOppositeContent
                sx={{
                  ...contentStyle,
                  fontWeight: 500,
                }}
              >
                {skill.title}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector sx={{ backgroundColor: "var(--green)" }} />
              </TimelineSeparator>
              <TimelineContent
                sx={{
                  ...contentStyle,
                  fontWeight: 300,
                }}
              >
                {skill.tech}
              </TimelineContent>
            </TimelineItem>
          </Fade>
        ))}
      </Timeline>
    </SkillsContainer>
  );
};

export default Skills;
