import { useEffect } from "react";
import Vara from "vara";
import "./ContactAnimation.css";
import "../../shared/variables.css";

const ContactAnimation = ({ text }: { text: string }) => {
  useEffect(() => {
    const container = document.getElementById("vara-container")!;
    // Clear the container's content
    container.innerHTML = "";
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const vara = new Vara(
      "#vara-container",
      "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json",
      [
        {
          text: text,
          fontSize: 40,
          strokeWidth: 1.7,
          color: "var(--offwhite)",
          textAlign: "center",
        },
      ]
    );
  }, [text]);
  return <div id="vara-container"></div>;
};

export default ContactAnimation;
