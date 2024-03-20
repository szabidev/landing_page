import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import "../shared/variables.css";

export const SkillsContainer = styled(Container)(() => ({
  width: "800px",
  margin: "150px 0 65px 80px",
  padding: 0,

  "@media screen and (min-width:320px) and (max-width:399px)": {
    width: "400px",
    margin: "0",
    marginBottom: "50px",
    paddingRight: "20px",
  },
  "@media screen and (min-width:400px) and (max-width:500px)": {
    width: "450px",
    margin: "0",
    marginBottom: "50px",
    paddingRight: "20px",
  },
  "@media screen and (min-width:501px) and (max-width:800px)": {
    width: "100%",
    margin: 0,
    marginBottom: "50px",
    padding: 0,
  },
}));
