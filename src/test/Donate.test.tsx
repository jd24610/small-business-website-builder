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
    const button100 = screen.getByRole("button", { name: "$100" });
    const button250 = screen.getByRole("button", { name: "$250" });
    expect(button100).toBeInTheDocument();
    expect(button250).toBeInTheDocument();

    // Click $250 preset and verify
    fireEvent.click(button250);
    expect(screen.getByRole("button", { name: /Donate \$250/i })).toBeInTheDocument();

    // Test custom input
    const input = screen.getByPlaceholderText("Enter amount");
    fireEvent.change(input, { target: { value: "350" } });
    expect(screen.getByRole("button", { name: /Donate \$350/i })).toBeInTheDocument();
  });
});
