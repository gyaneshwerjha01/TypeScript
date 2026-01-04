1\. Primitives: Number, String, Boolean
---------------------------------------

TypeScript enforces types for basic JavaScript primitives. This prevents errors at compile-time.

### Example: Typed Function with Primitives

TypeScript

```
function add(num1: number, num2: number, printResult: boolean, someText: string): number | void {
  const result = num1 + num2;
  if (printResult) {
    console.log(`${someText} ${result}`);
  } else {
    return result;  // Returns number if not printing
  }
}

const n1: number = 20;
const n2: number = 200;
const printResult: boolean = true;
const someText: string = "Sum of two numbers is = ";

add(n1, n2, printResult, someText);  // Output: "Sum of two numbers is = 220"
const sum = add(10, 20, false, "");  // Returns 30 (no console log)
console.log(sum);  // Output: 30
```

**Explanation**:

-   Parameters are explicitly typed (e.g., number for nums).
-   Return type is number | void (union type) since it may return a number or nothing.
-   TypeScript infers types for variables like n1 but you can annotate for clarity.

* * * * *

2\. Objects
-----------

Objects are typed using inline types or interfaces (covered later). Nested objects are supported.

### Example: Typed Object

TypeScript

```
const person: {
  firstName: string;
  age: number;
  xyz: {
    address: string;
  };
} = {
  firstName: "Patel",
  age: 21,
  xyz: {
    address: "Mumbai",
  },
};

console.log(person);  // Output: { firstName: 'Patel', age: 21, xyz: { address: 'Mumbai' } }
```

**Explanation**:

-   The type defines exact structure; adding extra properties or wrong types causes errors.
-   Useful for simple, one-off objects.

* * * * *

3\. Arrays and Tuples
---------------------

-   **Arrays**: Homogeneous collections (e.g., all strings).
-   **Tuples**: Fixed-length arrays with specific types per index (heterogeneous).

### Example: Arrays

TypeScript

```
let favouriteLanguage1: string[] = ["Hindi", "English"];  // Strict: only strings
// favouriteLanguage1.push(21);  // Error: Type 'number' is not assignable to type 'string'

let favouriteLanguage2: any[] = ["Hindi", "English", 21, true];  // Loose typing (avoid if possible)
console.log(favouriteLanguage2);  // Output: ['Hindi', 'English', 21, true]
```

### Example: Tuples with Object

TypeScript

```
const person: {
  name: string;
  age: number;
  skills: string[];
  product: [number, string];  // Tuple: index 0 = number, index 1 = string
} = {
  name: "Patel",
  age: 21,
  skills: ["React", "Node"],
  product: [10, "Macbook M2"],  // Valid
};

// person.product = [10, "Macbook M2", "Extra"];  // Error: Tuple length must be 2
// person.product[1] = 20;  // Error: Type 'number' not assignable to 'string'
console.log(person.product);  // Output: [10, 'Macbook M2']
```

**Explanation**:

-   string[] ensures all elements are strings.
-   any[] bypasses checks (use sparingly).
-   Tuples enforce length and types, ideal for structured data like coordinates [x: number, y: number].

* * * * *

4\. Enums
---------

Enums define named constants, useful for fixed sets of values (e.g., roles).

### Example: Enums in Object

TypeScript

```
enum Role {
  ADMIN,          // 0
  AUTHOR,         // 1
  READ_USER_ONLY, // 2
}

const person = {
  name: "Patel",
  age: 21,
  skills: ["React", "Node"],
  product: [10, "Macbook Air M2"] as const,  // 'as const' for literal types
  role: Role.READ_USER_ONLY,
};

if (person.role === Role.AUTHOR) {
  console.log("Author");
} else if (person.role === Role.ADMIN) {
  console.log("Admin");
} else if (person.role === Role.READ_USER_ONLY) {
  console.log("Read user only");  // Output: "Read user only"
}
```

**Explanation**:

-   Enums auto-assign numbers starting from 0.
-   Use for readable code; compare with === for exact matches.

* * * * *

5\. Union Types ()
------------------

Unions allow a value to be one of several types.

### Example: Union in Function

TypeScript

```
function combine(num1: number | string, num2: number | string): number | string {
  let result;
  if (typeof num1 === "number" && typeof num2 === "number") {
    result = num1 + num2;  // Numeric addition
  } else {
    result = num1.toString() + num2.toString();  // String concatenation
  }
  return result;
}

const sum = combine(10, 20);  // 30 (number)
const combinedName = combine("Patel", " MernStack");  // "Patel MernStack" (string)
console.log(sum, combinedName);  // Output: 30 "Patel MernStack"
```

