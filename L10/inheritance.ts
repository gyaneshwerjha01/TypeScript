class Department {
  private employees: string[] = [];
  constructor(public id: string, public name: string) {}

  describe(this: Department): void {
    console.log(`Department ${this.name}`);
  }

  addEmployee(emp: string): void {
    this.employees.push(emp);
  }

  printEmployee(): void {
    console.log(`Number of employees : ${this.employees.length}`);
    console.log(this.employees);
  }
}

class AccountingDepartment extends Department {
  private reports: string[] = [];
  constructor(id: string) {
    super(id, "Accounting");
  }

  addReports(text: string): void {
    this.reports.push(text);
  }

  addEmployee(emp: string): void {
    super.addEmployee(emp);
  }

  get getReports(): string[] {
    if (this.reports.length > 0) return this.reports;
    throw new Error("Report not found.");
  }

  set setReports(value: string) {
    if (!value) throw new Error("Please pass valid value.");
    this.reports.push(value);
  }
}

const accDep = new AccountingDepartment("d1");
accDep.addReports("Bugs");
console.log(accDep.getReports);
accDep.setReports = "Code reivew error";
console.log(accDep.getReports);
accDep.addEmployee("Nikhil");
console.log(accDep.printEmployee());
