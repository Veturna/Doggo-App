import React, { useState } from "react";

const Search = ({changeBreed}) => {
    const [breed, setBreed] = useState(" ")

    const handleSubmit = (e) => {
    e.preventDefault();
    changeBreed(breed)
  };

  const handleChange = (e) => {
    setBreed(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Wpisz rasę, której szukasz: <br />
        <input type="text" value={breed} onChange={handleChange} />
      </label>
      <input type="submit" value="Szukaj" />
    </form>
  );
};

export default Search