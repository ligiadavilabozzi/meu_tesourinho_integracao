import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import { login } from "../actions/auth";
import { Navbar } from "../components/homepage/Navbar";
import "./style.css";
const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        Campo Obrigatório
      </div>
    );
  }
};
const Login = (props) => {
  const form = useRef();
  const checkBtn = useRef();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    form.current.validateAll();
    if (checkBtn.current.context._erros.length === 0) {
      dispatch(login(username, email, password))
        .then(() => {
          props.history.push("/dashboard");
          window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };
  if (isLoggedIn) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="corpoLogin col-md">
          <div className="espaco"></div>
          <div className="avatar">
            <img
              src="img/logo/logo-tesourinhocolorido.png"
              width="300px"
              alt="Logo Meu Tesourinho"
            />
            <p>Seja bem-vindo!</p>
          </div>
          <Form onSubmit={handleLogin} ref={form} className= "form">
            <div className="form-group">
              <label htmlFor="username">Usuário</label>
              <Input
                type="text"
                className="form-control"
                name="username"
                value={username}
                onChange={onChangeUsername}
                validations={[required]}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <Input
                type="email"
                className="form-control"
                name="email"
                value={email}
                onChange={onChangeEmail}
                validations={[required]}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Senha</label>
              <Input
                type="password"
                className="form-control"
                name="password"
                value={password}
                onChange={onChangePassword}
                validations={[required]}
              />
            </div>
            <div className="form-group">
              <button className="btn btn-primary btn-block">Entrar</button>
            </div>
          </Form>
          <br></br>
          <p class="link">
            Ainda não tem conta?
            <a href="/register"> Faça seu cadastro</a>
          </p>
          <br></br>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>&copy; LOVELACE CODE</p>
        </div>
      </div>
    </div>
  );
};
export default Login;
