import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { PriceOf } from "./index";

describe("Price Of", () => {
  it("renders a heading", () => {
    render(<PriceOf price="welcome to next" />);

    screen.getByText("welcome to next");

    // expect(screen).toHaveTextContent("welcome to next");
  });
});
