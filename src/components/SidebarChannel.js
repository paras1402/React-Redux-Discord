import React from "react";
import { useDispatch } from "react-redux";
import { setChannelInfo } from "../features/appSlice";
import "./SidebarChannel.css";
const SidebarChannel = ({ channelName, id }) => {
  const dispatch = useDispatch();

  const addChannelHandler = () => {
    dispatch(
      setChannelInfo({
        channelId: id,
        channelName: channelName,
      })
    );
  };
  return (
    <div className="sidebarChannel" onClick={addChannelHandler}>
      <h3>
        <span className="sidebarChannel__hash">#</span>
        {channelName}
      </h3>
    </div>
  );
};

export default SidebarChannel;
