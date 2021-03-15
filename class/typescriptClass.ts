class Vehicle {
  constructor(public color: string) {}

  public honk(): void {
    console.log(this.color);
  }
}

class Car extends Vehicle {
  constructor(public wheel: number, color: string) {
    super(color);
  }

  public drive(): void {
    console.log('this is drive');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

const car = new Car(4, 'black');
console.log(car.color);
console.log(car.wheel);
console.log(vehicle.color);
