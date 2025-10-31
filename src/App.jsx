import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Page from "./components/Page";

function App() {
  const banners = [
    {
      link: "https://media.istockphoto.com/id/1885088156/pt/foto/happy-dog-looking-up-at-camera-with-smile.jpg?s=2048x2048&w=is&k=20&c=kTq0r8GziguWWqQvI7bnRZ3_T3Z4sPsXpXv3HUduYNw=",
    },
    {
      link: "https://media.istockphoto.com/id/1480747819/pt/foto/dachsund-and-cat-best-friends.jpg?s=2048x2048&w=is&k=20&c=JsUw6T_BPGqctiruWXefXxdcZ2aB8sPkUzUR4v1_Hho=",
    },
    {
      link: "https://media.istockphoto.com/id/533229488/pt/foto/engra%C3%A7ado-c%C3%A3o.jpg?s=2048x2048&w=is&k=20&c=nshVWDi1QQcYc_LAwZX4IDZcsPCVhh2f4QgJR_p8-_E=",
    },
  ];

  return (
    <div
      className="w-screen h-screen bg-white "
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <Header />
      <Banner itens={banners} />
      <Page />
    </div>
  );
}

export default App;
