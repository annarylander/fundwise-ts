import React from "react";
import { GiMoneyStack } from "react-icons/gi";
import { AiOutlineStock } from "react-icons/ai";
import { GiReceiveMoney } from "react-icons/gi";

export default function About() {
  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content flex-col lg:flex-row">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <h2 className="card-title">Hitta rätt aktier</h2>
            <p>Se vilka aktier som fonden har köpt </p>
            <div className="card-actions justify-end">
              <GiMoneyStack className="inline pr-2 text-7xl text-success" />
            </div>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <h2 className="card-title">Följ dina favoriter</h2>
            <p>Följ en fond och bli uppdaterad om nya innehav</p>
            <div className="card-actions justify-end">
              <AiOutlineStock className="inline pr-2 text-7xl text-success" />
            </div>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <h2 className="card-title">Jämför</h2>
            <p>Jämför aktieinnehav med tidigare perioder</p>
            <div className="card-actions justify-end">
              <GiReceiveMoney className="inline pr-2 text-7xl text-success" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