**Explanation**:

-   number | string means the param can be either.
-   Use typeof checks inside to narrow types safely.

* * * * *

6\. Literal Types
-----------------

Literals restrict unions to specific values (e.g., exact strings).

### Example: Literal with Union

TypeScript

```
type ConversionType = "as-number" | "as-string";  // Literal union

function combine(
  num1: number | string,
  num2: number | string,
  conversionType: ConversionType
): number | string {
  let result;
  if (typeof num1 === "number" && typeof num2 === "number" || conversionType === "as-number") {
    result = +num1 + +num2;  // Coerce to number
  } else {
    result = num1.toString() + num2.toString();
  }
  return result;
}

const sum1 = combine("10", "20", "as-number");  // 30 (number)
const sum2 = combine(10, 50, "as-number");      // 60 (number)
const combinedName = combine("Patel", " MernStack", "as-string");  // "Patel MernStack" (string)
console.log(sum1, sum2, combinedName);  // Output: 30 60 "Patel MernStack"
```

**Explanation**:

-   "as-number" | "as-string" only allows these exact strings.
-   Enhances type safety for flags/modes.

* * * * *

7\. Type Aliases
----------------

Custom types via type for reusability (e.g., unions, objects).

### Example: Type Aliases for Unions and Objects

TypeScript

```
type Combinable = number | string;
type ConversionType = "as-number" | "as-string";

function combine(
  num1: Combinable,
  num2: Combinable,
  conversionType: ConversionType
): number | string {
  // Same logic as above
  let result;
  if (typeof num1 === "number" && typeof num2 === "number" || conversionType === "as-number") {
    result = +num1 + +num2;
  } else {
    result = num1.toString() + num2.toString();
  }
  return result;
}

type User = {
  name: string;
  age: number;
  skills: string[];
};

const user: User = {
  name: "Patel",
  age: 22,
  skills: ["React", "Node"],
};

function greet(user: User): void {
  console.log(`Hi, I am ${user.name}`);  // Output: "Hi, I am Patel"
}

greet(user);
```

**Explanation**:

-   type creates reusable aliases.
-   Great for complex unions or object shapes.

* * * * *

8\. Function Return Types and Callbacks
---------------------------------------

Specify exact return types. Use function types for variables/callbacks.

### Example: Return Types and Callbacks

TypeScript

```
function add(num1: number, num2: number): number {
  return num1 + num2;  // Explicit return type
}

function greet(name: string): void {
  console.log(`Hi, ${name}`);
}

// Function type for variables (good practice)
let combineFunction: (a: number, b: number) => number;
combineFunction = add;  // Valid assignment
console.log(combineFunction(100, 200));  // Output: 300

// Callback type
type CB = (n: number) => void;

function addHandle(num1: number, num2: number, cb: CB): void {
  const result = num1 + num2;
  cb(result);
}

addHandle(10, 20, (result: number) => {
  console.log(result);  // Output: 30
});
```

**Explanation**:

-   : void means no return (but can have side effects like console.log).
-   (a: number, b: number) => number is a function signature type.
-   Callbacks pass functions as args for event-like behavior.

* * * * *

9\. Unknown and Never Types
---------------------------

-   unknown: Safer than any---must narrow before use.
-   never: For functions that never return (e.g., throw errors).

### Example: Unknown Type

TypeScript

```
let userInput: unknown = 10;
userInput = "Patel";  // Can assign anything

let userName: string;
// userName = userInput;  // Error: 'unknown' not assignable to 'string'

// Narrow with type guard
if (typeof userInput === "string") {
  userName = userInput;
}
console.log(userName);  // Output: "Patel" (if narrowed)
```

### Example: Never Type

TypeScript

```
function generateError(message: string, code: number): never {
  throw { message: message, statusCode: code };
}

const res = generateError("Internal server error", 500);  // Never reached
console.log(res);  // Unreachable code
```

**Explanation**:

-   unknown forces runtime checks.
-   never signals exhaustive cases or infinite loops.

* * * * *

10\. Classes
------------

Classes in TypeScript add type safety to JS classes.

### Example: Basic Class

TypeScript

