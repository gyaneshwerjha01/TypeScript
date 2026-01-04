let favouriteLanguage1: string[] = ["Hindi", "English"];
// favouriteLanguage1.push(21); // error

let favouriteLanguage2: any[] = ["Hindi", "English", 21];
// console.log(favouriteLanguage2);

const person :{
    name: string;
    age: number;
    skill: string[];
    product: [number, string] // index 0 = number, index 1 = string
} = {
    name: "Gyaneshwer",
    age: 21,
    skill: ["React", "Node"],
    product : [10, "Mackbook M2"]
};

console.log(person);