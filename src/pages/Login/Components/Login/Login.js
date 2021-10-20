import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import useAuth from "../../../../hooks/useAuth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const auth = getAuth();

  const { signInWithGoogle, setError, setUser, setIsLoading } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";

  const handleGoogleLogIn = () => {
    signInWithGoogle()
      .then((result) => {
        history.push(redirect_uri);
        setUser(result.user);
        setError("");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const toggleLogin = (e) => {
    setIsLogin(e.target.checked);
  };
  const handleRegistration = (e) => {
    e.preventDefault();
    isLogin ? createNewUser(email, password) : processLogin(email, password);
  };

  const processLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        history.push(redirect_uri);
        console.log(user);
        setErrorMessage("");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const createNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        history.push(redirect_uri);
        console.log(user);
        setErrorMessage("");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-1"></div>
        <div className="col-md-6 col-sm-10">
          <h1 className="my-3">
            {isLogin ? "Register: Create Account" : "Login"}
          </h1>
          <form onSubmit={handleRegistration}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                onBlur={handleEmailChange}
                type="email"
                className="form-control"
                id="email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                onBlur={handlePasswordChange}
                type="password"
                className="form-control"
                id="password"
                required
              />
            </div>
            <div className="mb-3 form-check">
              <input
                onClick={toggleLogin}
                type="checkbox"
                className="form-check-input"
                id="check"
              />
              <label className="form-check-label" htmlFor="check">
                Haven't registered yet?
              </label>
            </div>
            <input
              type="submit"
              className="btn btn-danger"
              value={isLogin ? "Register" : "Login"}
            />
            <small className="text-danger ms-5">{errorMessage}</small>
          </form>

          <br />
          {isLogin ? (
            <p>
              Already have an account? <Link to="/login">login</Link>
            </p>
          ) : (
            <p>
              Haven't registered yet?{" "}
              <Link to="/registration">Create Account</Link>
            </p>
          )}
          <br />
          <p className="fw-bold">
            -------------------- or --------------------
          </p>
          <br />

          <button onClick={handleGoogleLogIn} className="btn btn-secondary">
            <img
              className="me-2 text-center"
              src="https://cdn.iconscout.com/icon/free/png-256/google-2981831-2476479.png"
              width="18"
              alt=""
            />
            Sign in with Google
          </button>
        </div>
        <div className="col-md-3 col-sm-1"></div>
      </div>
    </div>
  );
};

export default Login;
