export default function cn(...parts: Array<string | false | null | undefined | number>) {
  return parts.filter(Boolean).join(" ");
}
