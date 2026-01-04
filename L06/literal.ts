type ConversionType = "as-number" | "as-string"; // literal union

function combine(
    num1: number | string,
    num2: number | string,
    conversionType: ConversionType
){
    let result;
    if(typeof num1 === "number" && typeof num2 === "number" || conversionType === "as-number"){
        result = +num1 + +num2; // (The '+' operator converts strings to numbers)
    }
    else{
        result = num1.toString() + num2.toString();
    }
    return result;
}

const sum1 = combine("10", "20", "as-number");
const sum2 = combine(10, 50, "as-number");      
const combinedName = combine("Gyaneshwer", " Jha", "as-string");  
console.log(sum1, sum2, combinedName);