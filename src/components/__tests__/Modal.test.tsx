import { render, screen, fireEvent, act, RenderResult } from "@testing-library/react";
import { Modal } from "../Modal/Modal";

const onCloseMock = jest.fn();

const renderComponent = async (isOpen: boolean = false): Promise<RenderResult> => {
  const component = await act(async () =>
    render(
      <Modal isOpen={isOpen} onClose={onCloseMock}>
        <div>Modal Content</div>
      </Modal>,
    ),
  );
  return component;
};

describe("Modal Component", () => {
  const modalRoot = document.createElement("div");
  modalRoot.setAttribute("id", "modal-root");
  document.body.appendChild(modalRoot);

  afterEach(() => {
    onCloseMock.mockClear();
  });

  it("should not render when isOpen is false", async () => {
    await renderComponent();
    expect(screen.queryByText("Modal Content")).toBeNull();
  });

  it("should render when isOpen is true", async () => {
    await renderComponent(true);
    expect(screen.getByText("Modal Content")).toBeInTheDocument();
  });

  it("should call onClose when clicking on the overlay", async () => {
    await renderComponent(true);
    fireEvent.click(screen.getByText("Modal Content").parentElement!);
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });
});
