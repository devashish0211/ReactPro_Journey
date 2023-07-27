import { render, screen } from "@testing-library/react";
import { TddGreet } from "./TddGreet";

test("Greet renders correctly", () => {
  render(<TddGreet />);
  const textElement = screen.getByText("Hello");
  expect(textElement).toBeInTheDocument();
});

test("Greet renders with the name", () => {
  render(<TddGreet name="Dev" />);
  const textElement = screen.getByText("Hello Dev");
  expect(textElement).toBeInTheDocument();
});
