import { render, screen, fireEvent } from "@testing-library/react";
import { useLocation, useNavigate } from "react-router-dom";
import Headers from "../headers/headers";

jest.mock("react-router-dom", () => ({
  useLocation: jest.fn(),
  useNavigate: jest.fn(),
}));

describe("Headers component", () => {
  test("should navigate to '/' when clicked on the image", () => {
    const mockLocation = { pathname: "/some-path" };
    const mockNavigate = jest.fn();
    useLocation.mockReturnValue(mockLocation);
    useNavigate.mockReturnValue(mockNavigate);

    render(<Headers />);

    const image = screen.getByAltText("char");
    fireEvent.click(image);

    expect(mockNavigate).toHaveBeenCalledWith("/");
  });
});
