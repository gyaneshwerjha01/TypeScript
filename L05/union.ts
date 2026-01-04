function combine(num1: number | string, num2: number | string) : number | string{
    let result;
    if(typeof num1 === "number" && typeof num2 === "number"){
        result = num1 + num2;
    }
    else{
        result = num1.toString() + num2.toString();
    }
    return result;
}

const sum = combine(10, 20);
const combinedName = combine("Gyaneshwer", "Jha");
console.log(sum, combinedName);