import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "../components/Header";

describe("Header Component", () => {
  it("renders main navigation links correctly", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    // Verify presence of links
    expect(screen.getByText("About Us")).toBeInTheDocument();
    expect(screen.getByText("Our Mission")).toBeInTheDocument();
    expect(screen.getByText("Our Impact")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
    expect(screen.getByText("Buy Tickets")).toBeInTheDocument();
    expect(screen.getByText("Donate")).toBeInTheDocument();
  });

  it("renders Logo and branding", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByAltText("TFTH Logo")).toBeInTheDocument();
    expect(screen.getByText("Transition From The Hearts")).toBeInTheDocument();
  });
});
