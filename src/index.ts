export function sum(a: number, b: number): number {
  return a + b;
}

if (require.main === module) {
  console.log('Soma:', sum(2, 3));
}
