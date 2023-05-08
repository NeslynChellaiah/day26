import { useEffect } from "react";
import "./App.css";
import Sidenav from "./Sidenav";
import Dashboard from "./Dashboard";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div id="wrapper">
          <Sidenav />
          <Dashboard />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
