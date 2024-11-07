function total(a: number = 20, b: number = 10): number {
  return a + b;
}
total();

function format(
  title: string,
  description: string,
  amount: string | number
): string {
  return `${title} + ${description} +  ${amount}`;
}

format("xoiminhhat", "frontenddev", "haha"); // xoiminhnhat frontenddev 20

// function handleuUpdateArr(
//   numbers: number[],
//   update: (n: number) => number
// ): number[] {
//   return numbers.map((item) => update(item));
// }
function handleUpdateArr(
  numbers: number[],
  update: (n: number) => number
): number[] {
  return numbers.map((item) => {
    return update(item); // Trả về kết quả của update(item)
  });
}

handleUpdateArr([1, 2, 3, 4, 5], (n) => n * 5);
