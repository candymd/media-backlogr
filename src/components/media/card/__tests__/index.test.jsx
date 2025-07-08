import { render, screen } from "@testing-library/react";
import MediaCard from "../index";
import { describe, it, expect } from "vitest";

describe("MediaCard", () => {
  const mockItem = {
    title: "Example Title",
    status: "completed",
    platform: "Netflix",
    releaseYear: 2023,
    multimedia: [
      {
        url: "https://example.com/image.jpg",
      },
    ],
  };

  it('renders correctly with type "movie"', () => {
    render(<MediaCard type="movie" item={mockItem} />);

    const image = screen.getByRole("img", { name: /example title/i });

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", mockItem.multimedia[0].url);
    expect(screen.getByText(/example title \(2023\)/i)).toBeInTheDocument();
    expect(screen.getByText(/completed/i)).toBeInTheDocument();
  });

  it("returns null if item is not provided", () => {
    const { container } = render(<MediaCard type="movie" item={null} />);
    expect(container.firstChild).toBe(null);
  });

  it("returns null if type is not valid", () => {
    const { container } = render(<MediaCard type="invalid" item={mockItem} />);
    expect(container.firstChild).toBe(null);
  });

  describe(" --> StatusBadge", () => {
    it("renders status badge with correct status", () => {
      render(<MediaCard type="movie" item={mockItem} />);

      const statusBadge = screen.getByText(/completed/i);

      expect(statusBadge).toBeInTheDocument();
      expect(statusBadge).toHaveClass("bg-status-success");
    });

    it("does not render status badge if status is not provided", () => {
      const itemWithoutStatus = { ...mockItem, status: null };

      render(<MediaCard type="movie" item={itemWithoutStatus} />);

      expect(screen.queryByText(/completed/i)).not.toBeInTheDocument();
    });
  });
});
