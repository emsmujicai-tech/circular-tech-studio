import { describe, expect, it } from "vitest";
import { content, LANGS } from "@/lib/content";

// Every page renders straight from these dictionaries, so a missing or empty key
// in one language means a blank heading or button for visitors using it.
function paths(value: unknown, prefix = ""): string[] {
  if (Array.isArray(value)) return value.flatMap((v, i) => paths(v, `${prefix}[${i}]`));
  if (value !== null && typeof value === "object") {
    return Object.entries(value as Record<string, unknown>).flatMap(([k, v]) =>
      paths(v, prefix ? `${prefix}.${k}` : k),
    );
  }
  return [prefix];
}

function texts(value: unknown): string[] {
  if (Array.isArray(value)) return value.flatMap(texts);
  if (value !== null && typeof value === "object") {
    return Object.values(value as Record<string, unknown>).flatMap(texts);
  }
  return typeof value === "string" ? [value] : [];
}

const base = paths(content.nb);

describe("Site content", () => {
  it("offers Norsk, English and Bosanski in the language menu", () => {
    expect(LANGS.map((l) => l.code)).toEqual(["nb", "en", "bs"]);
  });

  it("gives every language the same keys as the Norwegian default", () => {
    for (const lang of LANGS) {
      expect(paths(content[lang.code])).toEqual(base);
    }
  });

  it("has no empty or placeholder copy in any language", () => {
    for (const lang of LANGS) {
      for (const text of texts(content[lang.code])) {
        expect(text.trim().length).toBeGreaterThan(0);
        expect(text).not.toMatch(/TODO|Lorem ipsum/);
      }
    }
  });

  it("names Bergen and Stord as the company locations", () => {
    expect(content.nb.footer.locations).toBe("Bergen og Stord, Norge");
    expect(content.en.footer.locations).toBe("Bergen and Stord, Norway");
    expect(content.bs.footer.locations).toBe("Bergen i Stord, Norveška");
  });
});
