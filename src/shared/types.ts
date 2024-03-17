import { StyledComponentProps } from "@mui/material";

export interface ImageProps extends StyledComponentProps {
  src: string;
  alt?: string;
}
