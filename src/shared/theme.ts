import { createTheme, alpha, getContrastRatio } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    offWhite: Palette["primary"];
    green: PaletteOptions["secondary"];
  }

  interface PaletteOptions {
    offWhite?: PaletteOptions["primary"];
    green?: PaletteOptions["secondary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    offWhite: true;
    green: true;
  }
}

// ! CREATE THEME FOR ALERT ALSO

const offWhiteBase = "#eae6dc";
const offWhiteMain = alpha(offWhiteBase, 0.7);
const greenBase = "#0b6353";
const greenMain = alpha(greenBase, 0.7);

export const buttonTheme = createTheme({
  palette: {
    offWhite: {
      main: offWhiteMain,
      light: alpha(offWhiteBase, 0.5),
      dark: alpha(offWhiteBase, 0.9),
      contrastText:
        getContrastRatio(offWhiteMain, "#fff") > 4.5 ? "#fff" : "#111",
    },
    green: {
      main: greenMain,
      light: alpha(greenBase, 0.5),
      dark: alpha(greenBase, 0.9),
      contrastText: getContrastRatio(greenMain, "#fff") > 4.5 ? "#fff" : "#111",
    },
  },
});

// !
export const theme = createTheme({
  components: {
    MuiAlert: {
      styleOverrides: {
        root: {
          filled: {},
        },
      },
      variants: [],
    },
  },
});
