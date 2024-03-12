import { Fade, Typography } from "@mui/material";
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
  const contentStyle = {
    fontSize: "22px",
    fontFamily: "Open Sans, sans serif",
  };

  // ! CHECK OUT MATERIAL UI TRANSITIONS PROPERTY TO FADE IN SLOWLY THE CONTENT STEP BY STEP

  return (
    <SkillsContainer id="skills-container" maxWidth={false}>
      <Typography
        align="center"
        variant="h3"
        // ? MAYBE CHANGE COLOR
        sx={{ fontFamily: "Open Sans,sans serif", color: "var(--green)" }}
      >
        Technologies
      </Typography>
      <Fade appear in timeout={200}>
        <Timeline>
          {stack.map((skill) => (
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
                {/* // ? MAYBE CHANGE THE COLOR */}
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
          ))}
        </Timeline>
      </Fade>
    </SkillsContainer>
  );
};

export default Skills;
