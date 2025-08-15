import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hello from "./test";

test("renders hello message", () => {
  render(<Hello name="Marwan" />);
  expect(screen.getByText("Hello, Marwan!")).toBeInTheDocument();
});
