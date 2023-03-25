import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import { Button } from ".";

describe("Button Component", () => {
  it("renders is buttons", () => {
    render(<Button>Comum</Button>);

    const button = screen.getByRole("button", {
      name: /Comum/i,
    });

    expect(button).toBeInTheDocument();
  });
});
