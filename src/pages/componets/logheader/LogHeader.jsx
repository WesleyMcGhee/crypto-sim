import React from "react";
import "./logheader.css";
import { Link } from "react-router-dom";

export default function LogHeader() {
  return (
    <header>
      <Link>
        <h1 className="logo">Crypto Sim</h1>
      </Link>
      <div className="link-con">
        <ul className="nav-list">
          <Link>
            <li className="nav-item">Login</li>
          </Link>
          <Link>
            <li className="nav-item">Signup</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
