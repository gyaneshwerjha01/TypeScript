enum Role{
    ADMIN,
    AUTHOR,
    READ_ONLY_USER
}

const person : {
    name: string;
    age: number;
    skills: string[];
    product: any[]
    role: Role
} = {
    name: "Gyaneshwer",
    age: 21,
    skills: ["React", "Node"],
    product: [10, "Mackbook Air M2"],
    role: Role.READ_ONLY_USER
}

if(person.role === Role.AUTHOR){
    console.log("Author");
}
else if(person.role === Role.ADMIN){
    console.log("Admin");
}
else if(person.role === Role.READ_ONLY_USER){
    console.log("Read user only");
}