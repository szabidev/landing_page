import { Box, Tooltip, Typography } from "@mui/material";

const SkillSet = ({
  tooltipDescription,
  technology,
}: {
  tooltipDescription: any;
  technology: any;
}) => {
  return (
    <Box>
      <Tooltip title={tooltipDescription}>
        <Typography>{technology}</Typography>
      </Tooltip>
    </Box>
  );
};

export default SkillSet;
