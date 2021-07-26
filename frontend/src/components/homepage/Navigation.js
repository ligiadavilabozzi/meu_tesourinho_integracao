import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

export const Navigation = (props) => {
  return (
    <Router>
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar1"
            aria-controls="navbar1"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar1">
            <ul className="navbar-nav mr-auto">
              <li class="nav-item">
                <a href="#about" class="nav-link">
                  QUEM SOMOS
                </a>
              </li>
              <li>
                <a href="#features" class="nav-link">
                  Benefícios
                </a>
              </li>
              <li>
                <a href="#services" class="nav-link">
                  COMO USAR?
                </a>
              </li>
              <li>
                <a href="#testimonials" class="nav-link">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#team" class="nav-link">
                  Time
                </a>
              </li>
              <li>
                <a href="#contact" class="nav-link">
                  Contato
                </a>
              </li>
              <li>
                <a href="/login" class="nav-link">
                  Login
                </a>
              </li>
              <li>
                <a href="/register" class="nav-link">
                  Cadastre-se
                </a>
              </li>
              <li>
                <a href="/user" class="nav-link">
                  Dashboard
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Router>
  );
};
