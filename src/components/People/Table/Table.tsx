import React from "react";
import { Person } from "../../../types";

interface TableProps {
  people: Person[];
}

const Table = ({ people }: TableProps) => {
  return (
    <div className="table-responsive mt-3">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Favorite Food</th>
            <th>Favorite Movie</th>
            <th>Status</th>
            <th>Execution Date</th>
          </tr>
        </thead>
        <tbody>
          {people.length > 0 ? (
            people.map((person, index) => (
              <tr key={index}>
                <td>{person.Name}</td>
                <td>{person["Favorite Food"]}</td>
                <td>{person["Favorite Movie"]}</td>
                <td>{person.Status}</td>
                <td>{person.ExecutionDate}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5}>No records found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
