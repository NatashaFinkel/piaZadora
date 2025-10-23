import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import RentReceipt from "../components/RentReceipt";

describe("Rent receipt", () => {
  it("must render correctly", () => {
    render(<RentReceipt />);
    const element = screen.getByRole("heading", {
      name: /quittance de loyer/i,
    });
    expect(element).toBeInTheDocument();
  });

  it("must have: id, adress, postcode, landlord name, tenant name, total-sum-in-words", async () => {
    render(<RentReceipt />);
    const element = document.querySelector(".quittance-container");

    expect(element.id).not.toBeNull();
    expect(element.id).not.toBe("");

    const address = document.getElementById("address");
    const postcode = document.getElementById("postcode");
    const landlordName = document.getElementById("landlord-name");
    const tenantName = document.getElementById("tenant-name");
    const totalSumInWords = document.getElementById("total-sum-in-words");

    // on attend que le composant soit généré pour que les différents contenus textuels existent
    await waitFor(() => {
      if (!address) throw new Error("element not found yet");
      if (address.textContent.trim() === "") throw new Error("text empty yet");

      if (!postcode) throw new Error("postCode not found yet");
      if (postcode.textContent.trim() === "") throw new Error("text empty yet");

      if (!landlordName) throw new Error("postCode not found yet");
      if (landlordName.textContent.trim() === "")
        throw new Error("text empty yet");

      if (!tenantName) throw new Error("postCode not found yet");
      if (tenantName.textContent.trim() === "")
        throw new Error("text empty yet");

      if (!totalSumInWords) throw new Error("postCode not found yet");
      if (totalSumInWords.textContent.trim() === "")
        throw new Error("text empty yet");
    });

    expect(address.textContent).not.toBeNull();
    expect(address.textContent.trim()).not.toBe("");

    expect(postcode.textContent).not.toBeNull();
    expect(postcode.textContent.trim()).not.toBe("");

    expect(landlordName.textContent).not.toBeNull();
    expect(landlordName.textContent.trim()).not.toBe("");

    expect(tenantName.textContent).not.toBeNull();
    expect(tenantName.textContent.trim()).not.toBe("");

    expect(totalSumInWords.textContent).not.toBeNull();
    expect(totalSumInWords.textContent.trim()).not.toBe("");
  });
});
