import React from "react";
import { Routes,Route} from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";

import FormOverlay from "./components/FormOverlay";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home/*"  Component={Home}/>
        <Route path="/login" Component={Login} />
      </Routes>
    </div>
  );
}

export default App;
