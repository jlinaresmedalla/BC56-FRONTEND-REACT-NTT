import { act, render, screen } from "@testing-library/react";
import App from "@/App";

describe("App", () => {
  it("should work as expected", async () => {
    await act(async () => {
      render(<App />);
    });
    expect(screen.getByText("Inicio de sesión")).toBeInTheDocument();
  });
});
