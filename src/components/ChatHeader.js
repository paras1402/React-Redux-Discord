import React from "react";
import "./ChatHeader.css";
import HelpOutlinedIcon from "@material-ui/icons/HelpOutlined";
import PeopleIcon from "@material-ui/icons/People";
import SendIcon from "@material-ui/icons/Send";
import EditLocationIcon from "@material-ui/icons/EditLocation";
import NotificationsIcon from "@material-ui/icons/Notifications";

import SearchIcon from "@material-ui/icons/Search";

const ChatHeader = () => {
  return (
    <div className="chatheader">
      <div className="chatheader__left">
        <h3>
          <span className="sidebarChannel__hash">#</span>Youtube
        </h3>
      </div>
      <div className="chatheader__right">
        <NotificationsIcon></NotificationsIcon>
        <EditLocationIcon></EditLocationIcon>
        <PeopleIcon></PeopleIcon>
        <div className="chatheader__search">
          <input placeholder="search"></input>
          <SearchIcon></SearchIcon>
        </div>
        <SendIcon></SendIcon>
        <HelpOutlinedIcon></HelpOutlinedIcon>
      </div>
    </div>
  );
};

export default ChatHeader;
