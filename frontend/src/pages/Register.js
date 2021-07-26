import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import { Navbar } from "../components/homepage/Navbar";
import "./style.css";

import { register } from "../actions/auth";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        Esse campo é obrigatório!
      </div>
    );
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        Esse e-mail não é válido!
      </div>
    );
  }
};

const validUsername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        O username precisa ter entre 3 e 20 caracteres
      </div>
    );
  }
};

const validPassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        A password tem que ter entre 6 e 40 caracteres
      </div>
    );
  }
};

const Register = () => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successfull, setSuccessfull] = useState("");

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

  const handleRegister = (e) => {
    e.preventDefault();
    setSuccessfull(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(register(username, email, password))
        .then(() => {
          setSuccessfull(true);
        })
        .catch(() => {
          setSuccessfull(false);
        });
    }
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div class="content">
          <div className="row" id="border">
            <div id="cadastro" className="col-md">
              <div className="espaco"></div>
              <div className="avatar">
                <img
                  src="img/logo/logo-tesourinhocolorido.png"
                  width="300px"
                  alt="Logo Meu Tesourinho"
                />
              </div>
              <p className="h1singup">Cadastre-se agora:</p>
              <Form onSubmit={handleRegister} ref={form}>
                {!successfull && (
                  <div>
                    <div className="form-group">
                      <label htmlFor="username">Nome</label>
                      <Input
                        type="text"
                        className="form-control"
                        name="username"
                        value={username}
                        onChange={onChangeUsername}
                        validations={[required, validUsername]}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">E-mail</label>
                      <Input
                        type="text"
                        className="form-control"
                        name="email"
                        value={email}
                        onChange={onChangeEmail}
                        validations={[required, validEmail]}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Senha</label>
                      <Input
                        type="text"
                        className="form-control"
                        name="password"
                        value={password}
                        onChange={onChangePassword}
                        validations={[required, validPassword]}
                      />
                    </div>
                    <br></br>
                    <div className="form-group">
                      <button
                        id="btncadastro"
                        className="btn btn-primary btn-block"
                      >
                        Cadastre-se
                      </button>
                    </div>
                  </div>
                )}
                {message && (
                  <div className="form-group">
                    <div
                      className={
                        successfull
                          ? "alert alert-success"
                          : "alert alert-danger"
                      }
                      role="alert"
                    >
                      {message}
                    </div>
                  </div>
                )}
                ;
                <CheckButton style={{ display: "none" }} ref={checkBtn} />
                <br></br>
                <p class="link">
                  Já tem conta?
                  <a href="#paralogin"> Login</a>
                </p>
                <br></br>
              </Form>
            </div>
          </div>
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

export default Register;
