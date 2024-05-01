import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Navbar } from "src/components/Navbar";
import { ShopDataContextProvider } from "src/context";
import { BrowserRouter } from "react-router-dom";

const renderHelper = () => {
  render(
    <BrowserRouter>
      <ShopDataContextProvider>
        <Navbar />
      </ShopDataContextProvider>
    </BrowserRouter>
  );
};

describe("Navbar component", () => {
  const { findByAltText, findByText, findByRole } = screen;

  it("should render logo, home text", async () => {
    renderHelper();
    const homeLink = await findByText(/Home/i);
    const logo = await findByAltText("sports good shop logo");
    expect(homeLink).toBeDefined();
    expect(logo).toBeDefined();
  });

  it("should have the correct link for the home link", async () => {
    renderHelper();
    const homeLink = await findByRole("link", { name: /Home/i });
    expect(homeLink).toHaveAttribute("href", "/");
  });
});
