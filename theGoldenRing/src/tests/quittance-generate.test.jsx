import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

// eslint-disable-next-line no-unused-vars
import RentReceipt from "../components/RentReceipt";

describe("Rent receipt", () => {
  it("renders the rent receipt correctly", () => {
    render(<RentReceipt />);
    const element = screen.getByRole("heading", {
      name: /quittance de loyer/i,
    });
    expect(element).toBeInTheDocument();
  });
});
