import { render, screen } from "@testing-library/react";
import { Application } from "./application";

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />);

    //getByRole -- Options
    const pageHeader = screen.getByRole("heading", {
      level: 1,
    });
    expect(pageHeader).toBeInTheDocument();

    const sectionHeading = screen.getByRole("heading", {
      level: 2,
    });
    expect(sectionHeading).toBeInTheDocument();

    //getByText -- 4th query method
    const paragraphElement = screen.getByText("All feilds are mandetory");
    expect(paragraphElement).toBeInTheDocument();

    //getByTitle -- 7th query method
    const closeElement = screen.getByTitle("close");
    expect(closeElement).toBeInTheDocument();

    //getByAltText -- 6th query method
    const imageElement = screen.getByAltText("laptop pic");
    expect(imageElement).toBeInTheDocument();

    //getByTestId -- 8th query method
    const customElement = screen.getByTestId("custom-element");
    expect(customElement).toBeInTheDocument();

    //getByRole -- 1st query method
    const nameElement = screen.getByRole("textbox", { name: "Name" });
    expect(nameElement).toBeInTheDocument();

    //getByLabelText -- 2nd query method
    // const nameElement2 = screen.getByLabelText("Name");
    // expect(nameElement2).toBeInTheDocument();

    //getByPlaceholderText -- 3rd query method
    const nameElement3 = screen.getByPlaceholderText("Fullname");
    expect(nameElement3).toBeInTheDocument();

    //getByDisplayValue -- 5th query method
    const nameElement4 = screen.getByDisplayValue("Dev");
    expect(nameElement4).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", { name: "Bio" });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    //getByLabelText for wrapper element
    // const termsElement2 = screen.getByLabelText(
    //   "I agree to the terms and conditions"
    // );
    // expect(termsElement2).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();
  });
});
