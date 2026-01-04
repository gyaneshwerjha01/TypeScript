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

const accounting = new Department("3", "Accounting");
accounting.describe();
accounting.addEmployee("Gyaneshwer");
accounting.addEmployee("Rohan");
accounting.printEmployee();
