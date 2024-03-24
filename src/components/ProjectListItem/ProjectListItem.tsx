import { ListItem, Typography, Divider, useMediaQuery } from "@mui/material";
import "../../shared/variables.css";

interface ProjectListItemProps {
  title: string;
  tech: string;
}

const ProjectListItem = ({ title, tech }: ProjectListItemProps) => {
  const isMobile = useMediaQuery("(max-width:431px)");
  return (
    <>
      <ListItem sx={{ display: "block", width: isMobile ? "80%" : "100%" }}>
        <Typography sx={{ fontSize: "24px", fontWeight: 800 }}>
          {title}
        </Typography>
        <Typography sx={{ fontSize: "22px", fontWeight: 400 }}>
          {tech}
        </Typography>
      </ListItem>
      <Divider
        variant="middle"
        component="li"
        sx={{ borderColor: "var(--offwhite)" }}
      />
    </>
  );
};

export default ProjectListItem;
