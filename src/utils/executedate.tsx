import { Person } from "../types";
import { handleGetDateNow } from "./date";

/**
 * Adds the current execution date to each Person object in the people array.
 *
 * This function retrieves the current date and updates each Person object
 * by adding an `ExecutionDate` property with the current date value.
 */
export const addExecutionDate = (people: Person[]): Person[] => {
  const executionDate = handleGetDateNow();
  return people.map((person) => ({
    ...person,
    ExecutionDate: executionDate,
  }));
};
