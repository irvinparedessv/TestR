import React from "react";
import { Person } from "../../../types";

interface SortProps {
  sortField: keyof Person;
  setSortField: (field: keyof Person) => void;
}

const Sort = ({ sortField, setSortField }: SortProps) => {
  return (
    <div>
      <label>Sort by:</label>
      <select
        className="form-select"
        value={sortField}
        onChange={(e) => setSortField(e.target.value as keyof Person)}
      >
        <option value="Name">Name</option>
        <option value="Favorite Movie">Favorite Movie</option>
        <option value="Favorite Food">Favorite Food</option>
        <option value="Status">Status</option>
      </select>
    </div>
  );
};

export default Sort;
