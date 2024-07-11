export function gettingMad(array: number[]): number {
  let res: number[] = [];
  array.forEach((num, index) => {
    array.forEach((val, pos) => {
      if (index != pos) {
        res.push(Math.abs(num - val));
      }
    }, 0);
  });

  return Math.min(...res);
}
