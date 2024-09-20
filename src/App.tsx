/*
 * Author: Irvin Paredes
 * Date: 09-19-2024
 * Purpose: Application to display information about people with active status and sorting.
 */
import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Sort } from "./components/People/Sort";
import { Table } from "./components/People/Table";
import { Person } from "./types";
import { sortByProperty } from "./utils";
import mockPeople from "./mockData/people";
import { addExecutionDate } from "./utils/executedate";

function App() {
  const [people, setPeopleArray] = useState<Person[]>(mockPeople);
  const [sortField, setSortField] = useState<keyof Person>("Name");

  const activeRecords = people.filter((person) => person.Status === "Active");

  useEffect(() => {
    const updatedPeople = addExecutionDate(people);
    setPeopleArray(updatedPeople);
  }, [people]);

  const sortedPeople = sortByProperty(activeRecords, sortField);

  return (
    <div className="App">
      <header className="App-header">
        <h1>IRVIN PAREDES</h1>
        <img src={logo} className="App-logo" alt="logo" />
        {/*hiding the sortable when there are no records*/}
        {activeRecords.length > 0 && (
          <Sort sortField={sortField} setSortField={setSortField} />
        )}
        <Table people={sortedPeople} />
      </header>
    </div>
  );
}

export default App;
