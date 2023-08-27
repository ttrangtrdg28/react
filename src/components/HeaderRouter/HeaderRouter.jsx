import React from "react";
import { NavLink, createSearchParams, useNavigate } from "react-router-dom";

export default function HeaderRouter() {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/movie-detail/1214">
              Movie detail
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/hooks">
              Hooks
            </NavLink>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="button"
            onClick={() => {
              if (1 === 1) {
                navigate({
                  pathname: "/about",
                  search: `${createSearchParams({
                    keyword: "google.com",
                    userId: 112,
                  })}`,
                });
              }
            }}
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}
