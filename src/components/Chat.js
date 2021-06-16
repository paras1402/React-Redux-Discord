import React, { useEffect, useRef, useState } from "react";
import "./Chat.css";
import ChatHeader from "./ChatHeader";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import KeyboardIcon from "@material-ui/icons/Keyboard";
import GifIcon from "@material-ui/icons/Gif";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import Message from "./Message";
import { useSelector } from "react-redux";
import { selectChannelId, selectChannelName } from "../features/appSlice";
import { selectUser } from "../features/userSlice";
import db from "../firebase";
import firebase from "firebase";
const Chat = () => {
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const inputName = useRef();

  useEffect(() => {
    if (channelId) {
      db.collection("channels")
        .doc(channelId)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [channelId]);

  const sendMessage = (e) => {
    e.preventDefault();

    console.log(inputName.current.value);
    db.collection("channels").doc(channelId).collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      user: user,
    });
    setInput("");
  };

  return (
    <div className="chat">
      <ChatHeader
        channelName={channelName}
        id={channelId}
        key={channelId}
      ></ChatHeader>

      <div className="chat__messages">
        {/* <Message />
        <Message />
        <Message />
        <Message /> */}
        {messages.map((message) => (
          <Message
            timestamp={message.timestamp}
            message={message.message}
            user={message.user}
          ></Message>
        ))}
      </div>

      <div className="chat__input">
        <AddCircleIcon fontSize="large"></AddCircleIcon>
        <form>
          <input
            value={input}
            disabled={!channelId}
            ref={inputName}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder={`Message #${channelName}`}
          ></input>
          <button
            onClick={sendMessage}
            disabled={!channelId}
            className="chat__inputButton"
            type="submit"
          >
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
