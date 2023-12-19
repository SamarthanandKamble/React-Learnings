import { render, screen } from "@testing-library/react";
import About from "../Home_Page/About";
import "@testing-library/jest-dom";

test("should load about page", () => {
  render(<About />);
  //Querying
  const heading = screen.getByRole("heading");
  //Assertion
  expect(heading).toBeInTheDocument();
});

