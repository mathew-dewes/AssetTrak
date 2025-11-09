export function formatCasing(value: string): string {
  return value
    .toLowerCase()
    .replace(/_/g, " ")
    .replace(/^./, c => c.toUpperCase());
}