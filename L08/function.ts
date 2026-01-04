function add(num1: number, num2: number): number {
  return num1 + num2;
}

function greet(name: string): void {
  console.log(`Hi, ${name}`);
}

let combineFunction: (a: number, b: number) => number; // define function type
combineFunction = add;
//console.log(combineFunction(100, 200));

type CB = (n: number) => void;

function addHandle(num1: number, num2: number, cb: CB): void {
  const result: number = num1 + num2;
  cb(result);
}

addHandle(10, 20, (result: number) => {
  console.log(result);
});
