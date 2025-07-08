import { render, screen } from "@testing-library/react";
import MediaCard from "../index";
import { describe, it, expect } from "vitest";

describe("MediaCard", () => {
  const mockItem = {
    title: "Example Title",
    status: "Released",
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
    expect(screen.getByText(/released/i)).toBeInTheDocument();
  });

  it("returns null if item is not provided", () => {
    const { container } = render(<MediaCard type="movie" item={null} />);
    expect(container.firstChild).toBe(null);
  });

  it("returns null if type is not valid", () => {
    const { container } = render(<MediaCard type="invalid" item={mockItem} />);
    expect(container.firstChild).toBe(null);
  });
});
