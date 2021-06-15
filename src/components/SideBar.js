import React from "react";
import "./SideBar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import SidebarChannel from "./SidebarChannel";
import CallIcon from "@material-ui/icons/Call";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import InfoIcon from "@material-ui/icons/Info";
import { Avatar } from "@material-ui/core";
import MicIcon from "@material-ui/icons/Mic";
import HeadsetIcon from "@material-ui/icons/Headset";
import SettingsIcon from "@material-ui/icons/Settings";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h3>Paras</h3>
        <ExpandMoreIcon />
      </div>
      <div className="sidebar__channels">
        <div className="sidebar__channelsHeader">
          <div className="sidebar__header">
            <ExpandMoreIcon />
            <h4>Text Channels</h4>
          </div>

          <AddIcon className="sidebar__addChannel"></AddIcon>
        </div>

        <div className="sidebar__channelsList">
          <SidebarChannel></SidebarChannel>
          <SidebarChannel></SidebarChannel>
          <SidebarChannel></SidebarChannel>
          <SidebarChannel></SidebarChannel>
        </div>
      </div>

      <div className="sidebar__voice">
        <SignalCellularAltIcon
          className="sidebar__voiceIcon"
          fontSize="large"
        />

        <div className="sidebar__voiceConnectionText">
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>

        <div className="sidebar__voiceIcons">
          <div className="sidebar__voiceIconsInfo">
            <InfoIcon></InfoIcon>
          </div>
          <div className="sidebar__voiceIconsCall">
            <CallIcon></CallIcon>
          </div>
        </div>
      </div>

      <div className="sidebar__profile">
        <Avatar className="sidebar__profileIcon" fontSize="large"></Avatar>

        <div className="sidebar__profileName">
          <h3>Paras Kangra</h3>
          <p>#CFE78X</p>
        </div>

        <div className="sidebar__profileIcons">
          <MicIcon></MicIcon>
          <HeadsetIcon></HeadsetIcon>
          <SettingsIcon></SettingsIcon>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
