// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;
age = 12.1;

let userName: string;
userName = "Max";

let isInstructor: boolean;
isInstructor = true;

// More complex types

let hobbies: string[];
hobbies = ["Sports", "Cooking"];

// Type Alias
type Person = {
    name: string;
    age: number;
  };


let person: Person;

person = {
  name: "Max",
  age: 32,
};

let people: Person[];

// Type interference

let course = "React - The Complete Guide";
// course =  12345     // won't work

// Union types

let training: string | number = "React + TypeScript";
training = 200;

let originalName: string | string[] = 'Maximilian';
originalName = ["Max", 'Sam', 'Bob'];
