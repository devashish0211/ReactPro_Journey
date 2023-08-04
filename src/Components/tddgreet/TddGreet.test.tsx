import { render, screen } from "@testing-library/react";
import { TddGreet } from "./TddGreet";

describe("Greet", () => {
  test("renders correctly", () => {
    render(<TddGreet />);
    const textElement = screen.getByText(/Hello/i);
    expect(textElement).toBeInTheDocument();
  });

  test("renders with the name", () => {
    render(<TddGreet name="Dev" />);
    const textElement = screen.getByText("Hello Dev");
    expect(textElement).toBeInTheDocument();
  });

  // it("renders correctly", () => {
  //   render(<TddGreet />);
  //   const textElement = screen.getByText("Hello");
  //   expect(textElement).toBeInTheDocument();
  // });

  // it("renders with the name", () => {
  //   render(<TddGreet name="Dev" />);
  //   const textElement = screen.getByText("Hello Dev");
  //   expect(textElement).toBeInTheDocument();
  // });
});

//// to run only specific test
// test.only("Greet renders a the name", () => {
//   render(<TddGreet name="Dev" />);
//   const textElement = screen.getByText("Hello Dev");
//   expect(textElement).toBeInTheDocument();
// });
// fit("Greet renders a the name", () => {
//   render(<TddGreet name="Dev" />);
//   const textElement = screen.getByText("Hello Dev");
//   expect(textElement).toBeInTheDocument();
// });

//// to skip test
// test.skip("Greet renders a the name", () => {
//   render(<TddGreet name="Dev" />);
//   const textElement = screen.getByText("Hello Dev");
//   expect(textElement).toBeInTheDocument();
// });
// xit("Greet renders a the name", () => {
//   render(<TddGreet name="Dev" />);
//   const textElement = screen.getByText("Hello Dev");
//   expect(textElement).toBeInTheDocument();
// });
