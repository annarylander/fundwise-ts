import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { MdOutlineClear } from "react-icons/md";
import FundContext from "../../context/FundContext";

export default function Search() {
  const [query, setQuery] = useState("");

  const { searchFunds, clearResults, funds } = useContext(FundContext);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query === "") {
      alert("Please enter something");
    } else {
      searchFunds(query);
      setQuery("");
    }
  };

  return (
    <>
      <div className="">
        <div className="pt-10">
          <div>
            <h1 className="text-5xl font-bold pb-5">Sök på en fond</h1>
            <div>
              <form onSubmit={handleSubmit}>
                <div className="relative">
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Type here"
                    className="w-full pr-40 bg-gray-200 input input-md text-black"
                  />
                  <div className="btn-group ">
                    <button className="btn btn-success absolute top-0 right-0 ">
                      <BsSearch />
                    </button>

                    {funds.length > 0 && (
                      <button
                        onClick={clearResults}
                        className="btn absolute top-0 -right-10"
                      >
                        <MdOutlineClear />
                      </button>
                    )}
                  </div>
                </div>
              </form>
            </div>

            <div className="">
              {funds &&
                funds.slice().map((fund, index) => {
                  return (
                    <div key={index}>
                      <ul className="menu bg-base-100 w-90">
                        <li>
                          <Link to={`/fund/${fund}`}>{fund}</Link>
                        </li>
                      </ul>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
