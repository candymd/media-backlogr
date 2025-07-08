import { describe, it, expect, beforeEach, afterAll } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Topbar from "../index.jsx";

describe("Topbar", () => {
  it("should render", () => {
    render(
      <MemoryRouter>
        <Topbar />
      </MemoryRouter>
    );

    const topbar = screen.getByRole("banner");
    const logo = screen.getByRole("link", { name: "Home" });
    const gamesLink = screen.getByRole("link", { name: "Games" });
    const moviesLink = screen.getByRole("link", { name: "Movies" });

    expect(topbar).toBeInTheDocument();
    expect(logo).toBeInTheDocument();
    expect(gamesLink).toBeInTheDocument();
    expect(moviesLink).toBeInTheDocument();
  });
});
