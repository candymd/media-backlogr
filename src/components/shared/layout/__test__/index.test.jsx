import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import Layout from "../index.jsx";

describe("Layout", () => {
  it("should render", () => {
    const defaultProps = {
      children: <p>Test</p>,
    };

    render(<Layout {...defaultProps} />);
    
    const layout = screen.getByRole("main");
    const content = screen.getByText("Test");

    expect(layout).toBeInTheDocument();
    expect(content).toBeInTheDocument();
  });
});
