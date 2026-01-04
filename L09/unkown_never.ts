let userInput: unknown = 10;
userInput = "Gyaneshwer";

let userName: string;
// userName = userInput;
userName = "";
if (typeof userInput === "string") {
  userName = userInput;
}

// console.log(userName);

function generateError(message: string, code: number): never {
  throw { message: message, statusCode: code };
}

const res = generateError("Internal server error", 500); // Never reached
console.log(10); // Unreachable code
