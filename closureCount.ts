export function counter(): Function {
  let count = 0;
  return (): number => {
    count = count + 1;
    return count;
  };
}
