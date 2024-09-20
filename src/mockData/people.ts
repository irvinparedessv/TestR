import { Person } from "../types";

let rockyObj: Person = {
  Name: "Rocky",
  "Favorite Food": "Sushi",
  "Favorite Movie": "Back to The Future",
  Status: "Inactive",
};
let miroslavObj: Person = {
  Name: "Miroslav",
  "Favorite Food": "Sushi",
  "Favorite Movie": "American Psycho",
  Status: "Active",
};
let donnyObj: Person = {
  Name: "Donny",
  "Favorite Food": "Singapore chow mei fun",
  "Favorite Movie": "The Princess Bride",
  Status: "Inactive",
};
let mattObj: Person = {
  Name: "Matt",
  "Favorite Food": "Brisket Tacos",
  "Favorite Movie": "The Princess Bride",
  Status: "Active",
};
let IrvinObj: Person = {
  Name: "Irvin",
  "Favorite Food": "Hamburger",
  "Favorite Movie": "Lord of the Rings",
  Status: "Active",
};
const mockPeople: Person[] = [
  donnyObj,
  mattObj,
  miroslavObj,
  rockyObj,
  IrvinObj,
];
export default mockPeople;
