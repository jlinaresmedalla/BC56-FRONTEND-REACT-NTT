import { render, screen } from "@testing-library/react";
import { Button } from "../UI";

describe("Button Component", () => {
  it("should render with disabled", () => {
    render(<Button disabled>disabled btn</Button>);

    const disabledBtn = screen.getByText("disabled btn");
    expect(disabledBtn).toBeInTheDocument();
    expect(disabledBtn).toHaveClass("button medium primary disabled");
  });
});
