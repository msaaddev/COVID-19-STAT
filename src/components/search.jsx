import React from "react";
import "./search.css";

const Search = ({ placeHolder }) => {
  return (
    <div className="search-area">
      <input type="text" placeholder={placeHolder} />
      <button class="search-btn">Search</button>
    </div>
  );
};

export default Search;
