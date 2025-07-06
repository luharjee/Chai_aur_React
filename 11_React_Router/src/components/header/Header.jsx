import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <div>
          <Link to="/">
            <img alt="Logo" />
          </Link>
          <div>
            <Link to="#">Log in</Link>
            <Link to="#">Get started</Link>
          </div>
          <div>
            <ul>
              <li>
                <NavLink>Home</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
