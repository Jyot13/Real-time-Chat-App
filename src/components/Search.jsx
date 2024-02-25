import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a user" />
      </div>
      <div className="userChat">
        <img src="https://i.ytimg.com/vi/MvAJtDumtMI/maxresdefault.jpg" />
        <div className="userChatInfo">
          <span>Tecna</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
