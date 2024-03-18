import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import "../shared/variables.css";

export const ContactInput = styled(TextField)(() => ({
  // ! STYLE THE BORDER OF THE INPUTS WHEN ERROR CLASS AND FOCUSED CLASS IS ON
  fontFamily: "Open Sans, sans serif",
  fontWeight: 700,
  "& MuiInputBase-root": {
    fontWeight: 700,
  },

  "& label": {
    letterSpacing: "1px",
    color: "var(--fontMainColor)",
    fontWeight: 600,
  },

  "& label.Mui-focused": {
    color: "var(--fontMainColor)",
    fontWeight: 600,
  },
  "& label.Mui-error": {
    color: "var(--error)",
  },

  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "var(--fontMainColor)",
      fontWeight: 600,
    },
  },

  "&.MuiOutlinedInput-notchedOutline": {
    fontWeight: 700,
  },

  "&.Mui-error .MuiOutlinedInput-notchedOutline": {
    borderColor: "green",
  },
}));
