import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { Modal } from "src/components/Modal";

const renderHelper = () => {
  const user = userEvent.setup();
  let setIsOpen = vi.fn();
  render(
    <Modal isOpen={true} setIsOpen={setIsOpen} title="Test Modal">
      <>Content</>
    </Modal>
  );
  return { user, setIsOpen };
};

describe("Modal component", () => {
  const { getByRole, queryByText, getByLabelText } = screen;

  it("should display title", () => {
    renderHelper();
    expect(queryByText("Test Modal")).toBeDefined();
  });

  it("should close modal when icon clicked", async () => {
    const { user, setIsOpen } = renderHelper();

    const modal = getByRole("button");
    await user.click(modal);

    expect(setIsOpen).toBeCalledWith(false);
  });

  it("should close modal when backdrop clicked", async () => {
    const { user, setIsOpen } = renderHelper();

    const backdrop = getByLabelText("Modal Backdrop");
    await user.click(backdrop);

    expect(setIsOpen).toBeCalledWith(false);
  });
});
