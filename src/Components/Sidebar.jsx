import React from "react";
import Navbar from "../Components/Navbar";
import Searchbar from "../Components/Searchbar";
import Chats from "../Components/Chats";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Navbar />
      <Searchbar />
      <Chats />
    </div>
  );
};

export default Sidebar;
