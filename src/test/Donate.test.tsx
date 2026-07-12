import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Donate from "../components/Donate";

describe("Donate Component", () => {
  it("renders donation header and mission text", () => {
    render(<Donate />);
    expect(screen.getByText("Support Our Mission")).toBeInTheDocument();
    expect(screen.getByText("Make a Donation")).toBeInTheDocument();
  });

  it("allows selecting custom or preset amounts", () => {
    render(<Donate />);
    
    // Check preset buttons
    const button50 = screen.getByRole("button", { name: "$50" });
    const button100 = screen.getByRole("button", { name: "$100" });
    expect(button50).toBeInTheDocument();
    expect(button100).toBeInTheDocument();

    // Click $100 preset and verify
    fireEvent.click(button100);
    expect(screen.getByRole("button", { name: /Donate \$100/i })).toBeInTheDocument();

    // Test custom input
    const input = screen.getByPlaceholderText("Enter amount");
    fireEvent.change(input, { target: { value: "350" } });
    expect(screen.getByRole("button", { name: /Donate \$350/i })).toBeInTheDocument();
  });
});
