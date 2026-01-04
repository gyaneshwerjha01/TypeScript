abstract class Department3 {
  name: string;
  protected employees: string[] = [];
  protected readonly id: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  abstract describe(this: Department3): void;
  abstract displayName(): void;
}

class Accounting extends Department3 {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  describe(this: Accounting): void {
    console.log(`Department: ${this.id}`);
  }

  displayName(): void {
    console.log(this.name);
  }
}

const acc = new Accounting("D1", []);
acc.describe();
acc.displayName();
