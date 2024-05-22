import React from "react";
import { render, screen } from "@testing-library/react";
import Logo from "../../../components/Logo/Logo";

test("renders logo component with image", () => {
  render(<Logo />);
  const imageElement = screen.getByAltText("instagram");
  expect(imageElement).toBeInTheDocument();
});