```
class Department {
  constructor(public name: string, private employees: string[]) {
    // Shorthand: auto-assigns to properties
  }

  describe(this: Department): void {
    console.log(`Department: ${this.name}`);
  }

  addEmployee(emp: string): void {
    this.employees.push(emp);
  }

  printEmployeeInformation(): void {
    console.log(`Number of employees: ${this.employees.length}`);
    console.log(this.employees);
  }
}

const accounting = new Department("Accounting", []);
accounting.describe();  // Output: "Department: Accounting"
accounting.addEmployee("Patel");
accounting.addEmployee("Shivani");
accounting.printEmployeeInformation();  // Output: Number of employees: 2 \n ['Patel', 'Shivani']
```

### Access Modifiers

-   public: Default, accessible everywhere.
-   private: Only within class.
-   protected: Within class and subclasses.
-   readonly: Immutable after init.

### Example: Readonly and Protected

TypeScript

```
class Department {
  public name: string;
  protected employees: string[] = [];
  private readonly id: string;

  constructor(id: string, name: string) {
    this.name = name;
    this.id = id;  // Can only set once
    // this.id = "new";  // Error if set again
  }

  // ... other methods
}
```

### Inheritance and Overrides

TypeScript

```
class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");  // Call parent constructor
  }

  addReports(text: string): void {
    this.reports.push(text);
  }

  // Override parent method
  addEmployee(emp: string): void {
    if (emp === "Patel") return;  // Custom logic
    super.addEmployee(emp);  // Call parent
  }

  // Getter/Setter
  get getReports(): string[] {
    if (this.reports.length > 0) return this.reports;
    throw new Error("Report not found.");
  }

  set setReports(value: string) {
    if (!value) throw new Error("Please pass valid value.");
    this.reports.push(value);
  }
}

const accDep = new AccountingDepartment("d1", []);
accDep.addReports("Bugs");
console.log(accDep.getReports);  // Output: ['Bugs']
accDep.setReports = "Code review error";
console.log(accDep.getReports);  // Output: ['Bugs', 'Code review error']
```

**Explanation**:

-   super() calls parent.
-   Getters/setters act like properties but with logic.
-   Overrides must match signature.

### Static Methods

Accessible on class, not instances.

TypeScript

```
class Department2 {
  // ... other code

  static getSalary(): { salary: number } {
    return { salary: 500000 };
  }
}

const salary = Department2.getSalary();  // No instance needed
console.log(salary);  // Output: { salary: 500000 }
```

### Abstract Classes

Blueprints for subclasses---can't instantiate directly.

TypeScript

```
abstract class Department3 {
  name: string;
  protected employees: string[] = [];
  protected readonly id: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  abstract describe(this: Department3): void;  // Must implement in subclass
  abstract displayName(): void;
}

class Subclass extends Department3 {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  describe(): void {
    console.log(`Department: ${this.id}`);
  }

  displayName(): void {
    console.log(this.name);
  }
}

const subClass = new Subclass("D1", []);
subClass.describe();  // Output: "Department: D1"
subClass.displayName();  // Output: "Accounting"
```

**Explanation**: abstract enforces implementation in children.

* * * * *

11\. Interfaces
---------------

Interfaces define contracts for objects/classes. More flexible than types for OOP.

### Example: Basic Interface

TypeScript

```
interface Person {
  name: string;
  age: number;
  greet(text: string): void;
}

let user: Person = {
  name: "Patel",
  age: 21,
  greet(text: string): void {
    console.log(`${text} ${this.name}`);
  },
};

user.greet("Hi there, I am ");  // Output: "Hi there, I am Patel"
```

### Implementing in Class

TypeScript

```
interface Greetable {
  name: string;
  greet(text: string): void;
}

class Person implements Greetable {
  constructor(public name: string) {}

  greet(text: string): void {
    console.log(`${text}, ${this.name}`);
  }
}

const p1 = new Person("Aman");
p1.greet("Hi there I am");  // Output: "Hi there I am, Aman"
```

### Readonly and Optional

TypeScript

```
interface Named {
  readonly name: string;  // Immutable
  outputName?: string;    // Optional (?)
}

class Person implements Named {
  constructor(public name: string) {}
  // name = "New";  // Error: readonly
}

let user1: Named = new Person("Patel");
// user1.name = "Changed";  // Error
console.log(user1);  // Output: { name: 'Patel' }
```

### Extending Interfaces

TypeScript

```
interface Named {
  readonly name: string;
}

interface Greetable extends Named {
  greet(text: string): void;
}

class Person implements Greetable {
  constructor(public name: string) {}

  greet(text: string): void {
    console.log(`${text}, ${this.name}`);
  }
}

let user1: Greetable = new Person("Patel");
console.log(user1);  // Output: { name: 'Patel' }
```

