import { render, screen } from "@testing-library/react";
import { HelperText } from "../UI";

describe("HelperText Component", () => {
  it("should render with default props", () => {
    render(<HelperText message="test message" />);
    const helperTextElement = screen.getByText("test message");
    expect(helperTextElement).toBeInTheDocument();
    expect(helperTextElement).toHaveClass("helper-text default small");
  });
});
