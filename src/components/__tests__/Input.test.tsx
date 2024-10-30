import { render, screen } from "@testing-library/react";
import { Input } from "../UI";

describe("Input Component", () => {
  it("should render on error", () => {
    render(<Input error={"error message"} />);

    const errorInput = screen.getByRole("textbox");
    expect(errorInput).toBeInTheDocument();
    expect(errorInput).toHaveClass("input medium primary danger");
  });

  it("should render disabled", () => {
    render(<Input disabled />);

    const disabledInput = screen.getByRole("textbox");
    expect(disabledInput).toBeInTheDocument();
    expect(disabledInput).toHaveClass("input medium primary disabled");
    expect(disabledInput.parentElement).toHaveClass("input-container ");
  });
});
