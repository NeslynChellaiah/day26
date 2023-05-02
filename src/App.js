import { useEffect } from "react";
import "./App.css";
import Sidenav from "./Sidenav";
import Dashboard from "./Dashboard";

function App() {
  useEffect(() => {
    let scripts = [];
    [
      "../js/sb-admin-2.min.js",
      "../vendor/chart.js/Chart.min.js",
      "../js/demo/chart-area-demo.js",
      "../js/demo/chart-pie-demo.js",
    ].forEach((src) => {
      const script = document.createElement("script");

      script.src = src;
      script.async = false;
      scripts.push(script);
    });

    document.body.append(...scripts);
  }, []);
  return (
    <div className="App">
      <div id="wrapper">
        <Sidenav />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
