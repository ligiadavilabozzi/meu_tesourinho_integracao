import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

export const Navbar = (props) => {
  return (
    <nav className="navbar fixed-top navbar-expand-sm navbar-light bg-light">
      <div className="container">
        <a href="#" className="navbar-brand mb-0 h1">
          <img
            className="d-inline-block align-top"
            src="./img/logo/logo-tesourinhocolorido.png"
            href= "/"
            width="130"
          />
        </a>
        <button
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          className="navbar-toggler"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="navbar-item active">
              <a href="/" className="nav-link active">
                Home
              </a>
            </li>
            <li className="navbar-item">
              <a href="/login" className="nav-link">
                Login
              </a>
            </li>
            <li className="navbar-item">
              <a href="/register" className="nav-link">
                Cadastre-se
              </a>
            </li>
            <li className="navbar-item">
              <a href="/dashboard" className="nav-link">
                Dashboard
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
