const today = new Date();

const data = {
  name: 'naveen',
  age: 30,
};

//class
class Company {
  name: 'honda';
}

const city: Company = new Company();

//array
const arr: number[] = [1, 2, 3, 4];
const e: string[] = ['a', 'b', 'c'];

//object
const point: { name: string; age: number } = {
  name: 'naveen ',
  age: 10,
};

//function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

//function that returns 'any' type
const json = '{"x":20 , "y" : 10}';
const coordinate: { x: number; y: number } = JSON.parse(json);

//we declare in one variable and initailize in another variable
let word = ['red', 'green', 'orange'];
let testing: boolean;

for (let i = 0; i < word.length; i++) {
  if (word[i] === 'green') {
    testing = true;
  } else {
    testing = false;
  }
}

//variable whose type cannot be inffered properly
const number = [1, 2, 3, 4];
let result: boolean | number = true;

for (let i = 0; i < number.length; i++) {
  if (number[i] < 2) {
    result = number[i];
  }
}
