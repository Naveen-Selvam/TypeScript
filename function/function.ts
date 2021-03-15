//type inference
const add = (a: number, b: number) => {
  a + b;
};

add(5, 98);

//type annotation
const sub = (a: number, b: number): number => {
  return a - b;
};

//fucn declaration
function div(a: number, b: number): number {
  return a / b;
}

//annoymous funct
const mul = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

const forecaste = {
  date: new Date().getMonth,
  weather: 10,
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: number;
}): void => {
  console.log(date);
  console.log(weather);
};

//funcitons
const cars = ['honda', 'ford', 'maruthi'];

const result1 = cars.map((car: string): string => {
  return car.toLocaleUpperCase();
});

console.log(result1);

//flexible types inside an array
const flexarr = [28, 'naveen', true, { name: 'naveen' }];

//tupels
const drink = {
  color: 'brown',
  corbonated: false,
  sugar: 40,
};

type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', false, 0];
