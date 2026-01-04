type Combinable = number | string;
type ConversionType = "as-number" | "as-string";

function combine(
  num1: Combinable,
  num2: Combinable,
  conversionType: ConversionType
): number | string {
  let result;
  if (
    (typeof num1 === "number" && typeof num2 === "number") ||
    conversionType === "as-number"
  ) {
    result = +num1 + +num2;
  } else {
    result = num1.toString() + num2.toString();
  }
  return result;
}

type User = {
  name: string;
  age: number;
  skills: string[];
};

const user: User = {
  name: "Gyaneshwer",
  age: 22,
  skills: ["React", "Node"],
};

function greet(user: User): void {
  console.log(`Hi, I am ${user.name}`);
}

greet(user);
