type Admin = { name: string; privilages: string[] };
type Employee = { name: string; startDate: Date };
type UnknownEmployee = Employee | Admin;

const emp1: Admin & Employee = {
  name: "Gyaneshwer",
  privilages: ["create-server"],
  startDate: new Date(),
};

function printEmployeeInformation(emp: UnknownEmployee): void {
  console.log("Name: ", emp.name);
  if ("privilages" in emp) {
    console.log("Privilages: ", emp.privilages);
  }
  if ("startDate" in emp) {
    console.log("Start Date: ", emp.startDate);
  }
}

printEmployeeInformation(emp1);
