import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Products } from "src/components/Products";
import { BrowserRouter } from "react-router-dom";

const products = [
  {
    productId: 1,
    productName: "test name",
    productDescription: "description123",
    productImage: "/img456.jpg",
    price: 2,
  },
];

const renderHelper = () => {
  render(
    <BrowserRouter>
      <Products products={products} />
    </BrowserRouter>
  );
};

describe("Products component", () => {
  const { findByText, findByRole } = screen;

  it("should render logo, home text", async () => {
    renderHelper();
    const img = await findByRole("img");
    expect(img).toHaveAttribute("src", "/img456.jpg");

    const description = await findByText("description123");
    expect(description).toBeDefined();

    const name = await findByText("test name");
    expect(name).toBeDefined();
  });
});
