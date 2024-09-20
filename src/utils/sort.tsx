import { Person } from "../types";

/**
 * Sorts an array of Person objects by a specified property.
 *
 * @param {Person[]} array - The array of Person objects to be sorted.
 * @param {keyof Person} property - The property of the Person objects to sort by.
 * @returns {Person[]} A new array of Person objects sorted by the specified property.
 */

export const sortByProperty = (
  array: Person[],
  property: keyof Person
): Person[] => {
  return [...array].sort((a, b) => {
    if (a[property]! < b[property]!) return -1;
    if (a[property]! > b[property]!) return 1;
    return 0;
  });
};
