import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { Button } from "src/components/Button";

const renderHelper = () => {
  const user = userEvent.setup();
  let onClick = vi.fn();
  render(<Button text="Hello" onClick={onClick} icon={<>icon</>} />);
  return { user, onClick };
};

describe("Button component", () => {
  const { getByRole, queryByText } = screen;

  it("should render text, icon", () => {
    renderHelper();
    expect(queryByText("Hello")).toBeDefined();
    expect(queryByText("icon")).toBeDefined();
  });

  it("should invoke 'onClick' when clicked", async () => {
    const { user, onClick } = renderHelper();
    await user.click(getByRole("button"));

    expect(onClick).toBeCalled();
  });
});
