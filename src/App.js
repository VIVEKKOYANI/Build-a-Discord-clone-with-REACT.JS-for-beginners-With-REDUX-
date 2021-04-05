import React from "react";
import Sidebar from './Sidebar';
import "./App.css";
import Chat from "./Chat";
const App = () => (
  <div className="app">
    <Sidebar />
    <Chat />
  </div>
);

export default App;
