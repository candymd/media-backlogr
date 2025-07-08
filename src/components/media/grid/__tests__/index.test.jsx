import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import MediaGrid from "../index";
import { UseCaseProvider } from "../../../../../application/context/UseCaseProvider";

const mockItems = [
  {
    id: 1,
    title: "Test Movie",
    status: "Released",
    director: "Test Director",
    releaseYear: 2021,
    genre: "Test Genre",
    multimedia: [
      {
        url: "https://example.com/image.jpg",
      },
    ],
  },
];

describe("MediaGrid", () => {
  it("should render the grid with the correct items", () => {
    render(
      <UseCaseProvider>
        <MediaGrid type="movie" items={mockItems} />
      </UseCaseProvider>
    );

    const grid = screen.getByRole("grid");
    const card = screen.getAllByRole("card");

    expect(grid).toBeInTheDocument();
    expect(card).toHaveLength(mockItems.length);
    expect(card[0]).toHaveAttribute("aria-label", "Test Movie card");
  });

  it("shows an empty state when there are no items", () => {
    render(
      <UseCaseProvider>
        <MediaGrid type="movie" items={[]} />
      </UseCaseProvider>
    );

    const emptyState = screen.getByText("No movies found. Add your first movie!");
    expect(emptyState).toBeInTheDocument();
  });
});
