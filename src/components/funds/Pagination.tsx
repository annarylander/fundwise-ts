import React from "react";

export default function Pagination({
  fundsPerPage,
  totalFunds,
  paginate,
}: {
  fundsPerPage: number;
  totalFunds: number;
  paginate: (pageNumber: number) => void;
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalFunds / fundsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="">
      <ul className="btn-group flex flex-row justify-center">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className="btn btn-s bg-success border-none text-white"
          >
            <a onClick={() => paginate(number)} className="">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
