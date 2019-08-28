import React from "react";
import { Feed } from "./components/Feed";

import "./App.css";
import { LoginForm } from "./components/LoginForm";
import { WithStateManager } from './components/WithStateManager';

const App: React.FC = () => {
  return (
    <div className="App">
      <LoginForm />
      <Feed />
      <WithStateManager />
    </div>
  );
};

export default App;
