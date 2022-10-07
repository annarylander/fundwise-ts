import React from "react";
import Search from "../components/funds/Search";
import Landing from "./Landing";
import About from "./About";

export default function Home() {
  return (
    <>
      <div className="hero min-h-screen " id="landing">
        <Landing />
      </div>

      <div className="hero min-h-screen" id="search">
        <Search />
      </div>

      <div className="hero min-h-screen z-0" id="about">
        <About />
      </div>
    </>
  );
}
