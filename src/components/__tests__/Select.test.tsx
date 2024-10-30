import { render, screen } from "@testing-library/react";
import { Select } from "../UI";
import { categoriesMock } from "@/__mocks__";

describe("Input Component", () => {
  it("should render on error", () => {
    render(<Select options={categoriesMock} valueKey={"slug"} labelKey={"name"} error={"error message"} />);

    const errorSelect = screen.getByRole("combobox");
    expect(errorSelect).toBeInTheDocument();
    expect(errorSelect).toHaveClass("select medium primary danger");
  });

  it("should render disabled", () => {
    render(<Select options={categoriesMock} valueKey={"slug"} labelKey={"name"} id="selectTest" disabled />);

    const disabledSelect = screen.getByRole("combobox");
    expect(disabledSelect).toBeInTheDocument();
    expect(disabledSelect).toHaveClass("select medium primary disabled");
    expect(disabledSelect.parentElement).toHaveClass("select-container ");
  });
});
