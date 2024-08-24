import React from "react";

export default function SearchBox({ query, onSearch }) {
  const handleChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <input
      type="text"
      value={query}
      onChange={handleChange}
      placeholder="Search contacts"
    />
  );
}
