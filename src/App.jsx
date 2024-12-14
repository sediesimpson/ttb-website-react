import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div style={{ textAlign: "center", padding: "20 px" }}>
        <h1>Welcome to My React Website</h1>
        <p>This is a simple website built with React.</p>
        <button onClick={() => alert("You clicked me")}>Click Me</button>
      </div>
    </>
  );
}

export default App;
