import Home from "./Home";
import { render, screen } from "@testing-library/react";

describe("Home component", () => {
  it("renders Home page", () => {
    render(<Home />);

    expect(
      screen.getByText(
        "Passionate and detail-oriented web developer with a curious mindset, I thrive on problem-solving and transforming ideas into seamless user trends, I bring creativity and precision to every project."
      )
    ).toBeVisible();

    expect(
      screen.getByRole("img", {
        name: /szabi drinking coffee/i,
      })
    ).toBeVisible();

    expect(
      screen.getByRole("heading", {
        name: /frontend/i,
      })
    ).toBeVisible();

    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.logTestingPlaygroundURL();
  });
});
