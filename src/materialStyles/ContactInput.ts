import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import "../shared/variables.css";

export const ContactInput = styled(TextField)(() => ({
  fontFamily: "Open Sans, sans serif",
  fontWeight: 700,
  "& MuiInputBase": {
    fontWeight: 700,
  },

  "& label": {
    letterSpacing: "1px",
    color: "#343332",
    fontWeight: 600,
  },
  "& label.Mui-focused": {
    color: "#343332",
    fontWeight: 600,
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "#343332",
      fontWeight: 600,
    },
  },

  "&.MuiOutlinedInput-notchedOutline": {
    fontWeight: 700,
  },
}));
