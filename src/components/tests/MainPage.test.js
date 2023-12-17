import { render, screen } from "@testing-library/react";
import MainPage from "../MainPage";

test("renders MainPage component with hero data", () => {
  const heros = [
    { id: 1, name: "Superman" },
    { id: 2, name: "Batman" },
    { id: 3, name: "Wonder Woman" },
  ];

  render(<MainPage heros={heros} />);



  // Check if hero data is rendered
  expect(screen.getByText("Superman")).toBeInTheDocument();
  expect(screen.getByText("Batman")).toBeInTheDocument();
  expect(screen.getByText("Wonder Woman")).toBeInTheDocument();
});