### Function Interfaces

TypeScript

```
interface AddFun {
  (a: number, b: number): number;  // Function signature
}

let add: AddFun;

add = (n1: number, n2: number) => n1 + n2;
console.log(add(10, 20));  // Output: 30
```

**Explanation**:

-   Interfaces for shape enforcement.
-   implements for classes; extend for composition.
-   Optional ? and readonly add flexibility/safety.

* * * * *

12\. Type Guards
----------------

Narrow union types at runtime.

### Example 1: in Keyword

TypeScript

```
type Admin = { name: string; privileges: string[] };
type Employee = { name: string; startDate: Date };
type UnknownEmployee = Employee | Admin;

const emp1: Admin & Employee = {  // Intersection
  name: "Patel MernStack",
  privileges: ["create-server"],
  startDate: new Date(),
};

function printEmployeeInformation(emp: UnknownEmployee): void {
  console.log("Name:", emp.name);

  if ("privileges" in emp) {  // Type guard: narrows to Admin
    console.log("Privileges:", emp.privileges);
  }
  if ("startDate" in emp) {   // Narrows to Employee
    console.log("Start Date:", emp.startDate);
  }
}

printEmployeeInformation(emp1);  // Output: Name: Patel MernStack \n Privileges: ['create-server'] \n Start Date: [Date]
```

### Example 2: instanceof in Classes

TypeScript

```
class Car {
  drive(): void {
    console.log("Driving a car...");
  }
}

class Truck {
  drive(): void {
    console.log("Driving a truck...");
  }
  loadCargo(amount: number): void {
    console.log(`Loading cargo... ${amount}`);
  }
}

type Vehicle = Car | Truck;

function useVehicle(vehicle: Vehicle): void {
  vehicle.drive();

  if (vehicle instanceof Truck) {  // Type guard: narrows to Truck
    vehicle.loadCargo(500);
  }
}

const v1 = new Car();
const v2 = new Truck();
useVehicle(v1);  // Output: "Driving a car..."
useVehicle(v2);  // Output: "Driving a truck..." \n "Loading cargo... 500"
```

**Explanation**:

-   'prop' in obj checks existence.
-   instanceof for class instances.
-   After guard, TypeScript knows the exact type.

* * * * *

13\. Type Assertions
--------------------

Tell TypeScript to treat a value as a specific type (use sparingly, as it bypasses checks).

### Example: DOM Elements

TypeScript

```
// Assume HTML: <input id="user-input" /> <button id="btn">Click</button>

const userInput = document.getElementById("user-input")! as HTMLInputElement;  // ! = non-null assertion
userInput.value = "Hi Patel";

const btn = document.getElementById("btn") as HTMLElement;
btn.onclick = () => console.log("Clicked!");  // Output on click

// Alternative syntax (older)
const img = <HTMLImageElement>document.querySelector("img")!;
img.src = "image.jpg";
```

### Form Example

TypeScript

```
const form = document.getElementById("myform") as HTMLFormElement;
const myinput = document.querySelector("form > input") as HTMLInputElement;

form.onsubmit = (e: SubmitEvent) => {
  e.preventDefault();
  const body = document.querySelector("body")!;
  const value = Number(myinput.value);
  const h2 = document.createElement("h2");
  h2.textContent = String(value + 20);
  body.append(h2);
};
```

**Explanation**:

-   as Type or <Type> asserts type.
-   ! asserts non-null.
-   Risky---use when you're sure (e.g., known DOM elements).

* * * * *

14\. Keyof and Index Signatures
-------------------------------

-   keyof: Extracts keys as union type.
-   Index signatures: Allow dynamic keys (e.g., [key: string]: value).

### Example: Keyof with Dynamic Access

TypeScript

```
interface Person {
  name: string;
  email: string;
  // [key: string]: string;  // Index signature: allows any string key -> string
}

const myobj: Person = {
  name: "Abhi",
  email: "abhi@gmail.com",
};

let key = "name" as keyof Person;  // keyof Person = "name" | "email"
console.log(myobj[key]);  // Output: "Abhi"

// Generic function for safe access
function getData(key: keyof Person): string {
  return myobj[key];
}

console.log(getData("name"));  // Output: "Abhi"
```

**Explanation**:

-   keyof T creates a union of property names.
-   Index signatures for dictionary-like objects (use cautiously to avoid losing type safety).

* * * * *

15\. Utility Types
------------------

Built-in types for transforming existing types.

