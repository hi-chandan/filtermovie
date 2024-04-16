import React from "react";

const Search = ({ setSearch, setgenre }) => {
  const sethandle = (value) => {
    setgenre("All");
    setSearch(value);
  };
  return (
    <div className="">
      <input
        type="text"
        className="p-2 rounded-md"
        placeholder="Search by name"
        onChange={(e) => sethandle(e.target.value)}
      />
    </div>
  );
};

export default Search;
0;
