import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Constant from "./config/Constant";

function App() {
  const [count, setCount] = useState(0);

  console.log(Constant.BACKEND_URL);

  return (
    <>
      <h1>Hello vite app</h1>
      <p>Login form</p>
    </>
  );
}

export default App;
