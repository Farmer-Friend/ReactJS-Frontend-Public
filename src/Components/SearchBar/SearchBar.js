import React from "react";
import "./SearchBar.css";

/**
 * SearchBar component represents a beautiful search bar.
 */
const SearchBar = ({ onSearch }) => {
    const handleSearch = (event) => {
        // Call the onSearch function with the search query
        // if the query is empty, it will return all the news
        onSearch(event.target.value);
    };

    return (
        <div className="search-bar">
            <div className="search-bar__container">
                <input
                    type="text"
                    className="search-bar__input"
                    placeholder="Search..."
                    onChange={handleSearch}
                />
                <button type="submit" className="search-bar__button">
                    Search
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
