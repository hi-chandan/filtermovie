import React from "react";

const genreoption = [
  "All",
  "Action",
  "Romance",
  "Fantasy",
  "Drama",
  "Crime",
  "Adventure",
  "Thriller",
  "Sci-fi",
  "Music",
  "Family",
];
const Genre = ({ setgenre, genre }) => {
  return (
    <div className="w-full ">
      <h1 className="text-center text-lg font-bold p-2">Movie by Genre</h1>
      {genreoption.map((val, index) => (
        <button
          className={`p-2  w-full  text-lg ${
            genre === val ? "text-white bg-gray-800  " : ""
          } `}
          key={index}
          onClick={() => setgenre(val)}
        >
          {val}
        </button>
      ))}
    </div>
  );
};

export default Genre;
