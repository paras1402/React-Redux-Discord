import React from "react";
import "./Chat.css";
import ChatHeader from "./ChatHeader";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import KeyboardIcon from "@material-ui/icons/Keyboard";
import GifIcon from "@material-ui/icons/Gif";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import Message from "./Message";
const Chat = () => {
  return (
    <div className="chat">
      <ChatHeader></ChatHeader>

      <div className="chat__messages">
        <Message></Message>
      </div>

      <div className="chat__input">
        <AddCircleIcon fontSize="large"></AddCircleIcon>
        <form>
          <input type="text" placeholder="Message #YouTube"></input>
          <button className="chat__inputButton" type="submit">
            SendMessage
          </button>
        </form>
        <div className="chat__inputIcons">
          <KeyboardIcon fontSize="large" />
          <GifIcon fontSize="large"></GifIcon>
          <EmojiEmotionsIcon fontSize="large"></EmojiEmotionsIcon>
        </div>
      </div>
    </div>
  );
};

export default Chat;
