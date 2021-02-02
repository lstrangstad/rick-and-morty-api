import React from "react";
import "./SearchBar.css";

export default function SearchBar() {
  return (
    <div className="search">
      <div className="search__input-box">
        <label htmlFor="input"></label>
        <input
          className="search__input"
          id="input"
          type="text"
          placeholder="Search for character..."
        />
      </div>
      <div className="search__filters">
        <div className="search__species">
          <label htmlFor="species">Species:</label>
          <select name="species" id="species">
            <option value="all">All</option>
            <option value="human">Human</option>
            <option value="alien">Alien</option>
          </select>
        </div>
        <div className="search__dead">
          <input type="checkbox" />
          <label htmlFor="">Is dead?</label>
        </div>
      </div>
    </div>
  );
}
