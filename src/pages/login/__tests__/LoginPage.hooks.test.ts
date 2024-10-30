import { renderHook, act } from "@testing-library/react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "@/hooks/auth.hooks";
import { useMutation } from "@tanstack/react-query";
import { PrivateRoutes } from "@/enums";
import { useLoginPageController } from "../hooks/useLoginPageController";

const mockNavigate = jest.fn();
const mockDispatch = jest.fn();

jest.mock("react-toastify", () => ({ toast: { success: jest.fn(), error: jest.fn() } }));
jest.mock("react-router-dom", () => ({ useNavigate: jest.fn() }));
jest.mock("@/hooks/auth.hooks", () => ({ useAuthContext: jest.fn() }));
jest.mock("@/api/dummyjsonApi", () => ({ authRequest: jest.fn() }));
jest.mock("@tanstack/react-query", () => ({
  useMutation: jest.fn(),
}));

describe("useLoginPageController hook", () => {
  beforeEach(() => {
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
    (useAuthContext as jest.Mock).mockReturnValue({ dispatch: mockDispatch });
    jest.clearAllMocks();
  });

  it("should successfully log in and navigate to Dashboard", async () => {
    const mockMutate = jest.fn((_, { onSuccess }) => onSuccess({ accessToken: "tokenvalido" }));
    (useMutation as jest.Mock).mockReturnValue({ mutate: mockMutate, isPending: false });

    const { result } = renderHook(() => useLoginPageController());

    act(() => {
      result.current.handleChange({ target: { name: "username", value: "user" } });
      result.current.handleChange({ target: { name: "password", value: "pass" } });
    });

    await act(async () => {
      await result.current.handleSubmit();
    });

    expect(mockMutate).toHaveBeenCalledWith({ username: "user", password: "pass" }, expect.any(Object));
    expect(mockDispatch).toHaveBeenCalled();
    expect(toast.success).toHaveBeenCalledWith("Inicio de sesión exitoso");
    expect(mockNavigate).toHaveBeenCalledWith(PrivateRoutes.Dashboard);
  });

  it("should show error toast on login failure", async () => {
    const mockMutate = jest.fn((_, { onError }) => onError());
    (useMutation as jest.Mock).mockReturnValue({ mutate: mockMutate, isPending: false });

    const { result } = renderHook(() => useLoginPageController());

    act(() => {
      result.current.handleChange({ target: { name: "username", value: "user" } });
      result.current.handleChange({ target: { name: "password", value: "wrongpass" } });
    });

    await act(async () => {
      await result.current.handleSubmit();
    });

    expect(mockDispatch).not.toHaveBeenCalled();
    expect(toast.error).toHaveBeenCalledWith("Credenciales inválidas");
  });
});
