import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { NotificationContext } from "src/context";
import { Notifications } from "src/components/Notifications";

const renderHelper = (type = "success") => {
  vi.spyOn(window.global, "setTimeout");
  vi.spyOn(window.global, "clearTimeout");
  const remove = vi.fn();
  const user = userEvent.setup();
  const notificationCotextValues = {
    notifications: [
      {
        id: "123",
        type,
        title: "INFO",
      },
    ],
    remove,
    notify: () => undefined,
  };
  render(
    <NotificationContext.Provider value={notificationCotextValues}>
      <Notifications />
    </NotificationContext.Provider>
  );
  return { user, remove };
};

describe("Notifications Component", () => {
  const { queryByText, getByRole, getByText } = screen;

  it("should render with correct type, and title", () => {
    renderHelper();
    expect(queryByText("INFO")).toBeDefined();
  });

  it("should evoke 'remove' method when close button is clicked", async () => {
    const { user, remove } = renderHelper();
    await user.click(getByRole("button"));
    expect(remove).toHaveBeenCalledWith("123");
  });

  it("should clear clearTimeout on mouseEnter", async () => {
    const { user } = renderHelper();
    await user.hover(getByText("INFO"));
    expect(clearTimeout).toHaveBeenCalledTimes(1);
  });

  it("should evoke setTimeout on mouseLeave", async () => {
    const { user } = renderHelper();
    await user.unhover(getByRole("log"));
    expect(setTimeout).toHaveBeenCalled();
  });
});
