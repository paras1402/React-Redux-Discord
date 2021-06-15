import React from "react";

import "./App.css";
import Chat from "./components/Chat";

import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="app">
      {/*SideBar */}
      <SideBar></SideBar>

      {/* <Chat></Chat> */}
      <Chat></Chat>
    </div>
  );
}

export default App;
