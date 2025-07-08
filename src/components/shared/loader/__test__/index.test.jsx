import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import Loader from "../index.jsx";

describe("Loader", () => {
  it("should render", () => {
    render(<Loader />);

    const loader = screen.getByRole("status");

    expect(loader).toBeInTheDocument();
  });
});
