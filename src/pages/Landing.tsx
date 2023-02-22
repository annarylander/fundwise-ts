import React from "react";

export default function Landing() {
  return (
    <div className="hero min-h-screen bg-success px-0 m-0  ">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl text-white font-bold">Ska du köpa aktier?</h1>
          <p className="py-6 text-white">
            På Fundwise kan du söka på en fond och se vilket aktieinnehav den
            har. Du kan enkelt jämföra olika fonder med varandra och se vilka
            aktier de har köpt och hur stor andel de äger.
          </p>
          <button className="btn bg-white text-success border-none">
            {" "}
            <a href="#search" className="">
              Get Started{" "}
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
