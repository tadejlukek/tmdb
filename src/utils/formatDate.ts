export default function formatDate(string: string): string {
  const date: Date = new Date(string);

  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}
