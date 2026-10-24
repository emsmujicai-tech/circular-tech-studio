import { describe, expect, it } from "vitest";
import { MAX_PHOTO_BYTES, serviceInput, validPhoto } from "@/lib/service-input";

describe("Service enquiry validation", () => {
  it("accepts a real device fault description", () => {
    expect(serviceInput.parse({ device: "Electric scooter", description: "Will not charge", lang: "nb" }).description).toBe("Will not charge");
  });
  it("rejects oversized descriptions", () => {
    expect(serviceInput.safeParse({ device: "Laptop", description: "x".repeat(3001), lang: "nb" }).success).toBe(false);
  });
  it("rejects fake image content", () => { expect(validPhoto(new Uint8Array([60, 115, 99, 114]), "image/png")).toBe(false); });
  it("accepts jpeg signatures and caps uploads at 5 MB", () => { expect(validPhoto(new Uint8Array([255, 216, 255]), "image/jpeg")).toBe(true); expect(MAX_PHOTO_BYTES).toBe(5242880); });
});