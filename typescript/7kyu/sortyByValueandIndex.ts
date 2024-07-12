export function sortByValueAndIndex(
  array: number[]
): number[] {
  return array
    .map((number, index) => ({
      value: number,
      key: number * (index + 1),
    }))
    .sort((a, b) => a.key - b.key)
    .map((pair) => pair.value);
}
