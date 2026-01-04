function add(num1: number, num2: number, printResult: boolean, someText: string) : number | void{
    const result = num1 + num2;
    if(printResult){
        console.log(`${someText} ${result}`);
    }
    else{
        return result;
    }
}

const n1: number = 20;
const n2: number = 200;
const printResult: boolean = true;
const someText: string = "Sum of two number is = ";

add(n1, n2, printResult, someText);
const result = add(n1, n2, false, someText);
console.log(result);


