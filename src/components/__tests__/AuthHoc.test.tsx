import { act, render, RenderResult, screen } from "@testing-library/react";
import { MemoryRouter, Navigate, Route, Routes } from "react-router-dom";
import { useAuthContext } from "@/hooks/auth.hooks";
import { PrivateRoutes, PublicRoutes } from "@/enums";
import { AuthHoc } from "../AuthHoc/AuthHoc";
import { Layout } from "../Layout/Layout";

jest.mock("@/hooks/auth.hooks", () => ({
  useAuthContext: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Navigate: jest.fn(() => null),
}));

const renderComponent = async (): Promise<RenderResult> => {
  const component = await act(async () =>
    render(
      <MemoryRouter initialEntries={[PrivateRoutes.Dashboard]}>
        <Routes>
          <Route path={PrivateRoutes.Dashboard} element={AuthHoc(Layout)} />
        </Routes>
      </MemoryRouter>,
    ),
  );
  return component;
};

describe("AuthHoc", () => {
  it("should render the component when user is authenticated", async () => {
    (useAuthContext as jest.Mock).mockReturnValue({
      authInfoState: { accessToken: "valid_token" },
    });

    await renderComponent();

    expect(screen.getByText("Siguenos en nuestras redes sociales")).toBeInTheDocument();
    expect(Navigate).not.toHaveBeenCalled();
  });

  it("should navigate to the login page when user is not authenticated", async () => {
    (useAuthContext as jest.Mock).mockReturnValue({
      authInfoState: { accessToken: null },
    });

    await renderComponent();

    expect(Navigate).toHaveBeenCalledWith({ to: PublicRoutes.Login, replace: true }, {});
  });
});
