import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import MediaForm from "../index";
import { UseCaseProvider } from "../../../../../application/context/UseCaseProvider";

describe("MediaForm", () => {
  it("should render", () => {
    const defaultProps = {
      onSubmit: vi.fn(),
      type: "movie",
      initialData: {},
      isEditing: false,
    };

    render(
      <UseCaseProvider>
        <MediaForm {...defaultProps} />
      </UseCaseProvider>
    );

    const form = screen.getByRole("form");
    expect(form).toBeInTheDocument();
  });
});
