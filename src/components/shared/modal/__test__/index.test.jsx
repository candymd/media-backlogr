import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import Modal from "../index.jsx";

describe("Modal", () => {
  it("should render with props", () => {
    const defaultProps = {
      open: true,
      onClose: vi.fn(),
      children: <p>Test</p>,
      header: "header",
    };

    render(<Modal {...defaultProps} />);

    const modal = screen.getByRole("dialog");
    const content = screen.getByText("Test");
    const header = screen.getByRole("heading", { name: "header" });

    expect(modal).toBeInTheDocument();
    expect(content).toBeInTheDocument();
    expect(header).toBeInTheDocument();
  });

  it("should not render when open is false", () => {
    const defaultProps = {
      open: false,
      onClose: vi.fn(),
      children: <p>Test</p>,
      header: "header",
    };

    render(<Modal {...defaultProps} />);

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