| Utility Type | Description | Example |
| --- | --- | --- |
| Partial<T> | Makes all properties optional | Partial<{a: string}> = {a?: string} |
| Required<T> | Makes all properties required | Required<{a?: string}> = {a: string} |
| Readonly<T> | Makes all properties readonly | Readonly<{a: string}> = {readonly a: string} |
| Record<K, T> | Creates object with keys K and values T | `Record<"a" |
| Pick<T, K> | Picks specific keys from T | Pick<{a:1, b:2}, "a"> = {a:1} |
| Omit<T, K> | Omits specific keys from T | Omit<{a:1, b:2}, "a"> = {b:2} |
| Exclude<T, U> | Excludes U from union T | Exclude<string | number, number> = string |
| Extract<T, U> | Extracts U from union T | Extract<string | number, number> = number |
| NonNullable<T> | Excludes null/undefined from T | NonNullable<string | null> = string |
| Parameters<T> | Tuple of function params | Parameters<() => void> = [] |
| ReturnType<T> | Return type of function | ReturnType<() => string> = string |
| InstanceType<T> | Instance type of constructor | InstanceType<typeof Array> = any[] |

### Examples

TypeScript

```
// Partial
type User = { name: string; email: string };
type User2 = Partial<User>;  // { name?: string; email?: string }

const partialUser: User2 = { name: "Abhi" };  // OK, email optional

// Required
type User3 = { name?: string; email: string };
const requiredUser: Required<User3> = { name: "Abhi", email: "abhi@gmail.com" };

// Readonly
const readonlyUser: Readonly<User> = { name: "Abhi", email: "abhi@gmail.com" };
// readonlyUser.name = "New";  // Error

// Record
type UserName = "john" | "levi" | "elon" | "jack";
interface UserInfo { age: number; }

const users: Record<UserName, UserInfo> = {
  john: { age: 34 },
  levi: { age: 34 },
  elon: { age: 34 },
  jack: { age: 34 },
};

// Pick
interface OrderInfo {
  readonly id: string;
  user: string;
  city: string;
  state: string;
  country: string;
  status: string;
}
type ShippingInfo = Pick<OrderInfo, "city" | "state" | "country">;

// Omit
type Random = Omit<ShippingInfo, "country">;  // { city: string; state: string; }

// Exclude/Extract
type MyUnion = string | number | boolean;
type NoBool = Exclude<MyUnion, boolean>;  // string | number
type OnlyBool = Extract<MyUnion, boolean>;  // boolean

// NonNullable
type MyUnion2 = string | number | boolean | null | undefined;
type NoNull = NonNullable<MyUnion2>;  // string | number | boolean

// Parameters
const myfunc = (a: number, b: string) => { console.log(a + b); };
type FuncParams = Parameters<typeof myfunc>;  // [number, string]

// ReturnType
type FuncReturn = ReturnType<typeof myfunc>;  // void

// InstanceType
class SampleClass {
  constructor(public s: string, public t: string) {}
}
type ClassInstance = InstanceType<typeof SampleClass>;  // SampleClass

const userInstance: ClassInstance = { s: "44", t: "ssds" };
```

**Explanation**:

-   Utilities compose types for DRY code.
-   E.g., Partial<T> for optional updates.

* * * * *

16\. Generics
-------------

Parametric types for reusable, type-safe code (e.g., arrays without losing types).

### Basic Generics

TypeScript

```
function identity<T>(n: T): T {  // T is placeholder
  return n;
}

const ans1 = identity<number>(20);    // number
const ans2 = identity<string>("20");  // string
const ans3 = identity<boolean>(true); // boolean

// With objects
type Person = { name: string; age: number };
const person1: Person = { name: "Abhi", age: 109 };
const ans4 = identity<Person>(person1);  // Person

// Multi-type
function merge<T, U>(n: T, o: U): { n: T; o: U } {
  return { n, o };
}
const merged = merge<number, string>(20, "Lol");  // { n: number; o: string }
```

### Constraints (extends)

TypeScript

```
type Person2 = { name: string; age: number; email: string };

const user: Person = { name: "abhi", age: 109 };
const user2: Person2 = { ...user, email: "asd@gmail.com" };

function constrained<T, U extends T>(n: T, o: U): { n: T; o: U } {
  return { n, o };
}

const ans = constrained<Person, Person2>(user, user2);  // Valid: Person2 extends Person

// Property filtering
type PersonArray = Person[];  // Array alias
const users: PersonArray = [
  { name: "abhi", age: 109 },
  { name: "Nahar", age: 109 },
  { name: "Levi", age: 52 },
  { name: "Random", age: 2 },
];

