import { render, screen } from "@testing-library/react";
import Footer from "../footer/Footer";

test("Footer elements have correct classes", () => {
  render(<Footer />);
  expect(screen.getByText("Ad:Alperen Soyad:Yılan")).toHaveClass("span");

  const githubLink = screen.getByTestId("github-link");
  const linkedinLink = screen.getByTestId("linkedin-link");

  expect(githubLink).toBeInTheDocument();
  expect(linkedinLink).toBeInTheDocument();
  const githubIcon = githubLink.querySelector(".bi-github");
  const linkedinIcon = linkedinLink.querySelector(".bi-linkedin");
  expect(githubIcon).toBeInTheDocument();
  expect(linkedinIcon).toBeInTheDocument();
});
