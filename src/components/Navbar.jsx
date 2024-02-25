import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">WinxChat</span>
      <div className="user">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnhhbg4VjTsHxmkEA82kfc1KjqH-5Jpd7QUQ&usqp=CAU"
          alt=""
        />
        <span>Bloom</span>
        <button>Log out</button>
      </div>
    </div>
  );
};

export default Navbar;
