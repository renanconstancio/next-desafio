import { render, screen } from "@testing-library/react";
import { PriceOf } from "./index";
import "@testing-library/jest-dom";

describe("Price Of", () => {
  it("renders a heading", () => {
    render(<PriceOf price="welcome to next" />);

    const heading = screen.getByRole("none", {
      name: /welcome to next/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
