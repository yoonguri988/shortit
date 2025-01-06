import { createHmac } from "crypto";

export default function createShortURL(url) {
  const hash = createHmac("sha256", process.env.NEXT_PUBLIC_KEY)
    .update(url + Date.now())
    .digest("hex");
  return hash.slice(0, 6);
}
