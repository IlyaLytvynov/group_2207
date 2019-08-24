import React from "react";
import logo from "./logo.svg";
import { Feed } from "./components/Feed";

import "./App.css";
import { LoginForm } from "./components/LoginForm";

const App: React.FC = () => {
  return (
    <div className="App">
      <LoginForm />
      <Feed />
    </div>
  );
};

export default App;
