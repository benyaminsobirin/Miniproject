import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-info">
        <div className="container">
          <a className="navbar-brand" href="">
            Star Was Wikipedia
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Film
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Characters
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Planets
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Species
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Starships
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Vehicles
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
