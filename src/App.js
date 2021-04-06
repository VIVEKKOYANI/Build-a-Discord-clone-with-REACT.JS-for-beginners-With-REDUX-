import React from "react";
import Sidebar from './Sidebar';
import "./App.css";
import Chat from "./Chat";
import {selectUser} from './features/userSlice';
import { useSelector } from "react-redux";
const App = () => {
const user = useSelector(selectUser)
  return(
  <div className="app">
    {user ? (
      <>
      <Sidebar />
      <Chat />
      </>
    ): (
      <h2>You Need to login</h2>
    )}
  </div>
  )
}

export default App;
