import { Avatar } from "@material-ui/core";
import React from "react";
import "./Message.css";

const Message = ({ timestamp, message, user }) => {
  return (
    <div className="message">
      {/* <Avatar></Avatar> */}
      <Avatar src={`url(${user.photo})`} alt="profile"></Avatar>

      <div className="message__info">
        <h4>
          {user.displayName}
          <span className="message__timestamp">
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
        </h4>

        <p>{message}</p>
      </div>
    </div>
  );
};

export default Message;
