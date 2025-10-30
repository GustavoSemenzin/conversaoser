import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Page from "./components/Page";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      className="w-screen h-screen bg-white "
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      {/* <Header /> */}
      <Banner />
      <div className=" h-full bg-white">
        <Page />
      </div>
    </div>
  );
}

export default App;
