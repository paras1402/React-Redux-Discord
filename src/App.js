import React, { useEffect } from "react";

import "./App.css";
import Chat from "./components/Chat";

import SideBar from "./components/SideBar";
import { selectUser } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { Login } from "./components/Login";
import { auth } from "./firebase";
import { login, logout } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //the user is logged in
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        //the user is logged out

        dispatch(logout());
      }
    });
  }, [dispatch]);
  return (
    <div className="app">
      {user ? (
        <>
          <SideBar />
          <Chat />
        </>
      ) : (
        <Login></Login>
      )}
    </div>
  );
}

export default App;
