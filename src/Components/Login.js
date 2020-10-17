import React from "react";
import "../style/app.scss";
import loginImg from "../img/logIn.svg";
import registerImg from "../img/register.svg";

const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccout,
    emailError,
    passwordError,
  } = props;

  return (
    <section className="login">
      <div className="loginContainer">
        {hasAccount ? <h1>Sign In</h1> : <h1>Register</h1>}

        {hasAccount ? (
          <img className="log_img" src={loginImg} alt="" />
        ) : (
          <img className="log_img" src={registerImg} alt="" />
        )}

        <div className="md-form">
          <label>Email</label>
          <input
            type="text"
            autofocus
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
          />
        </div>

        <p className="errorMsg">{emailError}</p>

        <div className="md-form">
          <label>Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
          />
        </div>
        <p className="errorMsg">{passwordError}</p>

        <div className="btnContainer">
          {hasAccount ? (
            <>
              <button onClick={handleLogin} className="btn btn-primary">
                Sign In
              </button>
              <p>
                If you are not having an account{" "}
                <span onClick={() => setHasAccout(!hasAccount)}>Register</span>
              </p>
            </>
          ) : (
            <>
              <button onClick={handleSignup} className="btn btn-primary">
                Register
              </button>
              <p>
                If you are having an account{" "}
                <span onClick={() => setHasAccout(!hasAccount)}>Sign In</span>
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Login;
