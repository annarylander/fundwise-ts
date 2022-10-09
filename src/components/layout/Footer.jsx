import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

export default function Footer() {
  const footerYear = new Date().getFullYear();

  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <div className="grid grid-flow-col gap-4"></div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <a href="https://github.com/annarylander" alt="github">
            <AiFillGithub className="text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/anna-rylander9009/"
            alt="linkedin"
          >
            <AiFillLinkedin className="text-2xl" />
          </a>
          <a href="mailto:annaelida.rylander@gmail.com">
            <AiFillMail className="text-2xl" />
          </a>
        </div>
      </div>
      <div>
        <p>Copyright © {footerYear} - All right reserved</p>
      </div>
    </footer>
  );
}
