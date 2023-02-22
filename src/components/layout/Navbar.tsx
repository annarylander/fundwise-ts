import React from "react";
import { AiOutlineFund } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

type NavbarProps = {
  title: string;
};

export default function Navbar({ title }: NavbarProps) {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="/#landing">Home</a>
            </li>
            <li>
              <a href="/#about">About</a>
            </li>
            <li>
              <a href="/allfunds">Funds</a>
            </li>
          </ul>
        </div>
        <AiOutlineFund className="inline pr-2 text-3xl text-success hidden md:flex" />
        <a href="/#landing" className="normal-case text-xl">
          {title}
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <a href="/#landing">Home</a>
          </li>
          <li>
            <a href="/#about">About</a>
          </li>
          <li>
            <a href="/allfunds">Funds</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a href="/#search" className="">
          <BsSearch className="inline pr-2 text-3xl text-success" />
        </a>
      </div>
    </div>
  );
}
