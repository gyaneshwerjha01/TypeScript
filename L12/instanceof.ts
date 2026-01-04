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
    console.log(`Loading cargo...${amount}`);
  }
}

type Vehicle = Car | Truck;

function useVehicle(vehicle: Vehicle): void {
  vehicle.drive();

  if (vehicle instanceof Truck) {
    vehicle.loadCargo(500);
  }
}

const v1 = new Car();
const v2 = new Truck();

useVehicle(v1);
useVehicle(v2);