function filterByProperty<T, U extends keyof T>(
  arr: T[],
  property: U,
  value: T[U]
): T[] {
  return arr.filter((item) => item[property] === value);
}

const filteredByName = filterByProperty(users, "name", "Nahar");  // Matches name
const filteredByAge = filterByProperty(users, "age", 109);         // Matches age
console.log(filteredByAge);  // Output: [{ name: 'abhi', age: 109 }, { name: 'Nahar', age: 109 }]
```

### Generic Interfaces and Classes

TypeScript

```
// Generic Interface
interface Box<T> {
  value: T;
}

const numberBox: Box<number> = { value: 200 };
const stringBox: Box<string> = { value: "Dummy" };

// Default Type
interface User<T = string> {
  data: T;
  status: number;
}

const response: User = { data: "Success", status: 200 };  // Defaults to string
const jsonRes: User<Person> = { data: { name: "value", age: 21 }, status: 200 };

// Generic Class
class Container<T> {
  private content: T;
  constructor(content: T) {
    this.content = content;
  }
  getContent(): T {
    return this.content;
  }
}

const stringContainer = new Container<string>("Hello");
console.log(stringContainer.getContent());  // "Hello"

const numberContainer = new Container<number>(100);
console.log(numberContainer.getContent());  // 100

// Generic Array Function
function getFirst<T>(arr: T[]): T {
  return arr[0];
}

const firstNumber = getFirst([1, 2, 3, 4]);  // 1
const firstString = getFirst(["a", "b", "c"]);  // "a"
```

### Keyof with Generics

TypeScript

```
function getProperty<T extends object, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person = { name: "Patel", age: 21 };
const name1 = getProperty(person, "name");  // "Patel" (string)
console.log(name1);
```

**Explanation**:

-   <T> placeholders ensure type preservation.
-   extends constrains to subtypes.
-   Use for collections, utils---avoids any.

* * * * *

17\. Advanced Function Types (from Document 1)
----------------------------------------------

### Optional/Default/Rest Parameters

TypeScript

```
// Optional Param
type FuncType = (n: number, m: number, l?: number) => number;
const optionalFunc: FuncType = (n, m, l) => {
  if (typeof l === "undefined") return n * m;
  return n * m * l;
};
console.log(optionalFunc(25, 23));  // 575 (l undefined)

// Default Param
const defaultFunc: FuncType = (n, m, l = 20) => n * m * l;
console.log(defaultFunc(25, 23));  // 11500 (l=20)

// Rest Param
type RestFuncType = (...m: number[]) => number[];
const restFunc: RestFuncType = (...m) => m;
console.log(restFunc(25, 23, 34, 6, 67, 8, 9));  // [25, 23, 34, 6, 67, 8, 9]
```

### Functions with Objects

TypeScript

```
interface Product {
  name: string;
  stock: number;
  price: number;
  photo: string;
  readonly id: string;  // Immutable
}

type GetDataType = (product: Product) => void;

const getData: GetDataType = (product) => {
  console.log(product);
};

const productOne: Product = {
  name: "Macbook",
  stock: 46,
  price: 999999,
  photo: "samplephotourl",
  id: "asdnasjdasjkdas",  // Can't reassign
};

getData(productOne);  // Logs the object
```

**Explanation**:

-   ? for optional; defaults for fallbacks.
-   ... for variable args.
-   Readonly prevents mutation.

### Never in Functions

TypeScript

```
const errorHandler = (): never => {
  throw new Error("Something went wrong!");
};
// errorHandler();  // Throws error, never returns
```

* * * * *

18\. Extending Interfaces and Types (from Document 1)
-----------------------------------------------------

### Interfaces and Types in Objects/Functions

TypeScript

```
interface Obj {
  height: number;
  weight: number;
  gender?: boolean;  // Optional
}

type FuncType = (n: number, m: number) => void;

interface NewObj extends Obj {  // Extends base
  scolar: boolean;
  func: FuncType;
}

const gigi: NewObj = {
  height: 3434,
  weight: 3434,
  scolar: true,
  func: (n, m) => console.log(n * m),
};

const kendal: NewObj = {
  height: 43434,
  weight: 545,
  scolar: true,
  func: (n, m) => console.log(n * m),
};

kendal.func(20, 10);  // Output: 200
```

**Explanation**:

-   extends for inheritance.
-   Combines with types for complex structures.
