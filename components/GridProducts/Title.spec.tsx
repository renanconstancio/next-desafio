import { render, screen } from "@testing-library/react";
import { H3Title } from "./index";
import "@testing-library/jest-dom";

describe("Title", () => {
  it("renders a heading", () => {
    render(<H3Title title="welcome to next" />);

    const heading = screen.getByRole("heading", {
      name: /welcome to next/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
