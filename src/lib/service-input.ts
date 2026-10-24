import { z } from "zod";

export const MAX_PHOTO_BYTES = 5 * 1024 * 1024;
export const serviceInput = z.object({
  description: z.string().trim().max(3000),
  device: z.string().trim().max(100),
  lang: z.enum(["nb", "en", "bs"]),
});

export function validPhoto(bytes: Uint8Array, mime: string) {
  if (mime === "image/jpeg") return bytes[0] === 255 && bytes[1] === 216 && bytes[2] === 255;
  if (mime === "image/png") return bytes[0] === 137 && bytes[1] === 80 && bytes[2] === 78 && bytes[3] === 71;
  if (mime === "image/webp") return String.fromCharCode(...bytes.slice(0, 4)) === "RIFF" && String.fromCharCode(...bytes.slice(8, 12)) === "WEBP";
  return false;
}